import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import ListviewExample from '../Containers/ListviewExample'
import CardExample from '../Containers/CardExample'
import Login from '../Containers/LoginScreen'


/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene initial key='login' component={Login} title='Login'  duration={400}/>
          <Scene key='launchScreen' component={LaunchScreen} title='LaunchScreen'  duration={400}/>
          <Scene key='listViewExample' component={ListviewExample}  duration={400}/>
          <Scene key='cardExample' component={CardExample}  duration={400}/>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
