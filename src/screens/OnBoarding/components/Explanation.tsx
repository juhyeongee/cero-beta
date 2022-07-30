import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

interface ExplanationProps {
  text: string;
}

const Explanation = ({ text }: ExplanationProps) => {
  return (
    <Contianer>
      <View>
        <ExplainText numberOfLines={3} ellipsizeMode="tail">
          {text}
        </ExplainText>
      </View>
    </Contianer>
  );
};

export default Explanation;

const Contianer = styled.View`
  height: 135px;
  width: 80%;
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  box-shadow: 1px 1px 10px #cbcbcb75;
  border-radius: 10px;
  box-sizing: border-box;
  justify-content: center;
`;

const ExplainText = styled.Text`
  font-size: 20px;
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  font-family: ${(props: IContainerProps) => props.theme.font.thinFont};
`;
