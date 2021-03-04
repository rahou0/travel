import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Route path="/dashboard/:page">
            <Dashboard />
          </Route>
          <Route path="/dashboard/">
            <Dashboard />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/search/:selector=:id">
            <SearchPage />
          </Route>
          <Route path="/place/:id">
            <ContentPage />
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
