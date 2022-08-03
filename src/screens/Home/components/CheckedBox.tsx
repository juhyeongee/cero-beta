import { View } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import AutoHeightImage from "react-native-auto-height-image/";

interface IContainerProps {
  theme: ITheme;
}

const CheckedBox = () => {
  return (
    <Container>
      <AutoHeightImage
        width={24}
        source={require("@/assets/images/greenCheck.png")}
      />
    </Container>
  );
};

const Container = styled.View`
  width: 20%;
  background-color: ${(props: IContainerProps) => props.theme.color.mildgreen};
  height: 100%;
  padding: 1%;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

export default CheckedBox;
