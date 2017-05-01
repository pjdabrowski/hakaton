import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import { List, ListItem, Text, View, Content } from 'native-base'
import { Actions as NavigationActions } from 'react-native-router-flux'

import styles from './Styles/DrawerContentStyles'
import { Images } from '../Themes'


class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={Images.logoDark} style={styles.logo} />
        <Content>
          <ListItem onPress={()=> {NavigationActions.launchScreen();this.context.drawer.close()}}>
            <Text>Scan code</Text>
          </ListItem>
          <ListItem onPress={()=> {NavigationActions.listViewExample();this.context.drawer.close()}}>
            <Text>Donation history</Text>
          </ListItem>
          <ListItem onPress={()=> {NavigationActions.cardExample();this.context.drawer.close()}}>
            <Text>Favourites</Text>
          </ListItem>
        </Content>
      </View>
    )
  }

}
DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
