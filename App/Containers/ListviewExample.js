import React from "react";
import {connect} from "react-redux";
import {Thumbnail, List, ListItem, Text, Container, Header, Title, Button, Left, Right, Body, Icon} from "native-base";
// import Icon from 'react-native-vector-icons/Ionicons'
import { Actions as NavigationActions } from 'react-native-router-flux'


const dataObjects = [
  {title: 'Łajek Łajkowski', description: '5 PLN'},
  {title: 'Łajek Łajkowski', description: '20 PLN'},
  {title: 'Łajek Łajkowski', description: '14 PLN'},
  {title: 'Łajek Łajkowski', description: '22 PLN'},
  {title: 'Łajek Łajkowski', description: '13 PLN'},
  {title: 'Łajek Łajkowski', description: '20 PLN'},
  {title: 'Łajek Łajkowski', description: '35 PLN'},
  {title: 'Łajek Łajkowski', description: '45 PLN'},
  {title: 'Łajek Łajkowski', description: '23 PLN'},
  {title: 'Łajek Łajkowski', description: '67 PLN'},
  {title: 'Łajek Łajkowski', description: '20 PLN'},
  {title: 'Łajek Łajkowski', description: '20 PLN'},
  {title: 'Łajek Łajkowski', description: '12 PLN'},
  {title: 'Łajek Łajkowski', description: '50 PLN'},
  {title: 'Łajek Łajkowski', description: '50 PLN'},
  {title: 'Łajek Łajkowski', description: '23 PLN'},
  {title: 'Łajek Łajkowski', description: '50 PLN'},
  {title: 'Łajek Łajkowski', description: '50 PLN'},
  {title: 'Łajek Łajkowski', description: '12 PLN'},
  {title: 'Łajek Łajkowski', description: '50 PLN'}
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
