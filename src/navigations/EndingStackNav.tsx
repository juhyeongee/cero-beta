import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingPage from "@/screens/LoadingPage";
import MindTest from "@/screens/MindTest";
import { EndingStackParamList } from "@/types";

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
      <EndingStack.Screen name="LoadingPage" component={LoadingPage} />
      <EndingStack.Screen name="MindTest" component={MindTest} />
    </EndingStack.Navigator>
  );
};
