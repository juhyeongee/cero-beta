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

interface IFirstPageProps {
  goNextPage: () => void;
}
interface StyledProps {
  theme: ITheme;
}
interface Props {
  barPosition: string;
}

const ThirdPage = ({ goNextPage }: IFirstPageProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const barLength = WINDOW_WIDTH * (84 / 100);
  const oneTick = barLength / 60;
  const firstScore = userInfoStore.FIRST_DEPRESSION_SCORE;
  const lastScore = userInfoStore.LAST_DEPRESSION_SCORE;

  const barPositionCalculate = (score: number) => {
    if (score > 45) {
      let scoreTick = 15 - (score - 45);
      return `${barLength - oneTick * scoreTick}px`;
    } else if (score <= 45 && score > 40) {
      let scoreTick = score - 40;
      return `${barLength - 30 * oneTick + 3 * oneTick * scoreTick}px`;
    } else {
      let scoreTick = (score * 3) / 4;
      return `${oneTick * scoreTick}px`;
    }
  };

  const firstBarPosition: string = barPositionCalculate(firstScore);
  const lastBarPosition: string = barPositionCalculate(lastScore);

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
      <View
        style={{ flex: 4.5, justifyContent: "center", flexDirection: "column" }}
      >
        <GraphContainer>
          <RedZone />
          <YellowZone />
          <GreenZone />
          <BlueZone />
          <VerticalBar barPosition={lastBarPosition} firstTest={false} />
          <VerticalBar barPosition={firstBarPosition} firstTest={true} />

          <Triangle barPosition={lastBarPosition} firstTest={false}>
            {lastScore > 45 ? (
              <SvgIcon name="blueReverseTriangle" />
            ) : lastScore > 40 ? (
              <SvgIcon name="greenReverseTriangle" />
            ) : lastScore > 20 ? (
              <SvgIcon name="yellowReverseTriangle" />
            ) : (
              <SvgIcon name="redReverseTriangle" />
            )}
          </Triangle>
          <Triangle barPosition={firstBarPosition} firstTest={false}>
            <SvgIcon name="transparentReverseTriangle" />
          </Triangle>
        </GraphContainer>
        <StandardsContainer>
          <StandardGrayText>0</StandardGrayText>
          <StandardGrayText>20</StandardGrayText>
          <StandardGrayText>40</StandardGrayText>
          <StandardGrayText>45</StandardGrayText>
          <StandardGrayText>60</StandardGrayText>
        </StandardsContainer>
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

interface VerticalBarProps {
  theme: ITheme;
  barPosition: string;
  firstTest: boolean;
}
const VerticalBar = styled.View`
  height: 30px;
  width: 1px;
  background-color: ${(props: VerticalBarProps) =>
    props.firstTest ? props.theme.color.n700 : props.theme.color.n0};
  position: absolute;
  left: ${(props: VerticalBarProps) => props.barPosition};
`;

const Triangle = styled.View`
  top: -20px;
  position: absolute;
  left: ${(props: VerticalBarProps) => props.barPosition};
`;

const RedZone = styled.View`
  width: 25%;
  background-color: ${(props: StyledProps) => props.theme.color.red600};
  height: 30px;
`;
const YellowZone = styled.View`
  width: 25%;
  background-color: ${(props: StyledProps) => props.theme.color.yellow600};
  height: 30px;
`;
const GreenZone = styled.View`
  width: 25%;
  background-color: ${(props: StyledProps) => props.theme.color.primary};
  height: 30px;
`;
const BlueZone = styled.View`
  width: 25%;
  background-color: ${(props: StyledProps) => props.theme.color.blue600};
  height: 30px;
`;
const GraphContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 30px;
  background-color: ${(props: StyledProps) => props.theme.color.red600};
  justify-content: space-between;
`;

const StandardsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 28px;
  justify-content: space-between;
  align-items: flex-end;
`;

const StandardGrayText = styled.Text`
  color: ${(props: StyledProps) => props.theme.color.n700};
  font-size: 11px;
`;

export default ThirdPage;
