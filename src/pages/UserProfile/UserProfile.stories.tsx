import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { withKnobs } from "@storybook/addon-knobs";
import rootReducer from "../../store/reducer";
import UserProfile from "./UserProfile";
import { DataSyncContext, dataSyncService } from "../../services/dataSync";
import { HashRouter as Router } from "react-router-dom";
import "../../index.scss";

const store = createStore(rootReducer);

export default {
  title: "UserProfile",
  component: UserProfile,
  decorators: [withKnobs],
};

export const Default = () => (
  <DataSyncContext.Provider value={dataSyncService}>
    <Provider store={store}>
      <Router>
        <UserProfile />
      </Router>
    </Provider>
  </DataSyncContext.Provider>
);
