/**
 * @Author: brady
 * @Date: 2019/7/30
 * @Last Created time: 17:31:02
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import PropTypes from "prop-types";

import ListView from "./ListView";

// Dimensions 用于获取设备宽、高、分辨率
const { width, height } = Dimensions.get("window");

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
      currentPage: 0,
      dataList: [
        [
          { id: "1", text: "测试1", iconStyle: { top: -13, left: -5.5 } },
          { id: "2", text: "测试2", iconStyle: { top: -13, left: -41.5 } },
          { id: "3", text: "测试3", iconStyle: { top: -13, left: -78 } },
          { id: "4", text: "测试4", iconStyle: { top: -13, left: -114.5 } },
          { id: "5", text: "测试5", iconStyle: { top: -48, left: -5.5 } },
          { id: "6", text: "测试6", iconStyle: { top: -48, left: -41.5 } },
          { id: "7", text: "测试7", iconStyle: { top: -48, left: -78 } },
          { id: "8", text: "测试8", iconStyle: { top: -48, left: -114.5 } }
        ],
        [
          { id: "9", text: "测试9", iconStyle: { top: -13, left: -5.5 } },
          { id: "10", text: "测试10", iconStyle: { top: -13, left: -41.5 } },
          { id: "11", text: "测试11", iconStyle: { top: -13, left: -78 } },
          { id: "12", text: "测试12", iconStyle: { top: -13, left: -114.5 } },
          { id: "13", text: "测试13", iconStyle: { top: -48, left: -5.5 } },
          { id: "14", text: "测试14", iconStyle: { top: -48, left: -41.5 } },
          { id: "15", text: "测试15", iconStyle: { top: -48, left: -78 } },
          { id: "16", text: "测试16", iconStyle: { top: -48, left: -114.5 } }
        ]
      ]
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
          {this.state.dataList.map((item, index) => {
            return (
              <View style={styles.scrollViewStyle} key={index}>
                <ListView dataList={item} />
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorStyle}>
          {scrollData.map((item, index) => {
            let active =
              index === this.state.currentPage ? { color: "#108ee9" } : null;
            return (
              <Text key={item.id} style={[styles.indicatorItem, active]}>
                &bull;
              </Text>
            );
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
    backgroundColor: "#F5FCFF"
  },
  scrollView: {},
  scrollViewStyle: {
    width: width
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
