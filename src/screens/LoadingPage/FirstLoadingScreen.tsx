import { useEffect } from "react";
import { View } from "react-native";
import SvgIcon from "@assets/SvgIcon";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import { OnBoardingStackScreenProps } from "@/types";
import userInfoStore from "@/store/UserInfoStore";
import { lifeQuotes } from "@/constants/properties";

interface LoadingTextProps {
  theme: ITheme;
}

const FirstLoadingScreen = ({
  route,
  navigation,
}: OnBoardingStackScreenProps<"FirstLoadingScreen">) => {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }
  useEffect(() => {
    if (userInfoStore.FIRST_DEPRESSION_SCORE >= 46) {
      userInfoStore.updateFirstDepressionState("good");
    } else if (
      userInfoStore.FIRST_DEPRESSION_SCORE > 40 &&
      userInfoStore.FIRST_DEPRESSION_SCORE <= 45
    ) {
      userInfoStore.updateFirstDepressionState("moderate");
    } else if (
      userInfoStore.FIRST_DEPRESSION_SCORE > 20 &&
      userInfoStore.FIRST_DEPRESSION_SCORE <= 40
    ) {
      userInfoStore.updateFirstDepressionState("attention");
    } else {
      userInfoStore.updateFirstDepressionState("serious");
    }
    setTimeout(() => navigation.navigate("ResultPage"), 4000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "8%",
      }}
    >
      <SvgIcon name="boilingSeed" />
      <LoadingText>마음 씨앗을 만드는 중이에요</LoadingText>
      <GrayText>
        {lifeQuotes[getRandomInt(0, Object.keys(lifeQuotes).length + 1)]}
      </GrayText>
    </View>
  );
};

export default FirstLoadingScreen;

const LoadingText = styled.Text`
  font-family: ${(props: LoadingTextProps) => props.theme.font.thickFont};
  font-size: 16px;
  margin-top: 16px; ;
`;

const GrayText = styled.Text`
  text-align: center;
  font-family: ${(props: LoadingTextProps) => props.theme.font.thinFont};
  font-size: 16px;
  position: absolute;
  bottom: 10%;
`;
