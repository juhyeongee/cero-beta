import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
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
import { observer } from "mobx-react";
import EndingMovie from "@screens/EndingMovie";
import EndingResult from "@/screens/EndingResult";
import Feedback from "@/screens/Feedback";

function App() {
  const { currentScreen } = currentPageStore;
  const [onPage, setOnPage] = useState("Feedback");
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
    userInfoStore.resetVersionNum;
  }, []);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Now Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={Theme}>
        {/* {currentScreen === "IntroNav" && <IntroNav />}
        {currentScreen === "OnBoardingNav" && <OnBoardingNav />}*/}
        {/* {currentScreen === "MainBottomTabNav" && <MainBottomTabNav />} */}
        {onPage === "EndingMovie" && <EndingMovie />}
        {onPage === "EndingResult" && <EndingResult />}
        {onPage === "Feedback" && <Feedback />}

        {/* <Toast /> */}
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default observer(App);
