import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, Platform } from "react-native";
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
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );
    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener((notification) => {
        console.log(notification);
      });

    userInfoStore.resetVersionNum();
    return () => {
      subscription.remove(), responseSubscription.remove();
    };
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Now Loading...</Text>
      </View>
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
