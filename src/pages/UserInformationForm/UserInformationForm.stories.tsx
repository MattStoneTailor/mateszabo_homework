import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { withKnobs } from "@storybook/addon-knobs";
import UserInformationForm from "./UserInformationForm";
import { HashRouter as Router } from "react-router-dom";
import rootReducer from "../../store/reducer";
import { DataSyncContext, dataSyncService } from "../../services/dataSync";
import "../../index.scss";

const store = createStore(rootReducer);

export default {
  title: "UserInformationForm",
  component: UserInformationForm,
  decorators: [withKnobs],
};

export const Default = () => (
  <DataSyncContext.Provider value={dataSyncService}>
    <Provider store={store}>
      <Router>
        <UserInformationForm />
      </Router>
    </Provider>
  </DataSyncContext.Provider>
);
