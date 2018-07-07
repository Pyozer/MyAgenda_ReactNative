import { Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import MainScreen from './components/pages/MainScreen';
import AboutScreen from './components/pages/AboutScreen';

const Stack = {
	MainScreen: MainScreen,
	AboutScreen: AboutScreen
}

const StackOptions = {
  initialRouteName: "MainScreen",
  headerMode: "screen",
	navigationOptions: {
	  headerTitleStyle : { width : '100%' }
	}
}

const App = createDrawerNavigator({
	HomeScreen: createStackNavigator(Stack, StackOptions),
  AboutScreen: createStackNavigator(Stack, StackOptions)
});

export default App;
