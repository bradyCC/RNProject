/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 17:00:39
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Platform, ScrollView } from "react-native";

import TopBar from "../components/TopBar";
import MoreCeil from "../components/MoreCeil";

type Props = {};
export default class More extends Component<Props> {
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
    return (
      <ScrollView style={styles.container}>
        {Platform.OS === "ios" ? null : (
          <TopBar title="更多" icon="ios-cog" props={this.props} to="Home" />
        )}
        <MoreCeil title="扫一扫" icon={true} marginTop={10} />

        <View style={styles.ceil}>
          <MoreCeil title="省流量模式" icon={false} />
          <MoreCeil title="消息提醒" icon={true} />
          <MoreCeil title="邀请好友使用团码" icon={true} />
          <MoreCeil title="清空缓存" icon={true} text="13.4M" />
        </View>

        <View style={styles.ceil}>
          <MoreCeil title="问卷调查" icon={true} />
          <MoreCeil title="支付帮助" icon={true} />
          <MoreCeil title="网络诊断" icon={true} />
          <MoreCeil title="关于团码" icon={true} />
          <MoreCeil title="我要应聘" icon={true} />
        </View>

        <View style={styles.ceil}>
          <MoreCeil title="精品应用" icon={true} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  ceil: {
    marginTop: 10
  }
});
