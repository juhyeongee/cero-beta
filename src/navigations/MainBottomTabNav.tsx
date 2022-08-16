import * as React from "react";
import { View, Image, Platform } from "react-native";
import FinishedTasks from "../screens/FinishedTasks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Theme from "@/constants/Theme";
import { HomeStackNav } from "./HomeStackNav";
import { MainBottomTabParamList } from "@/types";
import { SettingStackNav } from "./SettingStackNav";
import Devtool from "@/screens/Devtool";

const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export function MainBottomTabNav() {
  return (
    <MainBottomTab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: Theme.color.n700,
        tabBarActiveTintColor: Theme.color.primary,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? "10%" : "8%",
          bottom: "0%",
          backgroundColor: Theme.color.n0,
        },
      }}
      initialRouteName="HomeStackNav"
    >
      <MainBottomTab.Screen
        name="FinishedTasks"
        component={FinishedTasks}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{
                tintColor: color,
              }}
              source={require("@/assets/images/file.png")}
            />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{
                tintColor: color,
              }}
              source={require("@/assets/images/home.png")}
            />
          ),
        }} //TODO: PNG file -> svg파일로 수정 필요 (color 변수 svg에 넘기는 방법 찾기)
      />

      <MainBottomTab.Screen
        name="Setting"
        component={SettingStackNav}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{
                tintColor: color,
              }}
              source={require("@/assets/images/setting.png")}
            />
          ),
        }}
      />
      <MainBottomTab.Screen
        name="Devtool"
        component={Devtool}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={{
                tintColor: color,
              }}
              source={require("@/assets/images/information.png")}
            />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
}
