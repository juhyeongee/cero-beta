import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingStackParamList } from "@/types";
import {
  NoticePage,
  ResetDataPage,
  ResetNicknamePage,
  SettingAlarmPage,
  SettingHomePage,
} from "@/screens/Setting";

const SettingStack = createNativeStackNavigator<SettingStackParamList>();

export const SettingStackNav = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
      initialRouteName="SettingHome"
    >
      <SettingStack.Screen name="SettingHome" component={SettingHomePage} />
      <SettingStack.Screen name="SettingAlarm" component={SettingAlarmPage} />
      <SettingStack.Screen name="ResetNickname" component={ResetNicknamePage} />
      <SettingStack.Screen name="ResetData" component={ResetDataPage} />
      <SettingStack.Screen name="Notice" component={NoticePage} />
    </SettingStack.Navigator>
  );
};
