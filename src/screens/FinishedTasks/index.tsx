import { View, Text, SafeAreaView, ScrollView, Platform } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import Card from "./components/Card";
import missions from "@constants/missions";
import Header from "./components/Header";
import userInfoStore from "@/store/UserInfoStore";
import { observer } from "mobx-react";

interface IContainerProps {
  theme: ITheme;
}

const FinishedTasks = () => {
  const { todoNum } = userInfoStore;
  const missionArray = [...new Array(todoNum - 1)].map((_, i) => i + 1);
  console.log(missionArray);
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

export default observer(FinishedTasks);

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
  flex: 1;
  padding: 16% 8% 0% 8%;
`;
