import { useState, useRef } from "react";
import { View, Text, SafeAreaView, Pressable, Animated } from "react-native";
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

interface StyledProps {
  theme: ITheme;
}

const ResultPage = () => {
  const [condition, setCondition] = useState("serious");
  const [pageNumber, setPageNubmer] = useState(0);
  const conditionList: string[] = ["moderate", "serious", "attention", "good"];
  const seedOpacity: Animated.Value = useRef(new Animated.Value(1)).current;
  const potY: Animated.Value = useRef(new Animated.Value(400)).current;
  const seedY: Animated.Value = useRef(new Animated.Value(0)).current;
  const lightOpacity: Animated.Value = useRef(new Animated.Value(0)).current;

  const { updateScreen } = currentPageStore;

  const TOGO_SCREEN = "MainBottomTabNav";

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
      console.log("마지막페이지 입니다");
      updateScreen("TOGO_SCREEN");
    }
  };

  return (
    <BG>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <MainText>{mindTestResult[condition][pageNumber]}</MainText>
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
  flex: 8;
  padding: 32px;
`;
const BG = styled.View`
  flex: 1;
  background-color: ${(props: StyledProps) => props.theme.color.n200};
`;

const MainText = styled.Text`
  font-size: 20px;
  font-family: ${(props: StyledProps) => props.theme.font.mainFont};
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
