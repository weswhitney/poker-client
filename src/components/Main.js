import React from 'react';
import LandingPage from './LandingPage';
import Blackjack from './Blackjack';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/blackjack" component={Blackjack} />
        </Switch>
      </main>
    )
  }
}

export default Main;
