import React from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { DrawerItems } from "react-navigation";

const DrawerContent = props => (
  <View>
    <View
      style={{
        backgroundColor: "#ff0000",
        height: 140,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 30 }}>Header</Text>
    </View>
    <DrawerItems {...props} />
    {/*<ScrollView>
      <DrawerItem
        onPress={() => props.navigation.navigate("FindRoomScreen")}
        text="Find room"
        icon="home"
      />

      <DrawerItem
        onPress={() => props.navigation.navigate("SettingsScreen")}
        text="Settings"
        icon="home"
      />

      <DrawerItem
        onPress={() => props.navigation.navigate("UpdateScreen")}
        text="Update"
        icon="home"
      />

      <DrawerItem
        onPress={() => props.navigation.navigate("AboutScreen")}
        text="About"
        icon="home"
      />

      <DrawerItem
        onPress={() => props.navigation.navigate("IntroductionScreen")}
        text="Introduction"
        icon="home"
      />

      <DrawerItem
        onPress={() => props.navigation.navigate("LogoutScreen")}
        text="Logout"
        icon="home"
      />
    </ScrollView>*/}
  </View>
);

const styles = {
  text: {
    padding: 16
  }
};

export default DrawerContent;
