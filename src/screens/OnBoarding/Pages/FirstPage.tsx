import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../styled";
import SvgIcon from "@assets/SvgIcon";
import Explanation from "../components/Explanation";

interface IContainerProps {
  theme: ITheme;
}

const FirstPage = () => {
  return (
    <Container>
      <SvgIcon name="bookLines" style={{ position: "relative", top: 100 }} />
      <SvgIcon name="searchHeart" style={{ position: "relative", right: 60 }} />
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: 100,
          width: "100%",
        }}
      >
        <Explanation text="좋아요! 그럼 지금부터 김효준짱짱짱 님의 마음을 알아보기 위한 질문을 드릴게요." />
      </View>
    </Container>
  );
};

export default FirstPage;

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
`;
