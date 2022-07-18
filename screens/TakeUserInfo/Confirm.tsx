import { useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";
import { MainText, Layout } from "../components";

const Confirm = () => {
  return (
    <Layout>
      <View style={{ flex: 0.5 }}></View>
      <View style={{ flex: 1 }}>
        <MainText>아래 내용이 맞나요?</MainText>
      </View>
      <View style={{ flex: 3 }}></View>
    </Layout>
  );
};

export default Confirm;
