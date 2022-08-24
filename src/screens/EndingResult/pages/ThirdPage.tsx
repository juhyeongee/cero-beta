import { View, Text, Pressable, Modal } from "react-native";
import {
  EndingResultText,
  MindTestResultText,
  WINDOW_WIDTH,
} from "@constants/properties";
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
import userInfoStore from "@/store/UserInfoStore";
import { useState } from "react";
import { ThirdPageModal } from "../components/ThirdPageModal";
import Graph from "../components/Graph";

interface IFirstPageProps {
  goNextPage: () => void;
}
const ThirdPage = ({ goNextPage }: IFirstPageProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const firstScore = userInfoStore.FIRST_DEPRESSION_SCORE;
  const lastScore = userInfoStore.LAST_DEPRESSION_SCORE;

  return (
    <>
      <View style={{ flex: 2 }}>
        <TitleText>{EndingResultText["thirdPageTitle"]}</TitleText>
      </View>
      <FinalScoreBox
        onPress={() => setModalVisible(true)}
        firstDepressionScore={firstScore}
        lastDepressionScore={lastScore}
      />
      <Graph />
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
        <SubText>
          {MindTestResultText[userInfoStore.lastDepressionState]}
        </SubText>
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
      <ThirdPageModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

// const VerticalBar = styled.View`
//   height: 30px;
//   width: 1px;
//   background-color: white;
//   position: absolute;
//   left: ${(props: Props) => props.barPosition};
// `;

export default ThirdPage;
