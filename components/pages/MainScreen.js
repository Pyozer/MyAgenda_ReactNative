import React from "react";
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "MyAgenda",
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          onPress={() => navigation.toggleDrawer()}
          style={{ padding: 16 }}
        />
      )
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>MainScreen</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("AboutScreen")}
        />
      </View>
    );
  }
}
