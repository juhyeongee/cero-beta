import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import { BigPrimaryBtn } from "@/components";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@/constants/Theme";
import missions from "@constants/missions";
import { useNavigation } from "@react-navigation/native";
import TodayMission from "@screens/TodayMission";
import { HomeStackScreenProps } from "@/types";
import { observer } from "mobx-react";
import todoNumStore from "@/store/TodoNumStore";

interface IContainerProps {
  theme: ITheme;
}

interface Props {
  navigateToTodayMission: () => void;
}

const ToDo = ({ navigateToTodayMission }: Props) => {
  const [versionNum, setVersionNum] = useState<number>(0);
  const { todoNum } = todoNumStore;

  //TODO: 임시로 정해놓은 미션 번호 상수, 전역으로 미션 날짜 앱로딩때 설정되면 그 값으로 초기화 설정 필요.
  const todayMissionObject = missions[todoNum];
  const version = Object.keys(todayMissionObject)[versionNum];
  const todayMissions = todayMissionObject[version];

  const rotateVersionNum = () => {
    let length = Object.keys(todayMissionObject).length - 1;
    if (versionNum < length) {
      setVersionNum(versionNum + 1);
    } else {
      setVersionNum(0);
    }
  };

  return (
    <Container>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "20%",
        }}
      >
        <GrayText>오늘의 할 일</GrayText>
        <View style={{ flexDirection: "row" }}>
          <GrayText>변경하기 </GrayText>
          <Pressable onPress={rotateVersionNum}>
            <SvgIcon name="refresh" />
          </Pressable>
        </View>
      </View>
      <ToDoGrayBox>
        <Text
          style={{
            fontFamily: Theme.font.mainFont,
            color: Theme.color.n900,
          }}
        >
          {todayMissions.subtitle}
        </Text>
      </ToDoGrayBox>
      <View
        style={{
          width: "100%",
          backgroundColor: Theme.color.n500,
          height: "30%",
        }}
      >
        <BigPrimaryBtn text="물 주기" onPress={navigateToTodayMission} />
      </View>
    </Container>
  );
};

export default observer(ToDo);

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
  padding: 8%;
`;

const GrayText = styled.Text`
  font-size: 12px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;

const ToDoGrayBox = styled.View`
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n500};
  height: 40%;
  padding: 5%;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  margin-bottom: 5%;
`;
