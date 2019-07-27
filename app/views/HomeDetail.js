/**
 * @Author: brady
 * @Date: 2019-07-27
 * @Last Created time: 08:20:09
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {};
export default class HomeDetail extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>HomeDetail</Text>
        <Text>{params.content}</Text>
      </View>
    );
  }

  componentDidMount() {
    console.log(this.props.navigation);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
