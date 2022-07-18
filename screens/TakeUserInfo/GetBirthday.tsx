import { useState } from "react";
import { View, Text } from "react-native";
import { Layout, MainText, BigPrimaryBtn } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";
import DatePicker from "react-native-date-picker";
import dayjs from "dayjs";

const GetBirthday = () => {
  const [birthday, setBirthday] = useState<Date>();

  return (
    <Layout>
      <View style={{ flex: 0.5 }}></View>
      <View style={{ flex: 1 }}>
        <MainText>효준 님의 생일을 알려주세요 </MainText>
      </View>
      <View style={{ flex: 3 }}></View>
    </Layout>
  );
};
export default GetBirthday;
