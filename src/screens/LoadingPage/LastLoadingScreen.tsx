import { useEffect } from "react";
import { View } from "react-native";
import SvgIcon from "@assets/SvgIcon";
import styled from "styled-components/native";
import { EndingStackScreenProps, ITheme } from "@/types";
import userInfoStore from "@/store/UserInfoStore";
import { lifeQuotes } from "@/constants/properties";

interface LoadingTextProps {
  theme: ITheme;
}

const LastLoadingScreen = ({
  route,
  navigation,
}: EndingStackScreenProps<"LastLoadingScreen">) => {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

  useEffect(() => {
    if (userInfoStore.LAST_DEPRESSION_SCORE >= 46) {
      userInfoStore.updateLastDepressionState("good");
    } else if (
      userInfoStore.LAST_DEPRESSION_SCORE > 40 &&
      userInfoStore.LAST_DEPRESSION_SCORE <= 45
    ) {
      userInfoStore.updateLastDepressionState("moderate");
    } else if (
      userInfoStore.LAST_DEPRESSION_SCORE > 20 &&
      userInfoStore.LAST_DEPRESSION_SCORE <= 40
    ) {
      userInfoStore.updateLastDepressionState("attention");
    } else {
      userInfoStore.updateLastDepressionState("serious");
    }
    setTimeout(() => navigation.navigate("EndingResult"), 4000);
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
      <SvgIcon name="photosynthesis" />
      <LoadingText>꽃이 햇볕을 머금고 있어요.</LoadingText>
      <GrayText>
        {lifeQuotes[getRandomInt(0, Object.keys(lifeQuotes).length + 1)]}
      </GrayText>
    </View>
  );
};

export default LastLoadingScreen;

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
