import { useEffect } from "react";
import { View } from "react-native";
import SvgIcon from "@assets/SvgIcon";
import styled from "styled-components/native";
import { EndingStackScreenProps, ITheme } from "@/types";
import { OnBoardingStackScreenProps } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userInfoStore from "@/store/UserInfoStore";
import { lifeQuotes } from "@/constants/properties";

interface LoadingTextProps {
  theme: ITheme;
}

const LastLoadingScreen = ({
  route,
  navigation,
}: EndingStackScreenProps<"LastLoadingScreen">) => {
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SvgIcon name="boilingSeed" />
      <LoadingText>결과를 알아보고 있어요.</LoadingText>
      <GrayText>{lifeQuotes[1]}</GrayText>
      {/* TODO: lifeQuotes 명언 랜덤으로 나가게  */}
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
  font-family: ${(props: LoadingTextProps) => props.theme.font.thinFont};
  font-size: 16px;
  position: absolute;
  bottom: 10%;
`;
