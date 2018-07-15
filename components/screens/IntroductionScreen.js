import React from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import AppIntroSlider from "react-native-app-intro-slider";

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
  text: {
    color: "#f5f5f5",
    fontSize: 18
  }
});

function slide(key, name, text, image, bgColor = "#181818") {
  return {
    key: key,
    title: name,
    titleStyle: styles.title,
    text: text,
    textStyle: styles.text,
    image: { uri: image },
    imageStyle: styles.image,
    backgroundColor: bgColor
  };
}

const slides = [
  slide(
    "welcome",
    "Welcome !",
    "MyAgenda allow you to access the Le Mans University calendar directly on your phone / tablet!",
    "https://pyozer.github.io/images/projects/myagenda/myagenda_logo.png"
  ),
  slide(
    "chooseAgenda",
    "Choose your agenda",
    "In the settings, you can choose your department, year and group to display the corresponding calendar.",
    "https://raw.githubusercontent.com/Pyozer/MyAgenda/master/app/src/main/res/mipmap-xxxhdpi/intro_group.png"
  ),
  slide(
    "personalization",
    "Personalization",
    "Choose between a light, dark or custom theme. A total of 48 combinations is possible!",
    "https://raw.githubusercontent.com/Pyozer/MyAgenda/master/app/src/main/res/mipmap-xxxhdpi/intro_theme.png"
  ),
  slide(
    "note",
    "Note",
    "Press and hold a course and enter your note. A color will appear on the side, this one is customizable.",
    "https://raw.githubusercontent.com/Pyozer/MyAgenda/master/app/src/main/res/mipmap-xxxhdpi/intro_note.png"
  ),
  slide(
    "customevent",
    "Custom Event",
    "You can add your own event to the calendar and assign it to a special color.",
    "https://raw.githubusercontent.com/Pyozer/MyAgenda/master/app/src/main/res/mipmap-xxxhdpi/intro_event.png"
  ),
  slide(
    "offlinemode",
    "Offline Mode",
    "Once your calendar is loaded at least once, it will be backed up for offline use.",
    "https://raw.githubusercontent.com/Pyozer/MyAgenda/master/app/src/main/res/mipmap-xxxhdpi/intro_internet.png"
  )
];

export default class IntroductionScreen extends React.Component {
  static navigationOptions = { header: null };

  _navigateTo = routeName => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routeName })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  _storeData = async () => {
    try {
      await AsyncStorage.setItem("alreadyIntro", "true");
    } catch (error) {
      console.log(error);
    }
  };

  _onDone = () => {
    this._storeData();
    if (this.props.navigation.getParam("fromSplashScreen", "false") === "false")
      this.props.navigation.goBack();
    else this._navigateTo("MainNavigation");
  };

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        onSkip={this._onDone}
        dotColor="rgba(255, 255, 255, 0.2)"
        showSkipButton={true}
        showPrevButton={true}
      />
    );
  }
}
