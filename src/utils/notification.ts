import * as Notifications from "expo-notifications";
import { notificationTexts } from "@/constants/properties";
import userInfoStore from "@/store/UserInfoStore";

//TODO: nickname 적용
const { nickname } = userInfoStore;

export function exampleAlarm() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: notificationTexts.missionAfterNoti[
        getRandomInt(0, 5)
      ].title.replace("유저", nickname),
      body: notificationTexts.missionAfterNoti[getRandomInt(0, 5)].body.replace(
        "유저",
        nickname
      ),
      // data: { userName: "주형" },
    },
    trigger: { seconds: 3 },
  });
}
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function scheduleAfterMissionNotiHandler() {
  const trigger = new Date(Date.now() + 24 * 60 * 60 * 1000);

  trigger.setMinutes(0);
  trigger.setSeconds(0);
  trigger.setHours(21);

  Notifications.scheduleNotificationAsync({
    content: {
      title: notificationTexts.missionAfterNoti[
        getRandomInt(0, 5)
      ].title.replace("유저", nickname),
      body: notificationTexts.missionAfterNoti[getRandomInt(0, 5)].body.replace(
        "유저",
        nickname
      ),
      // data: { userName: "주형" },
    },
    trigger,
  });
}

export function scheduledRemindNotiHandler(hour: number, minute: number) {
  Notifications.scheduleNotificationAsync({
    content: {
      title: notificationTexts.missionAfterNoti[
        getRandomInt(0, 2)
      ].title.replace("유저", nickname),
      body: notificationTexts.missionAfterNoti[getRandomInt(0, 2)].body.replace(
        "유저",
        nickname
      ),
    },
    trigger: {
      hour: hour,
      minute: minute,
      repeats: true,
    },
  });
}
