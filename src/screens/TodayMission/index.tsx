import React, { useState } from "react";
import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import PhotoMission from "./pages/PhotoMission";
import TextMission from "./pages/TextMission";
import PhotoTextMission from "./pages/PhotoTextMission";
import * as ImagePicker from "expo-image-picker";
import { observer } from "mobx-react";
import userInfoStore from "@/store/UserInfoStore";
import missions from "@constants/missions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodayMission = () => {
  const { todoNum, versionNum } = userInfoStore;
  const version = `version${versionNum}`;
  const missionType = missions[todoNum][version].type;
  const [thisMissionImagePath, setThisMissionImagePath] = useState({
    missionUri: require("@assets/images/camera.png"),
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      await AsyncStorage.setItem(`mission${todoNum}ImageUri`, result.uri);
      console.log("result.uri:", result.uri);
      console.log(`mission${todoNum}ImageUri`);
      // setThisMissionImagePath();
    }
  };
  //TODO: firebase 연결하기 - :https://docs.expo.dev/versions/latest/sdk/imagepicker/
  return (
    <>
      {missionType === "photo" && <PhotoMission pickImage={pickImage} />}
      {missionType === "text" && <TextMission />}
      {missionType === "both" && <PhotoTextMission pickImage={pickImage} />}
    </>
  );
};

export default observer(TodayMission);
