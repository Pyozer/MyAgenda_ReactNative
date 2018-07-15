import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import DrawerContent from "./components/ui/Drawer/DrawerContent";
import MainScreen from "./components/screens/MainScreen";
import AboutScreen from "./components/screens/AboutScreen";
import SplashScreen from "./components/screens/SplashScreen";
import IntroductionScreen from "./components/screens/IntroductionScreen";

const StackNavigation = createStackNavigator(
  {
    MainScreen: MainScreen,
    FindRoomScreen: AboutScreen,
    SettingsScreen: AboutScreen,
    UpdateScreen: AboutScreen,
    AboutScreen: AboutScreen,
    IntroductionScreen: IntroductionScreen,
    LogoutScreen: AboutScreen
  },
  {
    initialRouteName: "MainScreen",
    headerMode: "float",
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
    StackNav: {
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

const SplashScreenNav = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    IntroductionScreen: IntroductionScreen,
    MainNavigation: App
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none"
  }
);

export default SplashScreenNav;
