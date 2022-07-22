import * as React from "react";
import { View, Image } from "react-native";
import Home from "../screens/Home";
import FinishedTasks from "../screens/FinishedTasks";
import Setting from "../screens/Setting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Theme from "@/constants/Theme";
import { HomeStackNav } from "./HomeStackNav";

const MainBottomTab = createBottomTabNavigator();

export function MainBottomTabNav() {
  return (
    <MainBottomTab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: Theme.color.n700,
        tabBarActiveTintColor: Theme.color.primary,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: "10%",
          bottom: "0%",
          backgroundColor: Theme.color.n0,
        },
      }}
      initialRouteName="HomeNav"
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
        name="HomeNav"
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
        component={Setting}
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
    </MainBottomTab.Navigator>
  );
}
