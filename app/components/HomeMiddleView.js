/**
 * @Author: brady
 * @Date: 2019/7/31
 * @Last Created time: 09:28:01
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

type Props = {};
export default class HomeMiddleView extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    middleViewData: PropTypes.array
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const { middleViewData } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.middleView}>
          {middleViewData.map((item, index) => {
            if (item instanceof Array) {
              return (
                <View style={styles.viewStyle} key={index}>
                  {item.map(subItem => {
                    return (
                      <TouchableOpacity
                        style={[styles.subViewStyle, subItem.backgroundColor]}
                        key={subItem.id}
                      >
                        <View>
                          <Text style={styles.textColor}>{subItem.text}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            } else {
              return (
                <TouchableOpacity
                  style={[
                    styles.viewStyle,
                    styles.viewLeft,
                    item.backgroundColor
                  ]}
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
    // console.log(this.props);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#fff"
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
    alignItems: "center"
  },
  subViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textColor: {
    color: "#f00"
  }
});
