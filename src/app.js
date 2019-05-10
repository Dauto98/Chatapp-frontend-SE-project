import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/authentication/index.js";
import Conversations from "./components/conversations/index.js";

import { receiveToken } from "./actions/authenActions.js";

const App = (props) => {
  useEffect(() => {
    props.receiveToken(localStorage.getItem("token"));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Conversations} />
        {props.token ? null : <Redirect from="*" to="/login" />}
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps, { receiveToken })(App);