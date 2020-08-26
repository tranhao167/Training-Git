import React from "react";
import { Switch, Route } from "react-router";
import MainPage from "./Main/MainPage";
import Detail from "./Main/Detail";
import Create from "./Todolist/Create";

function Routes(props) {
  return (
    <Switch>
      <Route exact={true} path="/" component={MainPage} />
      <Route path="/create" component={Create} />
      <Route path="/:id" component={Detail} />
    </Switch>
  );
}

export default Routes;
