import React, { lazy, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const Login = lazy(() => import('./Login'));
const History = lazy(() => import('./History'));
const Compare = lazy(() => import('./Compare'));

const App = () => (
  <Suspense fallback={<>Loading...</>}>
    <Router>
      <Switch>
        <Route path="/" exact render={props => <Login {...props} />} />
        <Route path="/login" exact render={props => <Login {...props} />} />
        <Route path="/history" exact render={props => <History {...props} />} />
        <Route path="/compare" exact render={props => <Compare {...props} />} />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
