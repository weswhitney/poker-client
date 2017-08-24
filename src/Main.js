import React from 'react';
import Earth from './Earth';
import Mars from './Mars';
import Moon from './Moon';
import { Match } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Match pattern="/" component={Earth} />
        <Match pattern="/mars" component={Mars} />
        <Match pattern="/moon" component={Moon} />
      </main>
    )
  }
}

export default Main;
