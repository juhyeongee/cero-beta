import { View, Text } from "react-native";
import { WINDOW_WIDTH } from "@constants/properties";

import SvgIcon from "@/assets/SvgIcon";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import userInfoStore from "@/store/UserInfoStore";

interface StyledProps {
  theme: ITheme;
}

const Graph = () => {
  const firstScore = userInfoStore.FIRST_DEPRESSION_SCORE;
  const lastScore = userInfoStore.LAST_DEPRESSION_SCORE;
  let color: string;
  if (lastScore >= 46) {
    color = "blue";
  } else if (lastScore < 45 && lastScore > 40) {
    color = "green";
  } else if (lastScore <= 40 && lastScore > 35) {
    color = "yellow";
  } else {
    color = "red";
  }
  const ColorBox = styled.View`
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${(props: StyledProps) =>
      color === "green"
        ? props.theme.color.primary
        : color === "yellow"
        ? props.theme.color.yellow600
        : color === "blue"
        ? props.theme.color.blue600
        : color === "red" && props.theme.color.red600};
  `;
  return (
    <View
      style={{
        flex: 4.5,
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 20,
        paddingBottom: 30,
      }}
    >
      <GrayBox>
        <GrayInnerText>처음 점수</GrayInnerText>
        <GrayScoreText>{firstScore}</GrayScoreText>
      </GrayBox>
      <View
        style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}
      >
        {lastScore > 45 ? (
          <SvgIcon name="blueRightTriangle" />
        ) : lastScore > 40 ? (
          <SvgIcon name="greenRightTriangle" />
        ) : lastScore > 20 ? (
          <SvgIcon name="yellowRightTriangle" />
        ) : (
          <SvgIcon name="redRightTriangle" />
        )}
      </View>
      <ColorBox>
        <ColorInnerText>현재 점수</ColorInnerText>
        <ColorScoreText>{lastScore}</ColorScoreText>
      </ColorBox>
    </View>
  );
};

const GrayBox = styled.View`
  border-radius: 10px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: StyledProps) => props.theme.color.n100};
`;

const GrayInnerText = styled.Text`
  font-size: 14px;

  color: ${(props: StyledProps) => props.theme.color.n600};
`;

const GrayScoreText = styled.Text`
  margin-top: 16px;
  font-weight: 500;
  font-size: 66px;
  color: ${(props: StyledProps) => props.theme.color.n600};
`;

const ColorInnerText = styled.Text`
  font-size: 14px;
  color: ${(props: StyledProps) => props.theme.color.n0};
`;

const ColorScoreText = styled.Text`
  margin-top: 16px;
  font-weight: 500;
  font-size: 66px;
  color: ${(props: StyledProps) => props.theme.color.n0};
`;

export default Graph;
