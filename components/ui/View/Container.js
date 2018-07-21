import React from "react";
import { StyleSheet, View } from "react-native";

const Container = props => (
  <View {...props} style={[styles.container, props.style]} />
)

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff"
  }
})

export default Container;
