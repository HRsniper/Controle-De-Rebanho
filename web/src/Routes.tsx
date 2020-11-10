import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Login } from "./pages/Login";

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        {/* <Redirect to='/login' /> */}
      </Switch>
    </BrowserRouter>
  );
};
