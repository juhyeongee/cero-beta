import { View, Text, Pressable } from "react-native";
import { EndingResultText, MindTestResultText } from "@constants/properties";
import {
  TitleText,
  MainText,
  BtnContainer,
  BtnText,
  SubText,
} from "../components/Styled";
import SvgIcon from "@/assets/SvgIcon";
import { FinalScoreBox } from "../components/FinalScoreBox";
import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IFirstPageProps {
  goNextPage: () => void;
}
interface StyledProps {
  theme: ITheme;
}

const ThirdPage = ({ goNextPage }: IFirstPageProps) => {
  return (
    <>
      <View style={{ flex: 2 }}>
        <TitleText>{EndingResultText["thirdPageTitle"]}</TitleText>
      </View>
      <FinalScoreBox score={43} />
      <View style={{ flex: 4.5, justifyContent: "flex-end" }}>
        <GraphContainer>
          {/* <SvgIcon name="grayInfo" /> */}
          {/* TODO: grayIcon 배치.... */}
          <SvgIcon name="statusGraph" />
        </GraphContainer>
      </View>
      <View
        style={{
          flex: 0.4,
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <SvgIcon name="statusCompare" />
      </View>
      <View style={{ flex: 6.5, paddingTop: "10%" }}>
        <SubText>{MindTestResultText["moderate"]}</SubText>
      </View>
      <BtnContainer>
        <Pressable
          onPress={goNextPage}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <BtnText>다음으로 넘어가기</BtnText>
          <SvgIcon name="rightPrimaryTriangle" />
        </Pressable>
      </BtnContainer>
    </>
  );
};

const GraphContainer = styled.View`
  flex: 0.9;
  background-color: ${(props: StyledProps) => props.theme.color.n100};
  justify-content: flex-end;
  align-items: center;
  border-radius: 12px; ;
`;

export default ThirdPage;
