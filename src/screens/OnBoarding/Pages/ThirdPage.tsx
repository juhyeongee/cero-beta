import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../../../styled";
import SvgIcon from "@assets/SvgIcon";
import Explanation from "../components/Explanation";

interface IContainerProps {
  theme: ITheme;
}

const ThirdPage = () => {
  return (
    <Container>
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
        <Explanation text="앞으로 14일간, 저희가 드리는 매일의 작은 할 일을 하며 씨앗을 돌봐주세요." />
      </View>
    </Container>
  );
};

export default ThirdPage;

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
`;
