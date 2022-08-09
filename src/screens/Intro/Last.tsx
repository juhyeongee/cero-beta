import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image/";
import { ITheme } from "@/types";
import SvgIcon from "@assets/SvgIcon";
import { BigPrimaryBtn } from "@components/index";
import { LastContainer, LastIntroText } from "./Components/Styled";

interface IContainerProps {
  theme: ITheme;
}

interface ILastPage {
  navigateToSignInScreen: () => void;
}

const Last = ({ navigateToSignInScreen }: ILastPage) => {
  return (
    <LastContainer>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="LastWindow" />
      </View>
      <View style={{ position: "relative", bottom: "5%" }}>
        <SvgIcon name="LogoWithTitle" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <SvgIcon name="LastPot" />
      </View>
      <LastIntroText>매일 조금씩 더 괜찮은 우리,</LastIntroText>
      <LastIntroText>혼자들만의 14일 이야기</LastIntroText>
      <View style={{ width: "100%", position: "relative", top: "30%" }}>
        <BigPrimaryBtn text="시작하기" onPress={navigateToSignInScreen} />
      </View>
    </LastContainer>
  );
};

export default Last;
