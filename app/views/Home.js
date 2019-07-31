/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 17:00:25
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

import SearchBox from "../components/SearchBox";
import SwiperView from "../components/SwiperView";
import HomeMiddleView from "../components/HomeMiddleView";
import HomeBottomView from "../components/HomeBottomView";

type Props = {};
export default class Home extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      content: `I come from Home`,
      scrollData: [{ id: "1", text: "1" }, { id: "2", text: "2" }],
      middleViewData: [
        { id: "1", text: "1", backgroundColor: { backgroundColor: "#ff0" } },
        [
          { id: "2", text: "2", backgroundColor: { backgroundColor: "#0ff" } },
          { id: "3", text: "3", backgroundColor: { backgroundColor: "#0f0" } }
        ]
      ],
      bottomViewData: [
        { id: "1", text: "1", backgroundColor: "#fff" },
        [
          [
            {
              id: "2",
              text: "2",
              backgroundColor: { backgroundColor: "#0ff" }
            },
            { id: "3", text: "3", backgroundColor: { backgroundColor: "#0f0" } }
          ],
          [
            {
              id: "4",
              text: "4",
              backgroundColor: { backgroundColor: "#000" }
            },
            { id: "5", text: "5", backgroundColor: { backgroundColor: "#ff0" } }
          ]
        ]
      ]
    };
  }

  goToHomeDetail = () => {
    this.props.navigation.navigate("HomeDetail", {
      content: this.state.content
    });
  };

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <SearchBox />
        <ScrollView>
          <SwiperView scrollData={this.state.scrollData} />
          <HomeMiddleView middleViewData={this.state.middleViewData} />
          <HomeBottomView bottomViewData={this.state.bottomViewData} />
          <TouchableOpacity onPress={() => this.goToHomeDetail()}>
            <View style={styles.homeView}>
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  homeView: {
    alignItems: "center"
  }
});
