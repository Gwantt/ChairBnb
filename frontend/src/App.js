import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from './store/session'
import Navigation from './components/Navigation';
import SignupFormPage from './components/SignUpForm';
import Chairs from './components/Chairs';
import HomePage from './components/homePage';
import SelectedChair from './components/SelectedChair';
import ChairForm from './components/ChairForm';
import EditChair from './components/ChairEdit';

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
            <HomePage />
          </Route>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route exact path='/chairs'>
            <Chairs />
          </Route>
          <Route path='/chairs/:id'>
            <SelectedChair />
          </Route>
          <Route path='/create'>
            <ChairForm />
          </Route>
          <Route path='/chairs/:id/edit'>
            <EditChair />
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
