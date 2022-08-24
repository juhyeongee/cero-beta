import { View } from "react-native";
import { WINDOW_WIDTH } from "@constants/properties";

import SvgIcon from "@/assets/SvgIcon";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import userInfoStore from "@/store/UserInfoStore";

interface StyledProps {
  theme: ITheme;
}
interface VerticalBarProps {
  theme: ITheme;
  position: string;
  firstTest: boolean;
}
const Graph = () => {
  const firstScore = userInfoStore.FIRST_DEPRESSION_SCORE;
  const lastScore = userInfoStore.LAST_DEPRESSION_SCORE;
  const barLength = WINDOW_WIDTH * (84 / 100);
  const oneTick = barLength / 60;

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
  const trianglePositionCalculate = (score: number) => {
    const CONSTANT_1 = 9.5;
    const CONSTANT_2 = 5;
    let position;
    if (score > 45) {
      let scoreTick = 15 - (score - 45);
      position = barLength - oneTick * scoreTick - CONSTANT_1;
    } else if (score <= 45 && score > 40) {
      let scoreTick = score - 40;
      position =
        barLength - 30 * oneTick + 3 * oneTick * scoreTick - CONSTANT_1;
    } else {
      let scoreTick = (score * 3) / 4;
      position = oneTick * scoreTick - CONSTANT_2;
    }

    return `${position}px`;
  };

  const firstBarPosition: string = barPositionCalculate(firstScore);
  const lastBarPosition: string = barPositionCalculate(lastScore);

  const firstTrianglePosition: string = trianglePositionCalculate(firstScore);
  const lastTrianglePosition: string = trianglePositionCalculate(lastScore);

  return (
    <View
      style={{ flex: 4.5, justifyContent: "center", flexDirection: "column" }}
    >
      <GraphContainer>
        <RedZone />
        <YellowZone />
        <GreenZone />
        <BlueZone />
        <VerticalBar position={lastBarPosition} firstTest={false} />
        <VerticalBar position={firstBarPosition} firstTest={true} />

        <Triangle position={lastTrianglePosition} firstTest={false}>
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
        <Triangle position={firstTrianglePosition} firstTest={false}>
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
  );
};

const VerticalBar = styled.View`
  height: 30px;
  width: 1.5px;
  background-color: ${(props: VerticalBarProps) =>
    props.firstTest ? props.theme.color.n700 : props.theme.color.n0};
  position: absolute;
  left: ${(props: VerticalBarProps) => props.position};
`;

const Triangle = styled.View`
  top: -20px;
  position: absolute;
  left: ${(props: VerticalBarProps) => props.position};
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
export default Graph;
