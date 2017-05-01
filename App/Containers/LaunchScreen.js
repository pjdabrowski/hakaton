import React from "react";
import { View } from "react-native";
import {Label, Container, Header, Content, Title, Button, Left, Right, Body, Icon} from "native-base";
import Camera from "react-native-camera";
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraType: Camera.constants.Type.back,
      showCamera: true,
      code: {}
    }
  }

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
          <Title>Scan test</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <View >
            <Camera
              style={styles.preview}
              onBarCodeRead={this.getCode.bind(this)}>
              <View style={styles.rectangleContainer}>
                <View style={styles.rectangle}/>
              </View>
            </Camera>
            <Label>{this.state.code.data}</Label>
            <Label>{this.state.code.data ? this.state.code.data.bounds : ""}</Label>
            <Label>{this.state.code.type}</Label>
          </View>
        </Content>
      </Container>

    )
  }

  getCode(code) {
    this.setState({
      showCamera: false,
      code: code
    });
  }
}

LaunchScreen.contextTypes = {
  drawer: React.PropTypes.object
};
