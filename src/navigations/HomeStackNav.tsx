import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home";
import TodayMission from "@/screens/TodayMission";
import { HomeStackParamList } from "@/types";
import MindTest from "@/screens/MindTest";
import FeedBack from "@/screens/Feedback";

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
      <HomeStack.Screen name="MindTest" component={MindTest} />
      <HomeStack.Screen name="FeedBack" component={FeedBack} />
    </HomeStack.Navigator>
  );
};
