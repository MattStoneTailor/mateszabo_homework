import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "../../index.scss";
import rootReducer from "../../store/reducer";
import { DataSyncContext, dataSyncService } from "../../services/dataSync";

const store = createStore(rootReducer);

export default {
  title: "App",
  component: App,
};

export const Default = () => (
  <DataSyncContext.Provider value={dataSyncService}>
    <Provider store={store}>
      <App />
    </Provider>
  </DataSyncContext.Provider>
);
