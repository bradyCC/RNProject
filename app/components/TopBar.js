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
import PropTypes from "prop-types";

type Props = {};
export default class TopBar extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const { title, icon, props, to } = this.props;
    return (
      <View style={[styles.container, styles.flexRow]}>
        <View />
        <View styles={styles.title}>
          <Text style={styles.white}>{title}</Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate(to)}>
          <View styles={styles.iconStyle}>
            <Icon
              // name={focused ? "ios-home" : "ios-home"}
              name={icon}
              size={26}
              style={styles.white}
            />
          </View>
        </TouchableOpacity>
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#108ee9",
    padding: 8,
    paddingTop: 11,
    paddingBottom: 10,
    position: "relative"
  },
  title: {
    flex: 1
  },
  iconStyle: {
    marginLeft: 8
  }
});
