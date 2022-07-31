import React, { View } from "react-native";
import SvgIcon from "@assets/SvgIcon";
import { Layout, MainText } from "@/components";
import styled from "styled-components/native";
import { ITheme } from "@/types";

interface LoadingTextProps {
  theme: ITheme;
}
const LoadingPage = () => {
  return (
    <Layout center={true} alignCenter={true}>
      <SvgIcon name="boilingSeed" />
      <LoadingText>마음 씨앗을 만드는 중이예요</LoadingText>
      <GrayText>여기에 명언이나 글귀가 들어가면 좋겠어요</GrayText>
    </Layout>
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
