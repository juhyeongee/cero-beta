import { useEffect } from "react";
import { View } from "react-native";
import SvgIcon from "@assets/SvgIcon";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import { OnBoardingStackScreenProps } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userInfoStore from "@/store/UserInfoStore";

interface LoadingTextProps {
  theme: ITheme;
}

const LoadingPage = ({
  route,
  navigation,
}: OnBoardingStackScreenProps<"LoadingPage">) => {
  useEffect(() => {
    if (userInfoStore.FIRST_DEPRESSION_SCORE >= 25) {
      userInfoStore.updateFirstDepressionState("serious");
    } else if (
      userInfoStore.FIRST_DEPRESSION_SCORE > 20 &&
      userInfoStore.FIRST_DEPRESSION_SCORE <= 24
    ) {
      userInfoStore.updateFirstDepressionState("attention");
    } else if (
      userInfoStore.FIRST_DEPRESSION_SCORE > 15 &&
      userInfoStore.FIRST_DEPRESSION_SCORE <= 20
    ) {
      userInfoStore.updateFirstDepressionState("moderate");
    } else {
      userInfoStore.updateFirstDepressionState("good");
    }
    setTimeout(() => navigation.navigate("ResultPage"), 5000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SvgIcon name="boilingSeed" />
      <LoadingText>마음 씨앗을 만드는 중이예요</LoadingText>
      <GrayText>여기에 명언이나 글귀가 들어가면 좋겠어요</GrayText>
    </View>
  );
};

export default LoadingPage;

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
