import { VolatilityProfile } from './types';
import { DataOrchestrator } from './DataOrchestrator';

/**
 * Interface that classes must implement to use the Cache decorator.
 */
export interface ICacheAware {
  /**
   * @property cacheOrchestrator
   * The DataOrchestrator instance responsible for executing layered caching logic.
   *              Must be provided for the Cache decorator to function properly.
   */
  cacheOrchestrator?: DataOrchestrator;
}

/**
 * Method decorator to automatically cache the result of the method based on a VolatilityProfile.
 * The class using this decorator MUST have a `cacheOrchestrator` property.
 * 
 * @param profile The data volatility profile to govern caching rules.
 */
export function Cache(profile: VolatilityProfile) {
  return function (
    targetOrMethod: unknown,
    propertyKeyOrContext: string | { name: string | symbol },
    descriptor?: PropertyDescriptor
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): any {
    // 1. Legacy experimentalDecorators support
    if (descriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = async function (this: unknown, ...args: unknown[]) {
        return executeCache(this, profile, propertyKeyOrContext as string, originalMethod, args);
      };
      return descriptor;
    }

    // 2. TypeScript 5+ Standard Decorators support
    const originalMethod = targetOrMethod as (...args: unknown[]) => unknown;
    const context = propertyKeyOrContext as { name: string };
    
    return async function (this: unknown, ...args: unknown[]) {
      return executeCache(this, profile, String(context.name), originalMethod, args);
    };
  };
}

async function executeCache(
  instance: unknown,
  profile: VolatilityProfile,
  methodName: string,
  originalMethod: (...args: unknown[]) => unknown,
  args: unknown[]
) {
  const orchestrator = (instance as ICacheAware).cacheOrchestrator;
      
  if (!orchestrator) {
    console.warn(
      `[reDeFi Cache] Class using @Cache on '${methodName}' lacks a 'cacheOrchestrator' property. Bypassing cache.`
    );
    return originalMethod.apply(instance, args);
  }

  // Construct a globally unique cache key: ClassName_MethodName_[arg1:arg2:...]
  const className = instance && typeof instance === 'object' && 'constructor' in instance 
    ? (instance.constructor as { name: string }).name 
    : 'UnknownClass';
  
  // Serialize arguments safely
  const serializedArgs = args.map(arg => {
    if (typeof arg === 'bigint') return arg.toString() + 'n';
    if (typeof arg === 'object') {
      try {
        return JSON.stringify(arg, (_, v) => typeof v === 'bigint' ? v.toString() + 'n' : v);
      } catch {
        return 'UnserializableObj';
      }
    }
    return String(arg);
  }).join(':');

  const cacheKey = `${className}_${methodName}_[${serializedArgs}]`;

  // Delegate to the DataOrchestrator
  return orchestrator.execute(
    profile,
    cacheKey,
    () => originalMethod.apply(instance, args) as Promise<unknown>
  );
}
