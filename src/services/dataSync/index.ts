import { SessionDataSync } from "./SessionDataSync";
import * as React from "react";

export const dataSyncService = new SessionDataSync();
export const DataSyncContext = React.createContext(dataSyncService);
