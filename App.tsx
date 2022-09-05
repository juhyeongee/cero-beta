import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, Platform, Image } from "react-native";
import { ThemeProvider } from "styled-components/native";
import styled from "styled-components/native";
import Theme from "./src/constants/Theme";
import { NavigationContainer } from "@react-navigation/native";
import ResultPage from "@/screens/MindTest/pages/ResultPage";
import { IntroNav, OnBoardingNav, MainBottomTabNav } from "@/navigations";
import {
  useFonts,
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from "@expo-google-fonts/noto-sans-kr";
import {
  GothicA1_100Thin,
  GothicA1_200ExtraLight,
  GothicA1_300Light,
  GothicA1_400Regular,
  GothicA1_700Bold,
  GothicA1_600SemiBold,
} from "@expo-google-fonts/gothic-a1";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import userInfoStore from "@/store/UserInfoStore";
import currentPageStore from "@/store/CurrentPageStore";
import { EndingStackNav } from "@navigations/index";
import { observer } from "mobx-react";
import * as Notifications from "expo-notifications";
import SvgIcon from "@/assets/SvgIcon";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function App() {
  const { currentScreen } = currentPageStore;
  const [onPage, setOnPage] = useState("Setting");
  const [fontsLoaded] = useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
    GothicA1_100Thin,
    GothicA1_200ExtraLight,
    GothicA1_300Light,
    GothicA1_400Regular,
    GothicA1_700Bold,
    GothicA1_600SemiBold,
  });

  useEffect(() => {
    userInfoStore.resetVersionNum();
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );
    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener((notification) => {
        console.log(notification);
      });

    return () => {
      subscription.remove(), responseSubscription.remove();
    };
  }, []);

  if (!fontsLoaded) {
    return (
      <Image
        width={1242}
        height={2757}
        source={require("./assets/splash.png")}
      />
    );
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={Theme}>
        {currentScreen === "IntroNav" && <IntroNav />}
        {currentScreen === "OnBoardingNav" && <OnBoardingNav />}
        {currentScreen === "MainBottomTabNav" && <MainBottomTabNav />}
        {currentScreen === "EndingStackNav" && <EndingStackNav />}

        {/* {onPage === "Setting" && <SettingStackNav />} */}

        <Toast />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default observer(App);
