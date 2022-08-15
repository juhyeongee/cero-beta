import SvgIcon from "@/assets/SvgIcon";
import { ITheme } from "@/types";
import { Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Container, TitleText, SubText } from "../components/Styled";
import GrayAcchodion from "../components/GrayAcchodion";

const NoticePage = () => {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <SvgIcon name="leftArrow" />
          <TitleText>공지사항</TitleText>
        </View>
        <View style={{ flex: 4 }}>
          <GrayAcchodion questionNum={3} />
          <GrayAcchodion questionNum={4} />
          <GrayAcchodion questionNum={6} />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default NoticePage;
