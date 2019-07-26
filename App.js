/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet, Platform, View } from "react-native";
import AppNavigator from "./app/router/index";

const content = Platform.select({
  ios: () => (
    <SafeAreaView style={{ flex: 1, backgroundColor: "F5FCFF" }}>
      <AppNavigator />
    </SafeAreaView>
  ),
  android: () => (
    <View style={{ flex: 1, backgroundColor: "F5FCFF" }}>
      <AppNavigator />
    </View>
  )
})();

const App = () => {
  return <Fragment>{content}</Fragment>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default App;
