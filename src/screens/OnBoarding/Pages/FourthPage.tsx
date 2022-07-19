import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../styled";
import SvgIcon from "@assets/SvgIcon";
import Explanation from "../components/Explanation";

interface IContainerProps {
  theme: ITheme;
}

const FourthPage = () => {
  return (
    <Container>
      <SvgIcon
        name="yellowHighlight"
        style={{ position: "relative", bottom: "3%" }}
      />
      <View style={{ position: "absolute", bottom: "25%" }}>
        <SvgIcon name="LastPot" />
      </View>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: 100,
          width: "100%",
        }}
      >
        <Explanation text="씨앗이 움을 틔울수록, 김효준짱짱짱 님의 마음도 점점 편해지실 거예요." />
      </View>
    </Container>
  );
};

export default FourthPage;

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
`;
