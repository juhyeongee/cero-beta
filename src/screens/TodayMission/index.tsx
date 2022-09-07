import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  Keyboard,
} from "react-native";
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
  const [imageUri, setImageUri] = useState<string | undefined | null>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      await AsyncStorage.setItem(`mission${todoNum}ImageUri`, result.uri);
      setImageUri(result.uri);
      return result.uri;
    }
  };

  return (
    <>
      {missionType === "photo" && (
        <PhotoMission pickImage={pickImage} imageUri={imageUri} />
      )}
      {missionType === "text" && <TextMission />}
      {missionType === "both" && (
        <PhotoTextMission pickImage={pickImage} imageUri={imageUri} />
      )}
    </>
  );
};

export default observer(TodayMission);
