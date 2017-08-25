import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
