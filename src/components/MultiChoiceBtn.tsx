import { Pressable } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";

interface MultiChoiceBtnProps {
  checkedBtnName: string;
  onPress: () => void;
  text: string;
}

interface StyledProps {
  theme: ITheme;
  checked: boolean;
}

const MultiChoiceBtn = ({
  checkedBtnName,
  onPress,
  text,
}: MultiChoiceBtnProps) => {
  const checked = text === checkedBtnName;
  const Container = styled.View`
    justify-content: center;
    width: 100%;
    background-color: ${(props: StyledProps) =>
      checked ? props.theme.color.n900 : props.theme.color.n400};
    border-radius: 10px;
    height: 48px;
    padding: 10px 20px;
    margin-bottom: 10px;
  `;

  const BtnText = styled.Text`
    font-family: ${(props: StyledProps) => props.theme.font.mainFont};
    font-size: 16px;
    color: ${(props: StyledProps) =>
      checked ? props.theme.color.n100 : props.theme.color.n900};
  `;

  return (
    <Pressable onPress={onPress}>
      <Container checked={checked}>
        <BtnText checked={checked}>{text}</BtnText>
      </Container>
    </Pressable>
  );
};

export default MultiChoiceBtn;
