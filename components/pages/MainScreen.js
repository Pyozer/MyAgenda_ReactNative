import React from 'react'
import { View, Text, Button } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class MainScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'MyAgenda',
      headerLeft: (
        <Icon name="bars" size={20} onPress={() => navigation.toggleDrawer()} style={{marginLeft: 16}} />
      )
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>MainScreen</Text>
        <Button title="Go to About" onPress={() => navigation.navigate('AboutScreen')}/>
      </View>
    )
  }

}
