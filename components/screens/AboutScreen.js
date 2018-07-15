import React from "react";
import { View, Text } from "react-native";
import Container from "../ui/View/Container";

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <Container>
        <Text>Aboutcreen</Text>
      </Container>
    );
  }
}
