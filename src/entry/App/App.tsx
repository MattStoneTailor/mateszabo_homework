import * as React from "react";
import UserInformationForm from "../../pages/UserInformationForm/UserInformationForm";
import UserProfile from "../../pages/UserProfile/UserProfile";
import Helmet from "../../components/Helmet";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataSyncContext } from "../../services/dataSync";
import { connect } from "react-redux";
import { setUserData } from "../../store/actions";

interface AppType {
  dispatch: (action) => void;
}
const App = ({ dispatch }: AppType) => {
  const dataSyncService = useContext(DataSyncContext);

  useEffect(() => {
    dataSyncService
      .retrieveUserData()
      .then((userData) => dispatch(setUserData(userData)));
  }, []);

  return (
    <Router>
      <Helmet />
      <Header />
      <main className={styles.main}>
        <Switch>
          <Route path="/profile" component={UserProfile} />
          <Route exact path="/" component={UserInformationForm} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default connect()(App);
