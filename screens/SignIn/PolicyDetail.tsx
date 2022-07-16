import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Layout } from "../components";
import { MainText, SubText } from "../components";
import { policyText } from "../../constants/properties";
import SvgIcon from "../../assets/SvgIcon";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/IntroNav";

const PolicyDetail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Layout>
      <View style={{ flex: 0.1, justifyContent: "center" }}>
        <Pressable onPress={() => navigation.goBack()}>
          <SvgIcon name="leftArrow" />
        </Pressable>
      </View>
      <View style={{ flex: 0.2 }}>
        <MainText>이용약관 동의 </MainText>
        <SubText>
          본 약관은 새로의 서비스 이용과 관련하여 필요한 사항을 규정합니다.
        </SubText>
      </View>
      <ScrollView style={{ flex: 10 }}>
        <Text>{policyText.text}</Text>
      </ScrollView>
    </Layout>
  );
};

export default PolicyDetail;
