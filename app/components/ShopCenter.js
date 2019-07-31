/**
 * @Author: brady
 * @Date: 2019/7/31
 * @Last Created time: 13:20:16
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

type Props = {};
export default class ShopCenter extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    shopCenterData: PropTypes.array
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const { shopCenterData, props } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {shopCenterData.map(item => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("ShopCenterDetail", {
                    id: item.id,
                    shopname: item.shopname
                  })
                }
                key={item.id}
              >
                <View style={styles.viewStyle}>
                  <Image
                    source={{ uri: item.shopImage }}
                    style={styles.shopImage}
                  />
                  <Text style={styles.textStyle}>{item.shopname}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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
    backgroundColor: "#fff",
    padding: 8
  },
  viewStyle: {
    alignItems: "center",
    margin: 8
  },
  shopImage: {
    width: 120,
    height: 100,
    borderRadius: 10
  },
  textStyle: {
    marginTop: 8
  }
});
