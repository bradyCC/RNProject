/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 17:00:25
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import SearchBox from "../components/SearchBox";

type Props = {};
export default class Home extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      content: `I come from Home`
    };
  }

  goToHomeDetail = () => {
    this.props.navigation.navigate("HomeDetail", {
      content: this.state.content
    });
  };

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <SearchBox />
        <TouchableOpacity onPress={() => this.goToHomeDetail()}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
