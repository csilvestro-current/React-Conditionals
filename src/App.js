import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Routes from './components/Routes';
// import Nav from './components/Nav';
// import Ads from './pages/Ads';

//React Router
import { BrowserRouter as Router} from 'react-router-dom'


class App extends Component {
  state = {
    users: [{
      usrname: 'Florida Dog Rescue',
      avatar: require('../src/images/girl-1.svg')
    },
    {
      usrname: 'ASPCA',
      avatar: require('../src/images/man.svg')
    }]
  }
  render() {
    return (
      <Router>
        <div>
          <Header usrname="ASPCA" />
            <div style={styles.main}>
              <Routes />
            </div>
        </div>
      </Router>
    );
  }
}

export default App


const styles= {
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: 'whitesmoke',
    justifyContent: 'space-around',
    height: '100vh',
  },
  nav: {
    background:'lightslategray',
    flexGrow: 1,
  },
  main: {
    flexGrow: 6,
  },
  rtCont: {
    background:'lightslategray',
    flexGrow: 1,
  }
}