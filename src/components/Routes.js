import React, { Component } from 'react'
//React Router
import { Route, Switch } from 'react-router-dom'
import Settings from '../pages/Settings'
import SettingsLoader from '../pages/SettingsLoader'


class Main extends Component {
  render() {
    return (
      <section className="content main-content">
        <Switch>
          <Route exact path='/' component={Settings} />
          <Route exact path='/SettingsLoader' component={SettingsLoader} />
          <Route exact path='/Settings' component={Settings} />
        </Switch>
      </section>
    );
  }
}

export default Main
