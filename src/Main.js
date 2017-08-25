import React from 'react';
import Earth from './components/Earth';
import Mars from './components/Mars';
import Moon from './components/Moon';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Earth} />
          <Route exact path="/mars" component={Mars} />
          <Route exact path="/moon" component={Moon} />
        </Switch>
      </main>
    )
  }
}

export default Main;
