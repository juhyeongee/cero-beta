import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Animated,
  Platform,
} from "react-native";
import { mindTestResult } from "@constants/properties";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import SvgIcon from "@/assets/SvgIcon";
import {
  fadeOut,
  fadeIn,
  moveUpFirst,
  moveUpSecond,
  moveUpThird,
  moveDownFirst,
  moveDownSecond,
} from "../functions";
import currentPageStore from "@/store/CurrentPageStore";
import userInfoStore from "@/store/UserInfoStore";
import { fontsizeRatio } from "@/utils";

interface StyledProps {
  theme: ITheme;
}

const ResultPage = () => {
  const [pageNumber, setPageNubmer] = useState(0);
  const { updateScreen } = currentPageStore;
  const { firstDepressionState } = userInfoStore;
  const TOGO_SCREEN = "MainBottomTabNav";

  const seedOpacity: Animated.Value = useRef(new Animated.Value(1)).current;
  const potY: Animated.Value = useRef(new Animated.Value(400)).current;
  const seedY: Animated.Value = useRef(new Animated.Value(0)).current;
  const lightOpacity: Animated.Value = useRef(new Animated.Value(0)).current;

  const goNextPage = () => {
    if (pageNumber !== 6) {
      setPageNubmer(pageNumber + 1);
    }
    if (pageNumber === 0) {
      fadeOut(seedOpacity);
    } else if (pageNumber === 1) {
      moveUpFirst(potY);
    } else if (pageNumber === 2) {
      moveUpSecond(potY);
    } else if (pageNumber === 3) {
      moveUpThird(potY);
    } else if (pageNumber === 4) {
      moveDownFirst(seedY);
    } else if (pageNumber === 5) {
      moveDownSecond(seedY);
      fadeIn(lightOpacity);
    } else if (pageNumber === 6) {
      updateScreen(TOGO_SCREEN);
    }
  };

  return (
    <BG>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <MainText>
            {mindTestResult[firstDepressionState][pageNumber]}
          </MainText>
        </Container>
        <ImageContainer>
          <Animated.View
            style={{ position: "absolute", transform: [{ translateY: seedY }] }}
          >
            <SvgIcon name="seriousSeedWithoutBG" />
          </Animated.View>
          <Animated.View style={{ opacity: seedOpacity }}>
            <SvgIcon name="seriousSeed" />
          </Animated.View>
          <Animated.View style={{ opacity: lightOpacity }}>
            <SvgIcon name="yellowHighlight" />
          </Animated.View>
          <Animated.View
            style={{ position: "relative", transform: [{ translateY: potY }] }}
          >
            <SvgIcon name="fullPot" />
          </Animated.View>
        </ImageContainer>
        <BtnContainer>
          <Pressable
            onPress={goNextPage}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <BtnText>다음으로 넘어가기</BtnText>
            <SvgIcon name="rightPrimaryTriangle" />
          </Pressable>
        </BtnContainer>
      </SafeAreaView>
    </BG>
  );
};

export default ResultPage;

const Container = styled.View`
  justify-content: center;
  flex: 8;
  padding: 32px;
`;

const BG = styled.View`
  flex: 1;
  background-color: ${(props: StyledProps) => props.theme.color.n200};
`;

const MainText = styled.Text`
  font-size: ${(props: StyledProps) =>
    Platform.OS === "ios" ? fontsizeRatio(20) : fontsizeRatio(18)};
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
`;

const ImageContainer = styled.View`
  flex: 14;
  align-items: center;
`;

const BtnContainer = styled.View`
  box-sizing: border-box;
  flex: 2;
  justify-content: center;
  align-items: flex-end;
  padding-right: 32px;
`;

const BtnText = styled.Text`
  color: ${(props: StyledProps) => props.theme.color.primary};
`;
