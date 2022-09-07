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

export type MainBottomTabParamList = {
  FinishedTasks: undefined;
  HomeStackNav: undefined;
  Setting: undefined;
  Devtool: undefined;
};
export type HomeStackParamList = {
  TodayMission: undefined;
  Home: { missionNum: number };
  MindTest: undefined;
  FeedBack: undefined;
};
export type OnBoardingStackParamList = {
  TakeUserInfo: undefined;
  OnBoarding: undefined;
  MindTest: undefined;
  FirstLoadingScreen: undefined;
  ResultPage: undefined;
};

export type SettingStackParamList = {
  Notice: undefined;
  ResetData: undefined;
  ResetNickname: undefined;
  SettingAlarm: undefined;
  SettingHome: undefined;
};

export type EndingStackParamList = {
  LastLoadingScreen: undefined;
  MindTest: undefined;
  EndingResult: undefined;
  EndingMovie: undefined;
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

export type MainBottomTabScreenProps<
  Screen extends keyof MainBottomTabParamList
> = BottomTabNavigationProp<MainBottomTabParamList, Screen>;

export type EndingStackScreenProps<Screen extends keyof EndingStackParamList> =
  NativeStackScreenProps<EndingStackParamList, Screen>;

//navigation props , useNavigation 혼용 사용중
