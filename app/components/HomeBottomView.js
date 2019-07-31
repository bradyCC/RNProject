/**
 * @Author: brady
 * @Date: 2019/7/31
 * @Last Created time: 10:29:17
 * @Description:
 */
import React, { Component } from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

type Props = {};
export default class HomeBottomView extends Component<Props> {
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
          <TouchableOpacity style={styles.middleViewTop}>
            <View>
              <Text style={styles.textColor}>Top</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.middleViewBottom}>
            <View style={styles.viewStyle}>
              <TouchableOpacity
                style={[styles.subViewStyle, styles.subTopViewStyle]}
              >
                <View>
                  <Text style={styles.textColor}>1</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.subViewStyle, styles.subBottomViewStyle]}
              >
                <View>
                  <Text style={styles.textColor}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.viewStyle}>
              <TouchableOpacity
                style={[styles.subViewStyle, styles.subTopViewStyle2]}
              >
                <View>
                  <Text style={styles.textColor}>3</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.subViewStyle, styles.subBottomViewStyle2]}
              >
                <View>
                  <Text style={styles.textColor}>4</Text>
                </View>
              </TouchableOpacity>
            </View>
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
    marginTop: 10
  },
  middleViewTop: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    backgroundColor: "#fff"
  },
  middleViewBottom: {
    flexDirection: "row"
  },
  viewStyle: {
    flex: 1,
    height: 150
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
  subTopViewStyle2: {
    backgroundColor: "#000"
  },
  subBottomViewStyle2: {
    backgroundColor: "#ff0"
  },
  textColor: {
    color: "#f00"
  }
});
