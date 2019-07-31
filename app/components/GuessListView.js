/**
 * @Author: brady
 * @Date: 2019/7/31
 * @Last Created time: 15:25:36
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import PropTypes from "prop-types";

type Props = {};
export default class GuessListView extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    guessListData: PropTypes.array
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const { guessListData, props } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={guessListData}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.itemView}
              onPress={() => Alert.alert(item.id)}
            >
              <View style={styles.itemViewLeft}>
                <Image
                  source={{ uri: item.itemImage }}
                  style={styles.itemImage}
                />
              </View>
              <View style={styles.itemViewRight}>
                <View style={styles.itemViewRightTop}>
                  <Text style={styles.itemNameStyle}>{item.itemName}</Text>
                  <Text style={styles.distanceStyle}>{item.distance}m</Text>
                </View>
                <Text style={styles.descStyle}>{item.desc}</Text>
                <View style={styles.itemViewRightBottom}>
                  <Text style={styles.priceStyle}>售价：￥{item.price}</Text>
                  <Text style={styles.salesStyle}>已售{item.sales}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
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
    backgroundColor: "#F5FCFF"
  },
  itemView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 8
  },
  itemViewLeft: {},
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  itemViewRight: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 8
  },
  itemViewRightTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemViewRightBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemNameStyle: {
    fontSize: 18
  },
  distanceStyle: {
    color: "#666"
  },
  descStyle: {
    flex: 1,
    color: "#666"
  },
  priceStyle: {
    fontSize: 16,
    color: "#ff6400"
  },
  salesStyle: {
    color: "#108ee9"
  }
});
