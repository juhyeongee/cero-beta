import styled from "styled-components/native";
import { View, Text } from "react-native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}
interface IProps {
  type: string;
}
const Tag = ({ type }: IProps) => {
  return (
    <View style={{ flex: 1 }}>
      {type === "photo" && (
        <Container>
          <InnerText>사진</InnerText>
        </Container>
      )}
      {type === "text" && (
        <Container>
          <InnerText>텍스트</InnerText>
        </Container>
      )}
      {type === "both" && (
        <View style={{ flex: 1, flexDirection: "row", width: "40%" }}>
          <Container>
            <InnerText>사진</InnerText>
          </Container>
          <Container>
            <InnerText>텍스트</InnerText>
          </Container>
        </View>
      )}
    </View>
  );
};

const Container = styled.View`
  flex-direction: row;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 56px;
  height: 100%;
  border-radius: 10px;
  background-color: ${(props: IContainerProps) => props.theme.color.n600};
  margin-right: 4px; ;
`;
const InnerText = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  color: black;
  font-size: 10px;
`;

export default Tag;
