import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";

interface IContainerProps {
  theme?: ITheme;
}

const FinishedTasks = () => {
  return (
    <Container>
      <Text>피니시드 태스크</Text>
    </Container>
  );
};

export default FinishedTasks;

const Container = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n0};
  justify-content: center;
  align-items: center;
  padding: 32px;
  flex: 1;
  display: flex;
`;
