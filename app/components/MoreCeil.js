/**
 * @Author: brady
 * @Date: 2019/7/29
 * @Last Created time: 13:57:52
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

type Props = {};
export default class MoreCeil extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.bool,
    text: PropTypes.string
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isSwitch: false
    };
  }

  // 渲染
  render() {
    const { title, icon, text } = this.props;
    let content = "";
    if (icon) {
      content = (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.direction}>
            <Text style={{ marginRight: 10 }}>{text}</Text>
            <Icon
              // name={focused ? "ios-home" : "ios-home"}
              name="ios-arrow-forward"
              size={20}
              style={{}}
            />
          </View>
        </TouchableOpacity>
      );
    } else {
      content = (
        <Switch
          // trackColor={{ false: "#f00", true: "#0f0" }}
          onValueChange={() =>
            this.setState({ isSwitch: !this.state.isSwitch })
          }
          value={this.state.isSwitch}
          style={styles.switch}
        />
      );
    }
    return (
      <TouchableOpacity onPress={() => {}}>
        <View style={[styles.container, styles.direction]}>
          <View>
            <Text>{title}</Text>
          </View>
          {content}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  direction: {
    flexDirection: "row"
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 8
  },
  switch: {
    padding: Platform.OS === "ios" ? "auto" : 0,
    position: Platform.OS === "ios" ? "relative" : "absolute",
    right: Platform.OS === "ios" ? "auto" : 0,
    height: Platform.OS === "ios" ? "auto" : 10
  }
});
