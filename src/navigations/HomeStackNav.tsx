import PolicyDetail from "../screens/SignIn/PolicyDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home";
import TodayMission from "@/screens/TodayMission";

const HomeStack = createNativeStackNavigator();

export const HomeStackNav = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
      initialRouteName="Home"
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="TodayMission" component={TodayMission} />
    </HomeStack.Navigator>
  );
};
