import { widthRatio, fontsizeRatio } from "@/utils";
import React from "react";
import { View, Text, Platform } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { ITheme } from "@/types";
import styled, { css } from "styled-components/native";

interface IContainerProps {
  theme: ITheme;
}
const Header = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <AutoHeightImage
          width={widthRatio(32)}
          source={require("@assets/images/greenFlag.png")}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Title>지난 할 일 </Title>
      </View>
      <View style={{ flex: 1 }}>
        <Subtitle>지금까지의 여정을 살펴보세요.</Subtitle>
      </View>
    </View>
  );
};

export default Header;

const Title = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.thickFont};
  font-size: ${Platform.select({
    ios: css`
      ${fontsizeRatio(20)}px
    `,
    android: css`
      ${fontsizeRatio(18)}px
    `,
  })};
`;

const Subtitle = styled.Text`
  flex: 1;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  font-size: ${fontsizeRatio(14)}px;
`;
