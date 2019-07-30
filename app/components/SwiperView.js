/**
 * @Author: brady
 * @Date: 2019/7/30
 * @Last Created time: 17:31:02
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import PropTypes from "prop-types";

// Dimensions 用于获取设备宽、高、分辨率
const Dimensions = require("Dimensions");
const { width, height, scale } = Dimensions.get("window");

type Props = {};
export default class SwiperView extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    scrollData: PropTypes.array
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      currentPage: 0
    };
  }

  setIndicator = e => {
    let index = Math.ceil(e.nativeEvent.contentOffset.x / width);
    this.setState({
      currentPage: index
    });
  };

  // 渲染
  render() {
    const { scrollData } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEnabled={true}
          onMomentumScrollEnd={e => this.setIndicator(e)}
          style={styles.scrollView}
        >
          <View style={[styles.scrollViewStyle, styles.first]}>
            <Text>1</Text>
          </View>
          <View style={[styles.scrollViewStyle, styles.second]}>
            <Text>2</Text>
          </View>
        </ScrollView>
        <View style={styles.indicatorStyle}>
          {
            scrollData.map((item, index) => {
              let active = index === this.state.currentPage ? { color: "#108ee9" } : null
              return (
                <Text key={item.id} style={[styles.indicatorItem, active]}>&bull;</Text>
              )
            })
          }
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
    backgroundColor: "#F5FCFF"
  },
  scrollView: {

  },
  scrollViewStyle: {
    width: width,
    height: 200
  },
  first: {
    backgroundColor: "#f00"
  },
  second: {
    backgroundColor: "#ff0"
  },
  indicatorStyle: {
    flexDirection: "row",
    justifyContent: "center"
  },
  indicatorItem: {
    fontSize: 30
  },
  indicatorActive: {
    color: "#f00"
  }
});
