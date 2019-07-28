/**
 * @Author: brady
 * @Date: 2019-07-27
 * @Last Created time: 08:31:23
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Dimensions 用于获取设备宽、高、分辨率
const Dimensions = require("Dimensions");
const { width, height, scale } = Dimensions.get("window");

type Props = {};
export default class SearchBox extends Component<Props> {
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
      <View style={[styles.container, styles.flexRow]}>
        <TouchableOpacity onPress={() => Alert.alert("选择地区")}>
          <Text style={styles.white}>济南</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="请输入商家、品类、商圈"
          style={styles.searchInput}
        />
        <View style={styles.flexRow}>
          <TouchableOpacity onPress={() => Alert.alert("选择提醒")}>
            <Icon
              // name={focused ? "ios-home" : "ios-home"}
              name="ios-notifications"
              size={26}
              style={styles.white}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("扫描二维码")}>
            <Icon
              // name={focused ? "ios-home" : "ios-home"}
              name="ios-qr-scanner"
              size={26}
              style={[styles.white, styles.iconStyle]}
            />
            <Icon
              // name={focused ? "ios-home" : "ios-home"}
              name="ios-remove"
              size={26}
              style={[styles.white, styles.removeStyle]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row"
  },
  white: {
    color: "#fff"
  },
  fontSize: {
    fontSize: Platform.OS === "ios" ? 14 : 16
  },
  container: {
    // flex: 1,
    alignItems: "center",
    backgroundColor: "#108ee9",
    padding: 8
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: Platform.OS === "ios" ? 6 : 2,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 16,
    marginLeft: 8,
    marginRight: 8
  },

  removeStyle: {
    position: "absolute",
    right: 3.7
  },
  iconStyle: {
    marginLeft: 8
  }
});
