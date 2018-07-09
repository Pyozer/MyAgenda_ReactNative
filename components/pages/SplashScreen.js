import React from "react";
import { StyleSheet, View, Image, Text, ActivityIndicator } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import Container from "../ui/View/Container";

export default class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => this._navigateTo("MainNavigation"), 500);
  }

  _navigateTo = routeName => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routeName })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <Container style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri:
              "https://pyozer.github.io/images/projects/myagenda/myagenda_logo.png"
          }}
        />
        <Text style={styles.title}>MyAgenda</Text>

        <ActivityIndicator size={60} color="#ff0000" style={styles.loader} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 125,
    height: 125,
    marginBottom: 5
  },
  title: {
    fontWeight: "200",
    fontSize: 35,
    width: "100%",
    textAlign: "center",
    color: "#444",
    marginBottom: 45
  }
});
