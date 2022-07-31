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

export default function App() {
  const [onPage, setOnPage] = useState("MainBottomTabNav");
  const [fontsLoaded] = useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
  });

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
        {onPage === "IntroNav" && <IntroNav />}
        {onPage === "OnBoardingNav" && <OnBoardingNav />}
        {onPage === "MainBottomTabNav" && <MainBottomTabNav />}
      </ThemeProvider>
    </NavigationContainer>
  );
}
