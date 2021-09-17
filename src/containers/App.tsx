import React, { createContext, Dispatch, useReducer } from 'react';
import {BrowserRouter as Router, Redirect, Route, RouteComponentProps, Switch} from "react-router-dom";
import Login from "../components/Login";
import Search from "../components/Search";

import {initialState, reducer} from '../store/reducer';
import NotFound from '../components/NotFound';
import Results from '../components/Results';

type InitialStateType = {
  isAuthenticated?: boolean,
  accessToken?: string | null,
  user?: object,
  clientId?: string,
  redirectUrl?: string,
  proxyUrl?: string,
  searchQuery?: string | null
  pageCount?: number
}

export const AuthContext = createContext<{state: InitialStateType, dispatch: Dispatch<any>}>({
  state: initialState,
  dispatch: () => null
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <Router>
        <Switch>
        <Route exact path="/" render={(props: RouteComponentProps) => {
          return (
            state.isAuthenticated ?
            <Redirect to="/search" /> :
            <Redirect to="/login" /> 
        )
        }}  />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <Route path="/results" component={Results} />
        <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
