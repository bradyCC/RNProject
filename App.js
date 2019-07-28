/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Fragment } from "react";
import { StyleSheet, Platform, View, SafeAreaView } from "react-native";
import AppNavigator from "./app/router/index";

const content = Platform.select({
  ios: (
    <View style={{ flex: 1, backgroundColor: "#F5FCFF" }}>
      <AppNavigator />
    </View>
  ),
  android: (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5FCFF" }}>
      <AppNavigator />
    </SafeAreaView>
  )
});

const App = () => {
  return <Fragment>{content}</Fragment>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});

export default App;
