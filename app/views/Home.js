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
import MineCeil from "../components/MineCeil";
import ShopCenter from "../components/ShopCenter";
import GuessListView from "../components/GuessListView";

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
        { id: "1", text: "1", backgroundColor: { backgroundColor: "#fff" } },
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
      ],
      shopCenterData: [
        {
          id: "1",
          shopname: "银座商城",
          shopImage:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564563470142&di=616ba9cd5917c11cf6426422c8ae0410&imgtype=0&src=http%3A%2F%2Fimages.zmdfcw.cn%2Fuserfiles%2Fimage%2F20181009%2F09154112faad20d7331648.jpg"
        },
        {
          id: "2",
          shopname: "恒隆广场",
          shopImage:
            "http://news.winshang.com/member/FCK/2019/3/8/201938153221161598x.jpg"
        },
        {
          id: "3",
          shopname: "万达广场",
          shopImage: "http://www.sydcch.com/upimg/allimg/140123/013254G04-1.jpg"
        },
        {
          id: "4",
          shopname: "宜家家居",
          shopImage:
            "https://a3.att.hudong.com/71/89/20300001024098139605893448223.jpg"
        }
      ],
      guessListData: [
        {
          id: "1",
          itemImage:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564569038286&di=395ff2f7dcc24a969ec9a11a195b161b&imgtype=0&src=http%3A%2F%2Fpic21.nipic.com%2F20120513%2F8471963_115143376000_2.jpg",
          itemName: "干锅牛三宝",
          desc: "100元代金券1张，可叠加 100元代金券1张，可叠加 100元代金券1张，可叠加 重要的事情说三遍",
          price: "20.5",
          sales: "4308",
          distance: ">100"
        },
        {
          id: "2",
          itemImage:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564569038286&di=395ff2f7dcc24a969ec9a11a195b161b&imgtype=0&src=http%3A%2F%2Fpic21.nipic.com%2F20120513%2F8471963_115143376000_2.jpg",
          itemName: "干锅牛三宝",
          desc: "100元代金券1张，可叠加",
          price: "20.5",
          sales: "4308",
          distance: ">100"
        },
        {
          id: "3",
          itemImage:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564569038286&di=395ff2f7dcc24a969ec9a11a195b161b&imgtype=0&src=http%3A%2F%2Fpic21.nipic.com%2F20120513%2F8471963_115143376000_2.jpg",
          itemName: "干锅牛三宝",
          desc: "100元代金券1张，可叠加",
          price: "20.5",
          sales: "4308",
          distance: ">100"
        },
        {
          id: "4",
          itemImage:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564569038286&di=395ff2f7dcc24a969ec9a11a195b161b&imgtype=0&src=http%3A%2F%2Fpic21.nipic.com%2F20120513%2F8471963_115143376000_2.jpg",
          itemName: "干锅牛三宝",
          desc: "100元代金券1张，可叠加",
          price: "20.5",
          sales: "4308",
          distance: ">100"
        },
        {
          id: "5",
          itemImage:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564569038286&di=395ff2f7dcc24a969ec9a11a195b161b&imgtype=0&src=http%3A%2F%2Fpic21.nipic.com%2F20120513%2F8471963_115143376000_2.jpg",
          itemName: "干锅牛三宝",
          desc: "100元代金券1张，可叠加",
          price: "20.5",
          sales: "4308",
          distance: ">100"
        },
        {
          id: "6",
          itemImage:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564569038286&di=395ff2f7dcc24a969ec9a11a195b161b&imgtype=0&src=http%3A%2F%2Fpic21.nipic.com%2F20120513%2F8471963_115143376000_2.jpg",
          itemName: "干锅牛三宝",
          desc: "100元代金券1张，可叠加",
          price: "20.5",
          sales: "4308",
          distance: ">100"
        }
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

          <View style={styles.ceil}>
            <MineCeil
              title="购物中心"
              text="全部4家"
              iconStyle={{ top: -13, left: -5.5 }}
            />
            <ShopCenter
              shopCenterData={this.state.shopCenterData}
              props={this.props}
            />
          </View>

          <View style={styles.ceil}>
            <MineCeil
              title="热门频道"
              text="查看全部"
              iconStyle={{ top: -13, left: -41.5 }}
            />
          </View>

          <View style={styles.ceil}>
            <MineCeil title="猜你喜欢" iconStyle={{ top: -13, left: -78 }} />
            <GuessListView
              guessListData={this.state.guessListData}
              props={this.props}
            />
          </View>

          {/*<TouchableOpacity onPress={() => this.goToHomeDetail()}>*/}
          {/*  <View style={[styles.homeView, styles.ceil]}>*/}
          {/*    <Text>Home</Text>*/}
          {/*  </View>*/}
          {/*</TouchableOpacity>*/}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  homeView: {
    alignItems: "center"
  },
  ceil: {
    marginTop: 10
  }
});
