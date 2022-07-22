import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import { BigPrimaryBtn } from "@/components";

interface IContainerProps {
  theme: ITheme;
}
interface Props {
  text: string;
}

const NumberBox = ({ text }: Props) => {
  return (
    <Container>
      <GrayText>{text}</GrayText>
    </Container>
  );
};

const GrayText = styled.Text`
  font-size: 16px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  color: ${(props: IContainerProps) => props.theme.color.n600};
`;

const Container = styled.View`
  width: 20%;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
  height: 100%;
  padding: 1%;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

export default NumberBox;
