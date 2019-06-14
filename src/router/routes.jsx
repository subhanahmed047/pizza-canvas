import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/home/";
import { LoginForm, RegisterForm, ResetForm } from "../auth";
import ProtectedRoute from "./protectedRoute";

const appRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    protected: true
  },
  {
    path: "/login",
    component: LoginForm
  },
  {
    path: "/register",
    component: RegisterForm
  },
  {
    path: "/reset",
    component: ResetForm
  },
  {
    path: "/logout",
    component: LoginForm
  }
];

const Routes = () => {
  return (
    <Router>
      {appRoutes.map(route =>
        route.protected ? (
          <ProtectedRoute
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ) : (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          )
      )}
    </Router>
  );
};

export default Routes;
