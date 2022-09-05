import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LastLoadingScreen } from "@/screens/LoadingPage";
import MindTest from "@/screens/MindTest";
import { EndingStackParamList } from "@/types";
import EndingResult from "@/screens/EndingResult";
import EndingMovie from "@/screens/EndingMovie";

const EndingStack = createNativeStackNavigator<EndingStackParamList>();

export const EndingStackNav = () => {
  return (
    <EndingStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
      initialRouteName="MindTest"
    >
      <EndingStack.Screen
        name="LastLoadingScreen"
        component={LastLoadingScreen}
      />
      <EndingStack.Screen name="MindTest" component={MindTest} />
      <EndingStack.Screen name="EndingResult" component={EndingResult} />
      <EndingStack.Screen name="EndingMovie" component={EndingMovie} />
    </EndingStack.Navigator>
  );
};
