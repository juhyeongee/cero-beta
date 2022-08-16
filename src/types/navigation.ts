import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type IntroStackParamList = {
  Intro: undefined;
  LogIn: undefined;
  SignIn: undefined;
  JoinWithEmail: undefined;
  JoinWithApple: undefined;
  JoinWithGoogle: undefined;
  CheckPrivacyPolicy: undefined;
  PolicyDetail: undefined;
};

//TODO: 레퍼런스 코드 탐색 후, 각 타입에 필요한 요소들 타입선언하기.

export type MainBottomTabParamList = {
  FinishedTasks: undefined;
  HomeStackNav: undefined;
  Setting: undefined;
  Devtool: undefined;
};
export type HomeStackParamList = {
  TodayMission: undefined;
  Home: { missionNum: number };
};
export type OnBoardingStackParamList = {
  TakeUserInfo: undefined;
  OnBoarding: undefined;
  MindTest: undefined;
  LoadingPage: undefined;
  ResultPage: undefined;
};

export type SettingStackParamList = {
  Notice: undefined;
  ResetData: undefined;
  ResetNickname: undefined;
  SettingAlarm: undefined;
  SettingHome: undefined;
};

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, Screen>;

export type IntroStackScreenProps<Screen extends keyof IntroStackParamList> =
  NativeStackScreenProps<IntroStackParamList, Screen>;

export type OnBoardingStackScreenProps<
  Screen extends keyof OnBoardingStackParamList
> = NativeStackScreenProps<OnBoardingStackParamList, Screen>;

export type SettingStackScreenProps<
  Screen extends keyof SettingStackParamList
> = NativeStackScreenProps<SettingStackParamList, Screen>;

export type MainBottomTabScreenProp<
  Screen extends keyof MainBottomTabParamList
> = BottomTabNavigationProp<MainBottomTabParamList, Screen>;

//navigation props , useNavigation 혼용 사용중
