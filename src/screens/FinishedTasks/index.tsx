import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import AutoHeightImage from "react-native-auto-height-image";
import Card from "./components/Card";
interface IContainerProps {
  theme?: ITheme;
}

const FinishedTasks = () => {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <AutoHeightImage
          width={32}
          source={require("@assets/images/greenFlag.png")}
        />
        <Title>지난 할 일 </Title>
        <Subtitle>지금까지의 여정을 살펴보세요.</Subtitle>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
        {/* TODO: ScrollView => Flatlist로 변환 */}
      </SafeAreaView>
    </Container>
  );
};

export default FinishedTasks;

const Container = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n0};
  padding: 8%;
  padding-top: 30%;
  padding-bottom: 0%;
  flex: 1;
  display: flex;
`;

const Title = styled.Text`
  font-family: ${(props: IContainerProps) =>
    props.theme && props.theme.font.thickFont};
  font-size: 20;
  margin-bottom: 8px;
  margin-top: 8px;
`;

const Subtitle = styled.Text`
  font-family: ${(props: IContainerProps) =>
    props.theme && props.theme.font.mainFont};
  font-size: 16px;
  margin-bottom: 8px;
`;
