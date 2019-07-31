/**
 * @Author: brady
 * @Date: 2019/7/31
 * @Last Created time: 09:28:01
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

type Props = {};
export default class HomeMiddleView extends Component<Props> {
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
      <View style={styles.container}>
        <View style={styles.middleView}>
          <TouchableOpacity style={[styles.viewStyle, styles.viewLeft]}>
            <View>
              <Text style={styles.textColor}>1</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.viewStyle, styles.viewRight]}>
            <TouchableOpacity
              style={[styles.subViewStyle, styles.subTopViewStyle]}
            >
              <View>
                <Text style={styles.textColor}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.subViewStyle, styles.subBottomViewStyle]}
            >
              <View>
                <Text style={styles.textColor}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    backgroundColor: "#eee"
  },
  middleView: {
    flexDirection: "row",
    marginTop: 10
  },
  viewStyle: {
    flex: 1,
    height: 150
  },
  viewLeft: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0"
  },
  viewRight: {
    backgroundColor: "#0ff"
  },
  subViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  subTopViewStyle: {
    backgroundColor: "#0ff"
  },
  subBottomViewStyle: {
    backgroundColor: "#0f0"
  },
  textColor: {
    color: "#f00"
  }
});
