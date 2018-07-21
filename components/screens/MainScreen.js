import React from "react";
import { View, TouchableOpacity, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { parseToIcal } from "../../utils/Ical";
import CoursList from "../ui/CoursList/CoursList";

const ICAL_URL = "https://pastebin.com/raw/a6HYJtE4"

export default class MainScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "MyAgenda",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} style={{ padding: 16 }} />
        </TouchableOpacity>
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {coursData: []}
  }

  componentDidMount() {
    this.getIcalFromURL();
  }

  getIcalFromURL = () => {
    var request = new XMLHttpRequest();
    request.open("GET", ICAL_URL, true);
    request.send(null);

    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        var type = request.getResponseHeader("Content-Type");
        if (type.indexOf("text") !== 1) {
          let ical = parseToIcal(request.responseText)
          this.setState({ coursData: ical })
        }
      }
    };
  }

  render() {
    let coursData = this.state.coursData;
    console.log("Main", coursData)
    return (
      <View>
        <CoursList data={coursData} />
      </View>
    );
  }
}
