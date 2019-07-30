/**
 * @Author: brady
 * @Date: 2019-07-30
 * @Last Created time: 19:46:31
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from "react-native";

// Dimensions 用于获取设备宽、高、分辨率
const Dimensions = require("Dimensions");
const { width, height, scale } = Dimensions.get("window");

type Props = {};
export default class ListView extends Component<Props> {
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
    const { dataList } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={dataList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}} key={item.id}>
              <View style={styles.middleView}>
                <View style={styles.imageIcon}>
                  <ImageBackground
                    source={require("../../assets/icons/icon-2.png")}
                    style={[styles.imageBackground, item.iconStyle]}
                  />
                </View>
                <Text style={styles.itemText}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal={false}
          scrollEnabled={false}
          numColumns={4}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"
  },
  middleView: {
    width: width / 4,
    alignItems: "center",
    paddingTop: 12
  },
  imageIcon: {
    width: 96 * 0.3,
    height: 96 * 0.3,
    position: "relative",
    overflow: "hidden"
  },
  imageBackground: {
    width: 500 * 0.3,
    height: 300 * 0.3,
    position: "absolute"
  },
  itemText: {
    marginTop: 10,
    fontSize: 12
  }
});
