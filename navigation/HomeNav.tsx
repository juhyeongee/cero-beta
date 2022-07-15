import * as React from "react";

import Home from "../screens/Home";
import FinishedTasks from "../screens/FinishedTasks";
import Setting from "../screens/Setting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeBottomTab = createBottomTabNavigator();

export function HomeNav() {
  return (
    <HomeBottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeNav"
    >
      <HomeBottomTab.Screen name="HomeNav" component={Home} />
      <HomeBottomTab.Screen name="FinishedTasks" component={FinishedTasks} />
      <HomeBottomTab.Screen name="Setting" component={Setting} />
    </HomeBottomTab.Navigator>
  );
}
