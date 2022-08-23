import styled from "styled-components/native";
import { ITheme } from "@/types";
import { Platform, View } from "react-native";

interface IContainerProps {
  theme: ITheme;
}

interface Props {
  firstDepressionScore: number;
  lastDepressionScore: number;

  onPress: () => void;
}
export const FinalScoreBox = ({
  firstDepressionScore,
  lastDepressionScore,
  onPress,
}: Props) => {
  let text: string;
  let color: string;
  if (lastDepressionScore >= 46) {
    text = "더 나아졌어요";
    color = "blue";
  } else if (lastDepressionScore < 45 && lastDepressionScore > 40) {
    text = "좋아요";
    color = "green";
  } else if (lastDepressionScore <= 40 && lastDepressionScore > 20) {
    text = "주의가 필요해요";
    color = "yellow";
  } else {
    text = "망했어요";
    color = "red";
  }
  const VerticalBar = styled.View`
    height: 40px;
    width: 2px;
    background-color: black;
  `;
  const FinalText = styled.Text`
    font-size: 16px;
    color: ${(props: IContainerProps) =>
      color === "green"
        ? props.theme.color.primary
        : color === "yellow"
        ? props.theme.color.yellow600
        : color === "blue"
        ? props.theme.color.blue600
        : color === "red" && props.theme.color.red600};
  `;
  const FinalScore = styled.Text`
    font-weight: 700;
    font-size: 16px;
    color: ${(props: IContainerProps) =>
      color === "green"
        ? props.theme.color.primary
        : color === "yellow"
        ? props.theme.color.yellow600
        : color === "blue"
        ? props.theme.color.blue600
        : color === "red" && props.theme.color.red600};
  `;
  const Box = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${(props: IContainerProps) =>
      color === "green"
        ? props.theme.color.green300
        : color === "yellow"
        ? props.theme.color.yellow300
        : color === "blue"
        ? props.theme.color.blue300
        : color === "red" && props.theme.color.red300};
    border-radius: 10px;
    height: 48px;
    padding: ${Platform.OS === "ios" ? "10px" : "0px"} 30px;
  `;
  const QuestionCircle = styled.Pressable`
    justify-content: center;
    align-items: center;
    background-color: ${(props: IContainerProps) =>
      color === "green"
        ? props.theme.color.primary
        : color === "yellow"
        ? props.theme.color.yellow600
        : color === "blue"
        ? props.theme.color.blue600
        : color === "red" && props.theme.color.red600};
    width: 18px;
    height: 18px;
    border-radius: 10px;
  `;
  const QuestionMark = styled.Text`
    color: ${(props: IContainerProps) => props.theme.color.n0};
  `;
  return (
    <Box>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FinalScore>{lastDepressionScore}점: </FinalScore>
          <FinalText>{text}</FinalText>
        </View>
      </View>
      <QuestionCircle onPress={onPress}>
        <QuestionMark>?</QuestionMark>
      </QuestionCircle>
    </Box>
  );
};
