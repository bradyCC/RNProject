/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 17:40:06
 * @Description:
 */
import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Main from "../views/Main";
import Home from "../views/Home";
import Shop from "../views/Shop";
import Mine from "../views/Mine";
import More from "../views/More";

// import More from "../views/More";
// import HomePage from "../views/HomePage";
// import ShopDetail from "../views/ShopDetail";
// import MineDetail from "../views/MineDetail";
// import MoreInfo from "../views/MoreInfo";

// 设置路由
const HomeRouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      // header: null,
      title: "首页"
    }
  },
  // HomePage: {
  //   screen: HomePage,
  //   navigationOptions: {
  //     title: "首页信息"
  //   }
  // }
};
const ShopRouteConfigs = {
  Shop: {
    screen: Shop,
    navigationOptions: {
      title: "商家"
    }
  },
  // ShopDetail: {
  //   screen: ShopDetail,
  //   navigationOptions: ({ navigation }) => ({
  //     title: `${navigation.state.params.title}`
  //   })
  // }
};
const MineRouteConfigs = {
  Mine: {
    screen: Mine,
    navigationOptions: {
      title: "我的"
    }
  },
  // MineDetail: {
  //   screen: MineDetail,
  //   navigationOptions: ({ navigation }) => ({
  //     title: `${navigation.state.params.title}`
  //   })
  // }
};
const MoreRouteConfigs = {
  More: {
    screen: More,
    navigationOptions: {
      title: "更多"
    }
  },
  // MoreInfo: {
  //   screen: MoreInfo,
  //   navigationOptions: {
  //     title: "我的资料"
  //   }
  // }
};
// 全局配置
const StackNavigatorConfig = {
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    headerStyle: {
      gesturesEnabled: false,
      backgroundColor: "rgb(16, 142, 233)"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff",
    headerBackTitle: null
  },
  cardStyle: { backgroundColor: "#ccc" }
};
const HomeTab = createStackNavigator(HomeRouteConfigs, StackNavigatorConfig);
const ShopTab = createStackNavigator(ShopRouteConfigs, StackNavigatorConfig);
const MineTab = createStackNavigator(MineRouteConfigs, StackNavigatorConfig);
const MoreTab = createStackNavigator(MoreRouteConfigs, StackNavigatorConfig);

// 隐藏子路由 tabBar
let setTabBar = StackNavigatorArr => {
  StackNavigatorArr.map(item => {
    item.navigationOptions = ({ navigation }) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
      return {
        tabBarVisible
      };
    };
  });
};
setTabBar([HomeTab, ShopTab, MineTab, MoreTab]);

// 设置tabBar
const TabRouteConfigs = {
  Home: {
    screen: HomeTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "首页",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-home" : "ios-home"}
          name="ios-home"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  },
  Shop: {
    screen: ShopTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "商家",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-paper" : "ios-paper"}
          name="ios-paper"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  },
  Mine: {
    screen: MineTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "我的",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-paper" : "ios-paper"}
          name="ios-contact"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  },
  More: {
    screen: MoreTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "更多",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-contact" : "ios-contact"}
          name="ios-more"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  }
};
const TabNavigatorConfig = {
  initialRouteName: "Home",
  tabBarOptions: {
    showIcon: true
  }
};
const TabNavigator = createBottomTabNavigator(
  TabRouteConfigs,
  TabNavigatorConfig
);

export default createAppContainer(TabNavigator);