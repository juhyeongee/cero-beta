import Intro from "../screens/Intro";
import SignIn from "../screens/SignIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroStackParamList } from "@/types";
import EmailJoin from "@/screens/SignIn/Pages/JoinWithEmail";
import CheckPrivacyPolicy from "@/screens/SignIn/Pages/CheckPrivacyPolicy";
import JoinWithApple from "@/screens/SignIn/Pages/JoinWithApple";
import JoinWithGoogle from "@/screens/SignIn/Pages/JoinWithGoogle";
import LogIn from "@/screens/SignIn/Pages/LogIn";
import PolicyDetail from "@/screens/SignIn/Pages/PolicyDetail";

export function IntroNav() {
  const IntroStack = createNativeStackNavigator<IntroStackParamList>();
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
      <IntroStack.Screen name="JoinWithEmail" component={EmailJoin} />
      <IntroStack.Screen
        name="CheckPrivacyPolicy"
        component={CheckPrivacyPolicy}
      />
      <IntroStack.Screen name="JoinWithApple" component={JoinWithApple} />
      <IntroStack.Screen name="JoinWithGoogle" component={JoinWithGoogle} />
      <IntroStack.Screen name="LogIn" component={LogIn} />
      <IntroStack.Screen name="PolicyDetail" component={PolicyDetail} />
    </IntroStack.Navigator>
  );
}
