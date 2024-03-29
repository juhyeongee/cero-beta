import { View, Text, Pressable, Platform } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import { BigPrimaryBtn } from "@/components";
import SvgIcon from "@/assets/SvgIcon";
import Theme from "@/constants/Theme";
import missions from "@constants/missions";
import { observer } from "mobx-react";
import userInfoStore from "@/store/UserInfoStore";
import { heightRatio } from "@/utils";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

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
    nickname,
    todoNum,

    versionNum,
    plusVersionNum,
    completeMissionDatesArray,
  } = userInfoStore;
  const version = `version${versionNum}`;
  const todoObject = missions[todoNum];
  const todo = todoObject[version].subtitle;
  const todayDate = dayjs().format("YYMMDD");
  console.log("TODO에 있는 todayDate :", todayDate);

  const lastCompletedMissionDate =
    completeMissionDatesArray[completeMissionDatesArray.length - 1];
  console.log(lastCompletedMissionDate);
  const [todayMissionComplete, setTodayMissionComplete] = useState(
    todayDate === lastCompletedMissionDate
  );
  const updateCompletedVersionFromAsyncStorage = () => {
    AsyncStorage.getItem(`mission${todoNum - 1}Result`).then((res) => {
      if (res === null) {
        return null;
      } else {
        const parsedCompletedObject = JSON.parse(res);
        const completedVersionFromAsyncStorage =
          parsedCompletedObject["versionNum"];
        const completedTodo =
          missions[todoNum - 1][`version${completedVersionFromAsyncStorage}`]
            .subtitle;
        if (completedTodo !== undefined) {
          setCompletedTodoFromAsyncStorage(completedTodo);
          userInfoStore.updateCompleteMissionName(completedTodo);
        }
      }
    });
  };

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

  useEffect(() => {
    setTodayMissionComplete(todayDate === lastCompletedMissionDate);
  }, [todayDate]);

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
