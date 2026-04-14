"use client";

import { SDKProvider } from "@thesolidchain/sdk-client-react";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const apiURL = process.env.NEXT_PUBLIC_API_URL || "https://ps5xep63x8.execute-api.eu-central-1.amazonaws.com/staging";
  return <SDKProvider apiURL={apiURL}>{children}</SDKProvider>;
}
