import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Animated,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
import userInfoStore from "@/store/UserInfoStore";
import SvgIcon from "@/assets/SvgIcon";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import AutoHeightImage from "react-native-auto-height-image";
import { EndingMovieText } from "@constants/properties";
import { BigPrimaryBtn } from "@/components";

interface IContainerProps {
  theme: ITheme;
}

const EndingMovie = () => {
  const [pageNumber, setPageNubmer] = useState(1);
  const { nickname } = userInfoStore;
  return (
    <SafeArea>
      <BlackBG>
        <ScrollContainer showsVerticalScrollIndicator={false} bounces={false}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <ImageContainer style={{ flex: 1, alignItems: "center" }}>
              <SvgIcon name="LogoWithTitle" />
            </ImageContainer>

            <TextContainer>
              <TitleText>{EndingMovieText[1]}</TitleText>
            </TextContainer>
            <TextContainer>
              <MainText>{EndingMovieText[2]}</MainText>
            </TextContainer>
            <ImageContainer>
              <AutoHeightImage
                width={150}
                source={require("@assets/images/ending-image-first.png")}
              />
            </ImageContainer>
            <TextContainer>
              <MainText>{EndingMovieText[3]}</MainText>
            </TextContainer>
            <ImageContainer style={{ alignItems: "center" }}>
              <AutoHeightImage
                width={170}
                source={require("@assets/images/ending-image-second.png")}
              />
            </ImageContainer>

            <TextContainer>
              <MainText>{EndingMovieText[4]}</MainText>
            </TextContainer>
            <ImageContainer style={{ alignItems: "flex-end" }}>
              <AutoHeightImage
                width={190}
                source={require("@assets/images/ending-image-third.png")}
              />
            </ImageContainer>
            <TextContainer>
              <MainText>{EndingMovieText[5]}</MainText>
            </TextContainer>
            <ImageContainer style={{ alignItems: "flex-end" }}>
              <AutoHeightImage
                width={210}
                source={require("@assets/images/ending-image-fourth.png")}
              />
            </ImageContainer>
            <TextContainer>
              <MainText>{EndingMovieText[6]}</MainText>
            </TextContainer>
            <TextContainer style={{ alignItems: "center" }}>
              <SubText>{EndingMovieText[7]}</SubText>
            </TextContainer>
            <View style={{ alignItems: "center" }}>
              <AutoHeightImage
                width={300}
                source={require("@assets/images/flower-complete-ver1.png")}
              />
              <View style={{ position: "absolute", bottom: 60, width: "50%" }}>
                <BigPrimaryBtn text="마지막 물 주기" />
              </View>
            </View>
          </View>
        </ScrollContainer>
      </BlackBG>
    </SafeArea>
  );
};

export default EndingMovie;

const BlackBG = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 8%;
  padding-bottom: 16%;
`;

const SafeArea = styled.SafeAreaView`
  background-color: black;
  flex: 1;
`;

const TextContainer = styled.View`
  width: 100%;
  margin: 10px 0px;
  padding: 0% 16%;
`;

const ImageContainer = styled.View`
  width: 100%;
  margin: 30px 0px;
  padding: 0% 6%;
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${(props: IContainerProps) =>
    props.theme.color.endingBGcolor};
`;

const TitleText = styled.Text`
  font-size: 20px;
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
`;

const SubText = styled.Text`
  font-size: 12px;
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
`;
const MainText = styled.Text`
  font-size: 16px;
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
`;
