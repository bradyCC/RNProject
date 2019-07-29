/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 17:00:48
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MineCeil from "../components/MineCeil";

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
    this.state = {};
  }

  /**
   * 精灵图图标定位：
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
   *
   * <MineCeil title="测试" iconStyle={{ top: -20, left: -67 }} />
   * <MineCeil title="测试" iconStyle={{ top: -24, left: -104 }} />
   * <MineCeil title="测试" iconStyle={{ top: -24, left: -142 }} />
   * <MineCeil title="测试" iconStyle={{ top: -24, left: -178 }} />
   * <MineCeil title="测试" iconStyle={{ top: -58, left: -49 }} />
   * <MineCeil title="测试" iconStyle={{ top: -60, left: -87 }} />
   * <MineCeil title="测试" iconStyle={{ top: -60, left: -124 }} />
   * <MineCeil title="测试" iconStyle={{ top: -60, left: -160 }} />
   * <MineCeil title="测试" iconStyle={{ top: -60, left: -198 }} />
   * */

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <View>
          <MineCeil
            title="我的订单"
            iconStyle={{ top: -60, left: -160 }}
            text="查看全部订单"
          />
        </View>
        <View style={styles.ceil}>
          <MineCeil
            title="钱包"
            iconStyle={{ top: -20, left: -67 }}
            text="账户余额：￥100.00"
          />
          <MineCeil
            title="抵用券"
            iconStyle={{ top: -24, left: -178 }}
            text="0"
          />
        </View>
        <View style={styles.ceil}>
          <MineCeil title="商城积分" iconStyle={{ top: -24, left: -104 }} />
        </View>
        <View style={styles.ceil}>
          <MineCeil title="今日推荐" iconStyle={{ top: -60, left: -87 }} />
        </View>

        <View style={styles.ceil}>
          <MineCeil
            title="我要合作"
            iconStyle={{ top: -58, left: -49 }}
            text="轻松开店，招财进宝"
          />
        </View>
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
  },
  ceil: {
    marginTop: 10
  }
});
