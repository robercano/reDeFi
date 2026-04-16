import React from "react";
import { cn } from "../../lib/utils";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn("p-6 rounded-xl bg-black/60 border border-[var(--neon-orange)]/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,85,0,0.1)] relative overflow-hidden group", className)}
      {...props}
    >
      <div className="absolute right-0 top-0 w-32 h-32 bg-[var(--neon-orange)]/10 blur-[50px] -mt-10 -mr-10 transition-all duration-700 group-hover:bg-[var(--neon-orange)]/20"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
