import styled from "styled-components/native";
import { ITheme } from "@/../styled";

interface IContainerProps {
  theme?: ITheme;
  color?: string;
  marginTop?: string;
}

export const MainText = styled.Text`
  color: ${(props: IContainerProps) =>
    props.color ? props.color : props.theme?.color.n900};
  font-family: ${(props: IContainerProps) => props.theme?.font.thickFont};
  margin-bottom: 26px;
  font-size: 20px;
`;

export const SubText = styled.Text`
  color: ${(props: IContainerProps) =>
    props.color ? props.color : props.theme?.color.n900};
  font-family: ${(props: IContainerProps) => props.theme?.font.mainFont};
  margin-bottom: 10px;
  font-size: 14px;
`;
