import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

interface CardProps {
  onPress: () => void;
  // imageSource: ImageProps["source"];
}

const EmptyCard = ({ onPress }: CardProps) => {
  const photo = require("@assets/images/exampleImage.png");
  return (
    <Container onPress={onPress}>
      <PlusText>+</PlusText>
      <MainText></MainText>
      <MainText>더 많은 할 일들을 진행해 봐요.</MainText>
    </Container>
  );
};

export default EmptyCard;

const Container = styled.Pressable`
  border: 1px dotted ${(props: IContainerProps) => props.theme.color.n700};
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
  height: 180px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.Text`
  font-size: 18px;
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;

const PlusText = styled.Text`
  font-size: 32px;
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;
