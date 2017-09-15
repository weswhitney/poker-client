import React from 'react';
import LandingPage from './LandingPage';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </main>
    )
  }
}

export default Main;
