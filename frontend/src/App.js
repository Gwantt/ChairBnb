import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from './store/session'
import Navigation from './components/Navigation';
import SignupFormPage from './components/SignUpForm';
import Chairs from './components/Chairs';

function App() {
  const dispath = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispath(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  })

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <h1>Home Page</h1>
          </Route>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/chairs'>
            <Chairs />
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
