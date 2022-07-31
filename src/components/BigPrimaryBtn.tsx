import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
  textBold?: boolean;
}

interface Props {
  onPress?: () => void;
  text: string;
  textBold?: boolean;
}
export const BigPrimaryBtn = ({ onPress, text, textBold }: Props) => {
  const BigGreenButtonInnerText = styled.Text`
    font-size: 16px;
    color: ${(props: IContainerProps) => props.theme.color.n0};
    font-family: ${(props: IContainerProps) =>
      textBold ? props.theme.font.thickFont : props.theme.font.mainFont};
  `;
  const BigGreenButtonBG = styled.Pressable`
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${(props: IContainerProps) => props.theme.color.primary};
    border-radius: 10px;
    height: 48px;
    padding: 10px 20px;
  `;
  return (
    <BigGreenButtonBG onPress={onPress}>
      <BigGreenButtonInnerText textBold={textBold}>
        {text}
      </BigGreenButtonInnerText>
    </BigGreenButtonBG>
  );
};
