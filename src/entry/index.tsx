import { hot } from "react-hot-loader";
import * as React from "react";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import Reducer from "../store/reducer";
import { DataSyncContext, dataSyncService } from "../services/dataSync";
import App from "./App/App";

const store = createStore(Reducer);

const Start = () => (
  <DataSyncContext.Provider value={dataSyncService}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </DataSyncContext.Provider>
);

export default hot(module)(Start);
