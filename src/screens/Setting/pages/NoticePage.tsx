import SvgIcon from "@/assets/SvgIcon";
import { ITheme, SettingStackScreenProps } from "@/types";
import { Platform, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Container, TitleText, SubText } from "../components/Styled";
import GrayAcchodion from "../components/GrayAcchodion";
import { NoticeTexts } from "@constants/properties";

const NoticePage = ({
  route,
  navigation,
}: SettingStackScreenProps<"Notice">) => {
  const navigateToBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <Pressable onPress={navigateToBack}>
            <SvgIcon name="leftArrow" />
          </Pressable>
          <TitleText>공지사항</TitleText>
        </View>
        <View style={{ flex: 4 }}>
          <GrayAcchodion texts={NoticeTexts} questionNum={1} />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default NoticePage;
