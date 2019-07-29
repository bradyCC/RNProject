/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 17:00:25
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import SearchBox from "../components/SearchBox";
import MineCeil from "../components/MineCeil";

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
        {/*<TouchableOpacity onPress={() => this.goToHomeDetail()}>*/}
        {/*  <Text>Home</Text>*/}
        {/*</TouchableOpacity>*/}

        {/*原始比例*/}
        {/*<MineCeil title="测试" iconStyle={{ top: -31, left: -96 }} />*/}
        {/*<MineCeil title="测试" iconStyle={{ top: -36, left: -150 }} />*/}
        {/*<MineCeil title="测试" iconStyle={{ top: -36, left: -203 }} />*/}
        {/*<MineCeil title="测试" iconStyle={{ top: -36, left: -256 }} />*/}
        {/*<MineCeil title="测试" iconStyle={{ top: -85, left: -71 }} />*/}
        {/*<MineCeil title="测试" iconStyle={{ top: -87, left: -124 }} />*/}
        {/*<MineCeil title="测试" iconStyle={{ top: -85, left: -176 }} />*/}
        {/*<MineCeil title="测试" iconStyle={{ top: -85, left: -229 }} />*/}
        {/*<MineCeil title="测试" iconStyle={{ top: -85, left: -281 }} />*/}

        {/*等比缩放*/}
        <MineCeil title="测试" iconStyle={{ top: -20, left: -67 }} />
        <MineCeil title="测试" iconStyle={{ top: -24, left: -104 }} />
        <MineCeil title="测试" iconStyle={{ top: -24, left: -142 }} />
        <MineCeil title="测试" iconStyle={{ top: -24, left: -178 }} />
        <MineCeil title="测试" iconStyle={{ top: -58, left: -49 }} />
        <MineCeil title="测试" iconStyle={{ top: -60, left: -87 }} />
        <MineCeil title="测试" iconStyle={{ top: -60, left: -124 }} />
        <MineCeil title="测试" iconStyle={{ top: -60, left: -160 }} />
        <MineCeil title="测试" iconStyle={{ top: -60, left: -198 }} />
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
