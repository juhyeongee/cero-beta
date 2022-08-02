import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TakeUserInfo from "../screens/TakeUserInfo";
import OnBoarding from "../screens/OnBoarding";
import ResultPage from "@/screens/MindTest/pages/ResultPage";
import MindTest from "@/screens/MindTest";
import { OnBoardingStackParamList } from "@/types";

const OnBoardingStack = createNativeStackNavigator<OnBoardingStackParamList>();

export const OnBoardingNav = () => {
  return (
    <OnBoardingStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
      initialRouteName="TakeUserInfo"
    >
      <OnBoardingStack.Screen name="TakeUserInfo" component={TakeUserInfo} />
      <OnBoardingStack.Screen name="MindTest" component={MindTest} />
      <OnBoardingStack.Screen name="ResultPage" component={ResultPage} />
      <OnBoardingStack.Screen name="OnBoarding" component={OnBoarding} />
    </OnBoardingStack.Navigator>
  );
};
