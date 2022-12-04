import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Home from "../pages/home";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Settings from "../pages/settings";
import EditAccount from "../pages/editAccount";

const RoutesApp = ({ setThemeSelected, themeSelected }) => {
  const { isCadastred } = useAuth();
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route
            exact
            path="/home"
            element={isCadastred ? <Home /> : <Signin />}
          />
          <Route
            exact
            path="/home/settings"
            element={
              isCadastred ? (
                <Settings
                  setThemeSelected={setThemeSelected}
                  themeSelected={themeSelected}
                />
              ) : (
                <Signin />
              )
            }
          />
          <Route
            exact
            path="/home/settings/user"
            element={
              isCadastred ? (
                <EditAccount
                  setThemeSelected={setThemeSelected}
                  themeSelected={themeSelected}
                />
              ) : (
                <Signin />
              )
            }
          />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default RoutesApp;
