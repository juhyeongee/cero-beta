import { useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { mindTestResult } from "@constants/properties";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import SvgIcon from "@/assets/SvgIcon";

interface StyledProps {
  theme: ITheme;
}

const ResultPage = () => {
  const [condition, setCondition] = useState("serious");
  const [pageNumber, setPageNubmer] = useState("firstText");
  return (
    <BG>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <MainText>{mindTestResult[condition][pageNumber]}</MainText>
        </Container>
        <ImageContainer>
          <SvgIcon name="seriousSeed" />
        </ImageContainer>
        <BtnContainer>
          <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
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
