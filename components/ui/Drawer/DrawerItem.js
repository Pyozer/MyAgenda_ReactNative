import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableNativeFeedback
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const IconDrawer = ({ icon }) => (
  <Icon name={icon} size={25} style={[styles.icon, styles.inactiveIcon]} />
);

const DrawerItem = ({ onPress, text, icon }) => (
  <TouchableNativeFeedback
    onPress={onPress}
    background={TouchableNativeFeedback.Ripple("rgba(0, 0, 0, .32)", false)}
    delayPressIn={0}
  >
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <IconDrawer icon={icon} />
        <Text style={styles.label}>{text}</Text>
      </View>
    </SafeAreaView>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4
  },
  item: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: "center"
  },
  inactiveIcon: {
    opacity: 0.62
  },
  label: {
    margin: 16,
    fontWeight: "bold",
    width: "100%"
  }
});

export default DrawerItem;
