import { View, Text, Pressable, Platform } from "react-native";
import styled, { css } from "styled-components/native";
import { ITheme } from "@/types";
import { BigPrimaryBtn } from "@/components";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@/constants/Theme";
import missions from "@constants/missions";
import { observer } from "mobx-react";
import todoNumStore from "@/store/TodoNumStore";
import { heightRatio, widthRatio, fontsizeRatio } from "@/utils";

interface IContainerProps {
  theme: ITheme;
}

interface Props {
  navigateToTodayMission: () => void;
}

const ToDo = ({ navigateToTodayMission }: Props) => {
  const { todoNum, versionNum, plusVersionNum, resetVersionNum } = todoNumStore;
  const version = `version${versionNum}`;
  const todoObject = missions[todoNum];
  const todo = todoObject[version].subtitle;
  console.log("todayMissions: ", todo);

  const rotateVersionNum = () => {
    let length = Object.keys(todoObject).length;
    if (versionNum < length) {
      plusVersionNum();
    } else {
      resetVersionNum();
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
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <GrayText>변경하기 </GrayText>
          <Pressable
            style={{
              justifyContent: Platform.OS === "ios" ? "flex-start" : "flex-end",
            }}
            onPress={rotateVersionNum}
          >
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
          {todo}
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
  padding: ${Platform.OS === "ios" ? "8%" : `${heightRatio(32)}px`};
  padding-top: ${Platform.OS === "ios" ? "8%" : "0px"};
`;

const GrayText = styled.Text`
  font-size: 12px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;

const ToDoGrayBox = styled.View`
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n500};
  height: ${Platform.OS === "ios" ? "40%" : "46%"};
  padding: ${Platform.OS === "ios" ? "5%" : "2%"};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: ${Platform.OS === "ios" ? "5%" : `${heightRatio(10)}px`};
`;
