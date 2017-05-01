import React from "react";
import {connect} from "react-redux";
import {Thumbnail, List, ListItem, Text, Container, Header, Title, Button, Left, Right, Body, Icon} from "native-base";
// import Icon from 'react-native-vector-icons/Ionicons'
import { Actions as NavigationActions } from 'react-native-router-flux'


const dataObjects = [
  {title: 'First Title', description: '5 PLN'},
  {title: 'Second Title', description: '20 PLN'},
  {title: 'Third Title', description: '14 PLN'},
  {title: 'Fourth Title', description: '22 PLN'},
  {title: 'Fifth Title', description: '13 PLN'},
  {title: 'Sixth Title', description: '20 PLN'},
  {title: 'Seventh Title', description: '35 PLN'},
  {title: 'Eighth Title', description: '45 PLN'},
  {title: 'Ninth Title', description: '23 PLN'},
  {title: 'Tenth Title', description: '67 PLN'},
  {title: 'Eleventh Title', description: '20 PLN'},
  {title: '12th Title', description: '20 PLN'},
  {title: '13th Title', description: '12 PLN'},
  {title: '14th Title', description: '50 PLN'},
  {title: '15th Title', description: '50 PLN'},
  {title: '16th Title', description: '23 PLN'},
  {title: '17th Title', description: '50 PLN'},
  {title: '18th Title', description: '50 PLN'},
  {title: '19th Title', description: '12 PLN'},
  {title: '20th Title', description: '50 PLN'}
];

class ListviewExample extends React.Component {
  render() {
    return (
      <Container >
        <Header>
          <Left>
            <Button transparent onPress={()=> this.context.drawer.open()}>
              <Icon name="ios-menu"/>
            </Button>
          </Left>
          <Body style={{flex: 3}}>
          <Title>Donation history</Title>
          </Body>
          <Right />
        </Header>
        <List dataArray={dataObjects}
              renderRow={(item) =>
                <ListItem avatar onPress={()=> {NavigationActions.launchScreen()}}>
                  <Left>
                    <Thumbnail
                      source={{uri: 'https://avatars0.githubusercontent.com/u/18291217?v=3&s=460'}}/>
                  </Left>
                  <Body>
                  <Text>{item.title}</Text>
                  <Text note>{item.description}</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
              }/>
      </Container>
    )
  }
}
ListviewExample.contextTypes = {drawer: React.PropTypes.object}
const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(ListviewExample)
