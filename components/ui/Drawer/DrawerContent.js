import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import DrawerItem from "./DrawerItem";

const Separator = () => <View style={styles.separator} />;

const DrawerContent = props => (
  <ScrollView>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>MyAgenda</Text>
    </View>
    <View>
      <DrawerItem
        onPress={() => props.navigation.navigate("FindRoomScreen")}
        text="Find room"
        icon={"location-city" || "meeting_room"}
      />

      <Separator />

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

      <Separator />

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

      <Separator />

      <DrawerItem
        onPress={() => props.navigation.navigate("LogoutScreen")}
        text="Logout"
        icon="exit-to-app"
      />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ff0000",
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: { color: "white", fontSize: 30, marginTop: 25 },
  separator: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  }
});

export default DrawerContent;
