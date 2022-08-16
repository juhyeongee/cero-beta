import { View, Pressable } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
  checked: boolean;
}

interface Props {
  clickedBtnNumber: number;
  number: number;
  content: string;
  onPress: () => void;
}

export const AnswerBtn = ({
  clickedBtnNumber,
  number,
  content,
  onPress,
}: Props) => {
  return (
    <Container checked={clickedBtnNumber === number} onPress={onPress}>
      <AnswerBtnText checked={clickedBtnNumber === number}>
        {content}
      </AnswerBtnText>
    </Container>
  );
};

const Container = styled.Pressable`
  justify-content: center;
  width: 100%;
  background-color: ${(props: IContainerProps) =>
    props.checked ? props.theme.color.n900 : props.theme.color.n400};
  border-radius: 10px;
  height: 56px;
  padding: 0px 20px;
  margin-bottom: 10px;
`;

const AnswerBtnText = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  font-size: 16px;
  color: ${(props: IContainerProps) =>
    props.checked ? props.theme.color.n100 : props.theme.color.n900};
`;
