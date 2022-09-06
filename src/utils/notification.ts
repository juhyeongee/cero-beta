import * as Notifications from "expo-notifications";
import { notificationTexts } from "@/constants/properties";

export function exampleAlarm() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: notificationTexts.missionAfterNoti[getRandomInt(0, 5)].title,
      body: notificationTexts.missionAfterNoti[getRandomInt(0, 5)].body,
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
      title: notificationTexts.missionAfterNoti[getRandomInt(0, 5)].title,
      body: notificationTexts.missionAfterNoti[getRandomInt(0, 5)].body,
      // data: { userName: "주형" },
    },
    trigger,
  });
}

export function scheduledRemindNotiHandler(hour: number, minute: number) {
  Notifications.scheduleNotificationAsync({
    content: {
      title: notificationTexts.missionAfterNoti[getRandomInt(0, 2)].title,
      body: notificationTexts.missionAfterNoti[getRandomInt(0, 2)].body,
    },
    trigger: {
      hour: hour,
      minute: minute,
      repeats: true,
    },
  });
}
