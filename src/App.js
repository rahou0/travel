import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ButtonGoUp from "./components/ButtonGoUp";
import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";
import HomePage from "./containers/HomePage";
import ContactUs from "./containers/ContactUs";
import SentMessagePage from "./containers/SentMessagePage";
import Footer from "./components/Footer";
import SearchPage from "./containers/SearchPage";
import ContentPage from "./containers/ContentPage";
import TestPage from "./containers/TestPage";
import LoginPage from "./containers/LoginPage";
import FaqPage from "./containers/FaqPage";
import RegistrePage from "./containers/RegistrePage";
import ContributePage from "./containers/ContributePage";
import XthreeDom from "./containers/xthreeDom";

function App() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div>
      <Router>
        <ButtonGoUp />
        <NavBar />
        <Switch>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route path="/contact/sent">
            <SentMessagePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/registre">
            <RegistrePage />
          </Route>
          <Route path="/faq">
            <FaqPage />
          </Route>
          <Route path="/contribute">
            <ContributePage />
          </Route>
          {/* <Route path="/dashboard/:page">
            {localStorage.getItem("token") ? (
              <Dashboard />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/dashboard/">
            {localStorage.getItem("token") ? (
              <Dashboard />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/test">
            <TestPage />
          </Route> */}
          <Route path="/search/:selector=:id">
            <SearchPage />
          </Route>
          <Route path="/place/:id">
            <ContentPage />
          </Route>
          <Route path="/x3dom">
            <XthreeDom />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
