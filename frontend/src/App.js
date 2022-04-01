import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from './store/session'
import SingupFormPage from './components/SignUpForm';
import Navigation from './components/Navigation';

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
            <SingupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
