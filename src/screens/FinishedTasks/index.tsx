import { View, Text, SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import AutoHeightImage from "react-native-auto-height-image";
import Card from "./components/Card";
import missions from "@constants/missions";

interface IContainerProps {
  theme: ITheme;
}

const FinishedTasks = () => {
  const missionArray = Object.keys(missions);
  console.log(missionArray);
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
          {missionArray.map((index) => (
            <Card key={index} missionNum={index} />
          ))}
        </ScrollView>
        {/* TODO: ScrollView => Flatlist로 변환 */}
      </SafeAreaView>
    </Container>
  );
};

export default FinishedTasks;

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  padding: 8%;
  padding-top: 30%;
  padding-bottom: 0%;
  flex: 1;
  display: flex;
`;

const Title = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.thickFont};
  font-size: 20px;
  margin-bottom: 8px;
  margin-top: 8px;
`;

const Subtitle = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  font-size: 16px;
  margin-bottom: 8px;
`;
