/**
 * @Author: brady
 * @Date: 2019/7/30
 * @Last Created time: 09:22:06
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
import PropTypes from "prop-types";

type Props = {};
export default class MineMiddleView extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    data: PropTypes.array
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        {data.map(item => {
          return (
            <TouchableOpacity
              onPress={() => Alert.alert(item.text)}
              key={item.id}
            >
              <View style={styles.middleView}>
                <View style={styles.imageIcon}>
                  <ImageBackground
                    source={require("../../assets/icons/icon-3.png")}
                    style={[styles.imageBackground, item.iconStyle]}
                  />
                </View>
                <Text style={styles.itemText}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  componentDidMount() {
    // console.log(this.props);
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 8,
    paddingLeft: 30,
    paddingRight: 30
  },
  middleView: {
    alignItems: "center"
  },
  imageIcon: {
    width: 65 * 0.5,
    height: 65 * 0.5,
    position: "relative",
    overflow: "hidden"
  },
  imageBackground: {
    width: 750 * 0.5,
    height: 150 * 0.5,
    position: "absolute"
  },
  itemText: {
    marginTop: 2,
    fontSize: 12
  }
});
