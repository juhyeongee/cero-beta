import { View, Text, SafeAreaView, ScrollView, Platform } from "react-native";
import styled, { css } from "styled-components/native";
import { ITheme } from "@/types";
import AutoHeightImage from "react-native-auto-height-image";
import Card from "./components/Card";
import missions from "@constants/missions";
import { heightRatio, widthRatio, fontsizeRatio } from "@/utils";
import Header from "./components/Header";

interface IContainerProps {
  theme: ITheme;
}

const FinishedTasks = () => {
  const missionArray = Object.keys(missions);
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 4 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {missionArray.map((index) => (
              <Card key={index} missionNum={index} />
            ))}
          </ScrollView>
        </View>
        {/* TODO: ScrollView => Flatlist로 변환 */}
      </SafeAreaView>
    </Container>
  );
};

export default FinishedTasks;

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n0};
  display: flex;
  flex: 1;
  margin-top: ${heightRatio(8)}px;
  padding-bottom: 0%;
  padding-left: ${widthRatio(32)}px;
  padding-right: ${widthRatio(32)}px;
  padding-top: ${heightRatio(70)}px;
`;
