import { View, Pressable } from "react-native";
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

import userInfoStore from "@/store/UserInfoStore";
import { useState } from "react";
import { ThirdPageModal } from "../components/ThirdPageModal";
import Graph from "../components/Graph";

interface IFirstPageProps {
  goNextPage: () => void;
}
const ThirdPage = ({ goNextPage }: IFirstPageProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    FIRST_DEPRESSION_SCORE: firstScore,
    LAST_DEPRESSION_SCORE: lastScore,
    nickname,
  } = userInfoStore;

  return (
    <>
      <View style={{ flex: 2 }}>
        <TitleText>
          {EndingResultText["thirdPageTitle"].replace("유저", nickname)}
        </TitleText>
      </View>
      <Graph />
      <FinalScoreBox
        onPress={() => setModalVisible(true)}
        firstDepressionScore={firstScore}
        lastDepressionScore={lastScore}
      />
      <View style={{ flex: 6.5, paddingTop: "10%" }}>
        <SubText>
          {MindTestResultText[userInfoStore.lastDepressionState].replace(
            "유저",
            nickname
          )}
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
