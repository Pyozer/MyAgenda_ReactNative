import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import DrawerContent from "./components/ui/DrawerContent";
import MainScreen from "./components/pages/MainScreen";
import AboutScreen from "./components/pages/AboutScreen";
import Icon from "react-native-vector-icons/MaterialIcons";

const IconDrawer = ({ icon }) => (
  <Icon name={icon} size={30} style={{ padding: 16, color: "#222" }} />
);

const StackNavigation = createStackNavigator(
  {
    MainScreen: MainScreen,
    FindRoomScreen: AboutScreen,
    SettingsScreen: AboutScreen,
    UpdateScreen: AboutScreen,
    AboutScreen: AboutScreen,
    IntroductionScreen: AboutScreen,
    LogoutScreen: AboutScreen
  },
  {
    drawerLabel: "Home",
    drawerIcon: <IconDrawer icon="home" />,
    initialRouteName: "MainScreen",
    headerMode: "screen",
    navigationOptions: {
      headerTitleStyle: { width: "100%" }
    }
  }
);

StackNavigation.navigationOptions = ({ navigation }) => {
  let drawerLockMode =
    navigation.state.index > 0 ? "locked-closed" : "unlocked";
  return { drawerLockMode };
};

const App = createDrawerNavigator(
  {
    FindRoomScreen: {
      screen: StackNavigation,
      navigationOptions: {
        drawerLabel: "Drawer Item 1",
        drawerIcon: ({ tintColor }) => <IconDrawer icon="home" />
      }
    },
    SettingsScreen: {
      screen: StackNavigation,
      navigationOptions: {
        drawerLabel: "Drawer Item 1",
        drawerIcon: ({ tintColor }) => <IconDrawer icon="home" />
      }
    },
    UpdateScreen: {
      screen: StackNavigation
    },
    AboutScreen: {
      screen: StackNavigation
    },
    IntroductionScreen: {
      screen: StackNavigation
    },
    LogoutScreen: {
      screen: StackNavigation
    }
  },
  {
    contentComponent: DrawerContent,
    navigationOptions: {
      headerTitleStyle: { width: "100%" }
    },
    contentOptions: {
      labelStyle: { width: "100%" }
    }
  }
);

export default App;
