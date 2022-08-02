import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home";
import TodayMission from "@/screens/TodayMission";
import { HomeStackParamList } from "@/types";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackNav = () => {
  const MISSION_NUM: number = 3;
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
      initialRouteName="Home"
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        initialParams={{ missionNum: MISSION_NUM }}
      />
      <HomeStack.Screen name="TodayMission" component={TodayMission} />
    </HomeStack.Navigator>
  );
};
