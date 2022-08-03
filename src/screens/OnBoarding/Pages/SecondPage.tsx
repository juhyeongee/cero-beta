import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import Explanation from "../components/Explanation";

interface IContainerProps {
  theme: ITheme;
}

const SecondPage = () => {
  return (
    <Container>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: 100,
          width: "100%",
        }}
      >
        <Explanation text="답변에 따라 김효준짱짱짱 님의 마음을 본 뜬 씨앗이 만들어집니다." />
      </View>
    </Container>
  );
};

export default SecondPage;

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
`;
