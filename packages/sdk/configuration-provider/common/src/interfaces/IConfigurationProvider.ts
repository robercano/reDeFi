import { ConfigItem } from '../types/ConfigItem'
import { ConfigKey } from '../types/ConfigKey'

/**
 * IConfigurationProvider
 * Interface for the configuration provider, which is used to retrieve configuration items which are
 *              typically stored in environment variables, although it could also fetch them from other sources
 */
export interface IConfigurationProvider {
  /**
   * getConfigurationItem
   * Retrieves a configuration item from the configuration provider
   * @param params.name The name of the configuration item to retrieve
   * @returns The value of the configuration item
   */
  getConfigurationItem(params: { name: ConfigKey }): ConfigItem
}
