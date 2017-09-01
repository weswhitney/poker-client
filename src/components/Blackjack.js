import React from 'react';
import Table from './Table';
import Stats from './Stats';

class Blackjack extends React.Component {
  render() {
    return (
      <div>
        <Table />
        Blackjack
        <Stats />
      </div>
    )
  }
}

export default Blackjack;
