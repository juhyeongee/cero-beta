import { Pressable, Platform } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";

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
  const Container = styled.Pressable`
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
    font-family: ${(props: StyledProps) =>
      Platform.OS === "ios"
        ? props.theme.font.mainFont
        : props.theme.font.androidFont};
    font-size: 16px;
    color: ${(props: StyledProps) =>
      checked ? props.theme.color.n100 : props.theme.color.n900};
  `;

  return (
    <Container checked={checked} onPress={onPress}>
      <BtnText checked={checked}>{text}</BtnText>
    </Container>
  );
};

export default MultiChoiceBtn;
