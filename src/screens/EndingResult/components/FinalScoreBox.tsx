import styled from "styled-components/native";
import { ITheme } from "@/types";
import { Platform } from "react-native";

interface IContainerProps {
  theme: ITheme;
}

interface Props {
  score: number;
}
export const FinalScoreBox = ({ score }: Props) => {
  let text: string;
  let color: string;
  if (score >= 25) {
    text = "더 나아졌어요";
    color = "blue";
  } else if (score < 25 && score > 20) {
    text = "좋아요";
    color = "green";
  } else if (score <= 20 && score > 15) {
    text = "주의가 필요해요";
    color = "yellow";
  } else {
    text = "망했어요";
    color = "red";
  }

  const FinalText = styled.Text`
    font-size: 16px;
    color: ${(props: IContainerProps) => props.theme.color.n0};
  `;
  const Box = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props: IContainerProps) =>
      color === "green"
        ? props.theme.color.primary
        : color === "yellow"
        ? props.theme.color.cautionYellow
        : color === "blue"
        ? props.theme.color.blue
        : color === "red" && props.theme.color.errorRed};
    border-radius: 10px;
    height: 48px;
    padding: ${Platform.OS === "ios" ? "10px" : "0px"} 20px;
  `;
  return (
    <Box>
      <FinalText>
        {score}점: {text}
      </FinalText>
    </Box>
  );
};
