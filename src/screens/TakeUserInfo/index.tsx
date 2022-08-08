import { useState } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";

import GetGender from "./pages/GetGender";
import GetBirthday from "./pages/GetBirthday";
import GetNickName from "./pages/GetNickName";
import Confirm from "./pages/Confirm";

const TakeUserInfo = () => {
  const [nickname, setNickname] = useState<string | null>("");
  const [birthday, setBirthday] = useState<string | null>("");
  const [gender, setGender] = useState<string | null>("");
  const [age, setAge] = useState("");

  const getNickname = async () => {
    const getNickname: string | null = await AsyncStorage.getItem("nickname");
    setNickname(getNickname);
  };

  const getBirthday = async () => {
    const getBirthday: string | null = await AsyncStorage.getItem("birthday");
    setBirthday(getBirthday);
  };

  const getGender = async () => {
    const getGender: string | null = await AsyncStorage.getItem("gender");
    setGender(getGender);
  };

  const saveGenderToAsyncStorage = async (params: string) => {
    await AsyncStorage.setItem("gender", params);
    console.log("젠더 저장완료");
    getGender();
  };

  const saveBirthdayToAsyncStorage = async (params: string) => {
    await AsyncStorage.setItem("birthday", params);
    console.log("생일 저장완료");
    getBirthday();
  };

  const saveNicknameToAsyncStorage = async (params: string) => {
    await AsyncStorage.setItem("nickname", params);
    console.log("닉네임 저장완료");
    getNickname();
  };

  return (
    <Swiper loop={false} showsPagination={false}>
      <GetNickName />
      <GetBirthday />
      <GetGender />
      <Confirm />
    </Swiper>
  );
};

export default TakeUserInfo;
