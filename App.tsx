import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Theme from "./src/constants/Theme";
import { NavigationContainer } from "@react-navigation/native";
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
import Toast from "react-native-toast-message";
import userInfoStore from "@/store/UserInfoStore";
import currentPageStore from "@/store/CurrentPageStore";
import { EndingStackNav } from "@navigations/index";
import { observer } from "mobx-react";
import dayjs from "dayjs";

function App() {
  const { currentScreen } = currentPageStore;
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
    const day = dayjs().format("YYMMDD");
    console.log(day);
    userInfoStore.updateTodayDate(day);
    userInfoStore.resetVersionNum();
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

        <Toast />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default observer(App);
