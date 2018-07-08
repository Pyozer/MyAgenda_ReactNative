import React from "react";
import { ScrollView, View, Text } from "react-native";
import DrawerItem from "./DrawerItem";

const DrawerContent = props => (
  <ScrollView>
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
    <View>
      <DrawerItem
        onPress={() => props.navigation.navigate("FindRoomScreen")}
        text="Find room"
        icon={"location-city" || "meeting_room"}
      />

      <DrawerItem
        onPress={() => props.navigation.navigate("SettingsScreen")}
        text="Settings"
        icon="settings"
      />

      <DrawerItem
        onPress={() => props.navigation.navigate("UpdateScreen")}
        text="Update"
        icon="system-update"
      />

      <DrawerItem
        onPress={() => props.navigation.navigate("AboutScreen")}
        text="About"
        icon="info"
      />

      <DrawerItem
        onPress={() => props.navigation.navigate("IntroductionScreen")}
        text="Introduction"
        icon="help-outline"
      />

      <DrawerItem
        onPress={() => props.navigation.navigate("LogoutScreen")}
        text="Logout"
        icon="exit-to-app"
      />
    </View>
  </ScrollView>
);

export default DrawerContent;
