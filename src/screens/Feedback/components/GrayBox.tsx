import { ITheme } from "@/types";
import styled from "styled-components/native";
import { View } from "react-native";

interface IContainerProps {
  theme: ITheme;
}

interface IGrayBoxProps {
  textArray: string[];
}

export const GrayBox = ({ textArray }: IGrayBoxProps) => {
  return (
    <Container>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
      >
        <ImogiText>{textArray[0]}</ImogiText>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <GrayBoxInnerTitle>{textArray[1]}</GrayBoxInnerTitle>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        <GrayBoxInnerText>{textArray[2]}</GrayBoxInnerText>
        <GrayBoxInnerText> {textArray[3]}</GrayBoxInnerText>
      </View>
    </Container>
  );
};

const Container = styled.Pressable`
  padding: 3% 3%;
  height: 120px;
  background-color: ${(props: IContainerProps) => props.theme.color.n200};
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  width: 46%;
`;

const ImogiText = styled.Text`
  font-size: 20px;
`;

const GrayBoxInnerTitle = styled.Text``;

const GrayBoxInnerText = styled.Text`
  font-size: 9px;
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;
