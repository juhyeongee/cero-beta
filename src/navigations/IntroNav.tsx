import * as React from "react";
import Intro from "../screens/Intro";
import SignIn from "../screens/SignIn";
import CheckPrivacyPolicy from "../screens/SignIn/pages/CheckPrivacyPolicy";
import JoinWithEmail from "../screens/SignIn/pages/JoinWithEmail";
import JoinWithApple from "../screens/SignIn/pages/JoinWithApple";
import JoinWithGoogle from "../screens/SignIn/pages/JoinWithGoogle";
import PolicyDetail from "../screens/SignIn/pages/PolicyDetail";
import LogIn from "../screens/SignIn/pages/LogIn";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroStackParamList } from "@/types";

const IntroStack = createNativeStackNavigator<IntroStackParamList>();

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
      <IntroStack.Screen name="JoinWithEmail" component={JoinWithEmail} />
      <IntroStack.Screen name="JoinWithApple" component={JoinWithApple} />
      <IntroStack.Screen name="JoinWithGoogle" component={JoinWithGoogle} />
      <IntroStack.Screen
        name="CheckPrivacyPolicy"
        component={CheckPrivacyPolicy}
      />
      <IntroStack.Screen name="PolicyDetail" component={PolicyDetail} />
    </IntroStack.Navigator>
  );
}
