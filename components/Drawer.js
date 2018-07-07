import { createDrawerNavigator } from 'react-navigation'
import MainScreen from './pages/MainScreen';
import AboutScreen from './pages/AboutScreen';

const Drawer = createDrawerNavigator({
  MainScreen: MainScreen,
  AboutScreen: AboutScreen
})

export default Drawer
