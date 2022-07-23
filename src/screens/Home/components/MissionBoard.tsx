import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import { BigPrimaryBtn } from "@/components";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@/constants/Theme";
import NumberBox from "./NumberBox";
import CheckedBox from "./CheckedBox";
import AutoHeightImage from "react-native-auto-height-image";

interface IContainerProps {
  theme: ITheme;
}

const MissionBoard = () => {
  return (
    <Container>
      <View style={{ height: "33%", width: "100%", flexDirection: "row" }}>
        <CheckedBox />
        <NumberBox text="2" />
        <NumberBox text="3" />
        <NumberBox text="4" />
        <NumberBox text="5" />
      </View>
      <View style={{ height: "33%", width: "100%", flexDirection: "row" }}>
        <NumberBox text="6" />
        <NumberBox text="7" />
        <NumberBox text="8" />
        <NumberBox text="9" />
        <NumberBox text="10" />
      </View>
      <View style={{ height: "33%", width: "100%", flexDirection: "row" }}>
        <NumberBox text="11" />
        <NumberBox text="12" />
        <NumberBox text="13" />
        <NumberBox text="14" />
        <NumberBox
          icon={
            <AutoHeightImage
              width={24}
              source={require("@assets/images/flowerIcon.png")}
            />
          }
        />
      </View>
    </Container>
  );
};

export default MissionBoard;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n0};
`;
