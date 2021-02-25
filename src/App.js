import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonGoUp from "./components/ButtonGoUp";
import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";
import HomePage from "./containers/HomePage";
import Footer  from "./components/Footer";

function App() {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <div>
      <Router>
        <ButtonGoUp />
        <NavBar />
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
