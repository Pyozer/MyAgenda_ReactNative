import React from "react";
import { TouchableOpacity, Text, Button } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import Container from "../ui/View/Container";

export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "MyAgenda",
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Icon name="menu" size={30} style={{ padding: 16 }} />
        </TouchableOpacity>
      )
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Text>MainScreen</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("AboutScreen")}
        />
      </Container>
    );
  }
}
