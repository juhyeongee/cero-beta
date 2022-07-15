import * as React from "react";
import LogIn from "../screens/LogIn";
import { HomeNav } from "./HomeNav";
import Intro from "../screens/Intro";
import SignIn from "../screens/SignIn";
import MindTest from "../screens/MindTest";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

//TODO: StackNavigator에 파라미터 타입달아준 것 + Last.tsx에서의 타입 상속시켜준 것, 원리 이해 및 분석 후 에러 뜨지 않게 수정
export type RootStackParams = {
  Intro;
  Home;
  LogIn;
  SignIn;
  MindTest;
};
//TODO: 예시에서 왜 타입지정없이, 이렇게만 전달하는 것이 원하는대로 전달한 것인지?

const IntroStack = createNativeStackNavigator();

export function IntroNav() {
  return (
    <IntroStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
      initialRouteName="Intro"
    >
      <IntroStack.Screen name="Intro" component={Intro} />
      <IntroStack.Screen name="SignIn" component={SignIn} />
      <IntroStack.Screen name="LogIn" component={LogIn} />
      <IntroStack.Screen name="Home" component={HomeNav} />
      <IntroStack.Screen name="MindTest" component={MindTest} />
    </IntroStack.Navigator>
  );
}
