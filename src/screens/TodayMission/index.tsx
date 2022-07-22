import React, { useState } from "react";
import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@constants/Theme";
import AutoHeightImage from "react-native-auto-height-image/";
import PhotoMission from "./pages/PhotoMission";
import TextMission from "./pages/TextMission";
import PhotoTextMission from "./pages/PhotoTextMission";

interface IContainerProps {
  theme: ITheme;
}

const TodayMission = () => {
  const [isPhotoMission, setIsPhotoMission] = useState("PhotoText");
  return (
    <>
      {isPhotoMission === "Photo" && <PhotoMission />}
      {isPhotoMission === "Text" && <TextMission />}
      {isPhotoMission === "PhotoText" && <PhotoTextMission />}
    </>
  );
};

export default TodayMission;
