/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 17:00:48
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import MineCeil from "../components/MineCeil";
import MineMiddleView from "../components/MineMiddleView";

type Props = {};
export default class Mine extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      data: [
        { id: "1", text: "待付款", iconStyle: { top: -22, left: -218 } },
        { id: "2", text: "待使用", iconStyle: { top: -22, left: -263 } },
        { id: "3", text: "待评价", iconStyle: { top: -22, left: -171 } },
        { id: "4", text: "退款/售后", iconStyle: { top: -22, left: -35 } }
      ]
    };
  }

  /**
   * MineCeil精灵图图标定位：
   * icon-1
   * 原始比例：
   * <MineCeil title="测试" iconStyle={{ top: -31, left: -96 }} />
   * <MineCeil title="测试" iconStyle={{ top: -36, left: -150 }} />
   * <MineCeil title="测试" iconStyle={{ top: -36, left: -203 }} />
   * <MineCeil title="测试" iconStyle={{ top: -36, left: -256 }} />
   * <MineCeil title="测试" iconStyle={{ top: -85, left: -71 }} />
   * <MineCeil title="测试" iconStyle={{ top: -87, left: -124 }} />
   * <MineCeil title="测试" iconStyle={{ top: -85, left: -176 }} />
   * <MineCeil title="测试" iconStyle={{ top: -85, left: -229 }} />
   * <MineCeil title="测试" iconStyle={{ top: -85, left: -281 }} />
   *
   * 缩放比例：
   * <MineCeil title="测试" iconStyle={{ top: -20, left: -67 }} />
   * <MineCeil title="测试" iconStyle={{ top: -24, left: -104 }} />
   * <MineCeil title="测试" iconStyle={{ top: -24, left: -142 }} />
   * <MineCeil title="测试" iconStyle={{ top: -24, left: -178 }} />
   * <MineCeil title="测试" iconStyle={{ top: -58, left: -49 }} />
   * <MineCeil title="测试" iconStyle={{ top: -60, left: -87 }} />
   * <MineCeil title="测试" iconStyle={{ top: -60, left: -124 }} />
   * <MineCeil title="测试" iconStyle={{ top: -60, left: -160 }} />
   * <MineCeil title="测试" iconStyle={{ top: -60, left: -198 }} />
   *
   * icon-2
   * 缩放比例：
   * <MineCeil title="测试" iconStyle={{ top: -13, left: -5.5 }} />
   * <MineCeil title="测试" iconStyle={{ top: -13, left: -41.5 }} />
   * <MineCeil title="测试" iconStyle={{ top: -13, left: -78 }} />
   * <MineCeil title="测试" iconStyle={{ top: -13, left: -114.5 }} />
   * <MineCeil title="测试" iconStyle={{ top: -48, left: -5.5 }} />
   * <MineCeil title="测试" iconStyle={{ top: -48, left: -41.5 }} />
   * <MineCeil title="测试" iconStyle={{ top: -48, left: -78 }} />
   * <MineCeil title="测试" iconStyle={{ top: -48, left: -114.5 }} />
   * */

  /**
   * MineMiddleView精灵图图标定位：
   * icon-3
   * 缩放比例：
   * <MineMiddleView text="测试" iconStyle={{ top: -22, left: -35 }} />
   * <MineMiddleView text="测试" iconStyle={{ top: -22, left: -80 }} />
   * <MineMiddleView text="测试" iconStyle={{ top: -22, left: -126 }} />
   * <MineMiddleView text="测试" iconStyle={{ top: -22, left: -171 }} />
   * <MineMiddleView text="测试" iconStyle={{ top: -22, left: -218 }} />
   * <MineMiddleView text="测试" iconStyle={{ top: -22, left: -263 }} />
   * <MineMiddleView text="测试" iconStyle={{ top: -22, left: -306 }} />
   * */

  // 渲染
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <MineCeil
            title="我的订单"
            iconStyle={{ top: -13, left: -5.5 }}
            text="查看全部订单"
          />
          <MineMiddleView data={this.state.data} />
        </View>
        <View style={styles.ceil}>
          <MineCeil
            title="钱包"
            iconStyle={{ top: -48, left: -5.5 }}
            text="账户余额：￥100.00"
          />
          <MineCeil
            title="抵用券"
            iconStyle={{ top: -48, left: -114.5 }}
            text="0"
          />
        </View>
        <View style={styles.ceil}>
          <MineCeil title="商城积分" iconStyle={{ top: -13, left: -78 }} />
        </View>
        <View style={styles.ceil}>
          <MineCeil title="今日推荐" iconStyle={{ top: -48, left: -41.5 }} />
        </View>

        <View style={styles.ceil}>
          <MineCeil
            title="我要合作"
            iconStyle={{ top: -13, left: -41.5 }}
            text="轻松开店，招财进宝"
          />
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
  },
  mineMiddleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 8,
    paddingLeft: 30,
    paddingRight: 30
  }
});
