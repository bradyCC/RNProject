/**
 * @Author: brady
 * @Date: 2019/7/31
 * @Last Created time: 10:29:17
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

// Dimensions 用于获取设备宽、高、分辨率
const Dimensions = require("Dimensions");
const { width, height, scale } = Dimensions.get("window");

type Props = {};
export default class HomeBottomView extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    bottomViewData: PropTypes.array
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const { bottomViewData } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.middleView}>
          {bottomViewData.map((item, index) => {
            if (item instanceof Array) {
              return (
                <View style={styles.middleViewBottom} key={index}>
                  {item.map((subItem, subIndex) => {
                    return (
                      <View style={styles.viewStyle} key={subIndex}>
                        {subItem.map(subView => {
                          return (
                            <TouchableOpacity
                              style={[
                                styles.subViewStyle,
                                subView.backgroundColor
                              ]}
                              key={subView.id}
                            >
                              <View>
                                <Text style={styles.textColor}>{subView.text}</Text>
                              </View>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    );
                  })}
                </View>
              );
            } else {
              return (
                <TouchableOpacity
                  style={[styles.middleViewTop, item.backgroundColor]}
                  key={index}
                >
                  <View>
                    <Text style={styles.textColor}>{item.text}</Text>
                  </View>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </View>
    );
  }

  componentDidMount() {
    console.log(this.props);
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
    height: 75
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
