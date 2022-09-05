import { View, Text, Pressable, Platform } from "react-native";
import styled, { css } from "styled-components/native";
import { ITheme } from "@/types";
import { BigPrimaryBtn } from "@/components";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@/constants/Theme";
import missions from "@constants/missions";
import { observer } from "mobx-react";
import userInfoStore from "@/store/UserInfoStore";
import { heightRatio, widthRatio, fontsizeRatio } from "@/utils";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import currentPageStore from "@/store/CurrentPageStore";

interface IContainerProps {
  theme: ITheme;
}

interface Props {
  navigateToTodayMission: () => void;
}

const showToast = () => {
  Toast.show({
    type: "success",
    text1: "오늘의 미션을 이미 완료했어요!",
    text2: "내일 새로운 미션으로 만나요!",
    position: "bottom",
  });
};

const ToDo = ({ navigateToTodayMission }: Props) => {
  const [completedTodoFromAsyncStorage, setCompletedTodoFromAsyncStorage] =
    useState<undefined | string>();
  const {
    todoNum,
    todayDate,
    versionNum,
    plusVersionNum,
    completeMissionDatesArray,
  } = userInfoStore;
  const version = `version${versionNum}`;
  const todoObject = missions[todoNum];
  const todo = todoObject[version].subtitle;

  const lastCompletedMissionDate =
    completeMissionDatesArray[completeMissionDatesArray.length - 1];
  const todayMissionComplete = todayDate === lastCompletedMissionDate;

  const updateCompletedVersionFromAsyncStorage = () => {
    AsyncStorage.getItem(`mission${todoNum - 1}Result`).then((res) => {
      if (res === null) {
        console.log("Home어제자 미션 정보가 없습니다.");
        return null;
      } else {
        const parsedCompletedObject = JSON.parse(res);
        const completedVersionFromAsyncStorage =
          parsedCompletedObject["versionNum"];
        const completedTodo =
          missions[todoNum - 1][`version${completedVersionFromAsyncStorage}`]
            .subtitle;
        if (completedTodo === undefined) {
          console.log("completedTodo is 'undefined'");
        } else {
          setCompletedTodoFromAsyncStorage(completedTodo);
          userInfoStore.updateCompleteMissionName(completedTodo);
        }
      }
    });
  };

  //TODO: 다만, 현재 rerender를 하지 않는한, 홈 화면에서  오늘의 할 일 텍스트가 백지로 나옴; reroad 할 때, 비동기함수라서 업데이트가 느려서 그런건가  싶음

  const rotateVersionNum = () => {
    let length = Object.keys(todoObject).length;
    if (versionNum < length) {
      plusVersionNum();
    } else {
      userInfoStore.resetVersionNum();
    }
  };

  useEffect(() => {
    updateCompletedVersionFromAsyncStorage();
  }, [todoNum]);

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
          {todayMissionComplete ? (
            <></>
          ) : (
            <>
              {todoNum === 14 || todoNum === 1 ? (
                <></>
              ) : (
                <Pressable
                  style={{
                    flexDirection: "row",
                    justifyContent:
                      Platform.OS === "ios" ? "flex-start" : "flex-end",
                  }}
                  onPress={rotateVersionNum}
                >
                  <GrayText>
                    변경하기 ({versionNum}/{Object.keys(todoObject).length})
                  </GrayText>
                  <SvgIcon name="refresh" />
                </Pressable>
              )}
            </>
          )}
        </View>
      </View>
      <ToDoGrayBox>
        <Text
          style={{
            fontFamily: Theme.font.mainFont,
            color: Theme.color.n900,
          }}
        >
          {todayMissionComplete ? completedTodoFromAsyncStorage : todo}
        </Text>
      </ToDoGrayBox>
      <View
        style={{
          width: "100%",
          backgroundColor: Theme.color.n50,
          height: "30%",
        }}
      >
        {todayMissionComplete ? (
          <CompleteBtn onPress={showToast}>
            <CompleteBtnText>오늘의 할 일 완료!</CompleteBtnText>
          </CompleteBtn>
        ) : (
          <BigPrimaryBtn text="물 주기" onPress={navigateToTodayMission} />
        )}
      </View>
    </Container>
  );
};

export default observer(ToDo);

const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
  padding: ${Platform.OS === "ios" ? "8%" : `${heightRatio(32)}px`};
  padding-top: ${Platform.OS === "ios" ? "4%" : "0px"};
`;

const GrayText = styled.Text`
  font-size: 12px;
  margin-right: 4px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;

const ToDoGrayBox = styled.View`
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n100};
  height: ${Platform.OS === "ios" ? "40%" : "46%"};
  padding: ${Platform.OS === "ios" ? "5%" : "2%"};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: ${Platform.OS === "ios" ? "5%" : `${heightRatio(10)}px`};
`;

const CompleteBtnText = styled.Text`
  font-size: 16px;
  color: ${(props: IContainerProps) => props.theme.color.n900};
`;
const CompleteBtn = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n600};
  border-radius: 10px;
  height: 48px;
  padding: ${Platform.OS === "ios" ? "10px" : "0px"} 20px;
`;
