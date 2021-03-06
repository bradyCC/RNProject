/**
 * @Author: brady
 * @Date: 2019/7/29
 * @Last Created time: 16:17:06
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

type Props = {};
export default class MineCeil extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    iconStyle: PropTypes.object
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const { title, text, iconStyle } = this.props;
    return (
      <TouchableOpacity onPress={() => Alert.alert(text)}>
        <View style={[styles.container, styles.direction]}>
          <View style={styles.direction}>
            <View style={styles.imageIcon}>
              {/*<ImageBackground*/}
              {/*  source={require("../../assets/icons/icon-1.png")}*/}
              {/*  style={[styles.imageBackground, iconStyle]}*/}
              {/*/>*/}
              <ImageBackground
                source={require("../../assets/icons/icon-2.png")}
                style={[styles.imageBackground, iconStyle]}
              />
            </View>
            <Text>{title}</Text>
          </View>
          <TouchableOpacity onPress={() => Alert.alert(text)}>
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
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  direction: {
    flexDirection: "row",
    alignItems: "center"
  },
  container: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 8
  },
  imageIcon: {
    // width: 36,
    // height: 36,
    // width: 36 * 0.7,
    // height: 36 * 0.7,
    width: 96 * 0.3,
    height: 96 * 0.3,
    position: "relative",
    overflow: "hidden",
    marginRight: 8
  },
  imageBackground: {
    // width: 382,
    // height: 150,
    // width: 382 * 0.7,
    // height: 150 * 0.7,
    width: 500 * 0.3,
    height: 300 * 0.3,
    position: "absolute",
    top: -13,
    left: -5.5
  }
});
