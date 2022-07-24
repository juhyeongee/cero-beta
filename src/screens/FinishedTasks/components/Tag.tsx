import styled from "styled-components/native";
import { View, Text } from "react-native";
import { ITheme } from "@/../styled";

interface IContainerProps {
  theme: ITheme;
}
interface IProps {
  type: string;
}
const Tag = ({ type }: IProps) => {
  return (
    <Container>
      {type === "photo" && <InnerText>사진</InnerText>}
      {type === "text" && <InnerText>텍스트</InnerText>}
      {type === "both" && (
        <>
          <InnerText>사진</InnerText>
          <InnerText>텍스트</InnerText>
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 56px;
  height: 16px;
  border-radius: 10px;
  background-color: ${(props: IContainerProps) => props.theme.color.n600};
`;
const InnerText = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};

  color: black;
  font-size: 10px;
`;

export default Tag;
