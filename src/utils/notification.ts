// import {
//   getExpoPushTokenAsync,
//   scheduleNotificationAsync,
//   requestPermissionsAsync,
//   addNotificationReceivedListener,
// } from "expo-notifications";
// import * as Notifications from "expo-notifications";
// import { notificationTexts } from "@/constants/properties";
// import * as Device from "expo-device";
// import { Platform } from "react-native";
// import dayjs from "dayjs";

// export function exampleAlarm() {
//   Notifications.scheduleNotificationAsync({
//     content: {
//       title: notificationTexts.missionAfterNoti[getRandomInt(0, 5)].title,
//       body: notificationTexts.missionAfterNoti[getRandomInt(0, 5)].body,
//       // data: { userName: "주형" },
//     },
//     trigger: { seconds: 3 },
//   });
// }
// function getRandomInt(min: number, max: number) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
// }

// export function scheduleAfterMissionNotiHandler() {
//   const trigger = new Date(Date.now() + 24 * 60 * 60 * 1000);

//   trigger.setMinutes(0);
//   trigger.setSeconds(0);
//   trigger.setHours(21);

//   console.log(trigger);
//   Notifications.scheduleNotificationAsync({
//     content: {
//       title: notificationTexts.missionAfterNoti[getRandomInt(0, 5)].title,
//       body: notificationTexts.missionAfterNoti[getRandomInt(0, 5)].body,
//       // data: { userName: "주형" },
//     },
//     trigger,
//   });
// }

// export function scheduledRemindNotiHandler(hour: number, minute: number) {
//   Notifications.scheduleNotificationAsync({
//     content: {
//       title: notificationTexts.missionAfterNoti[getRandomInt(0, 2)].title,
//       body: notificationTexts.missionAfterNoti[getRandomInt(0, 2)].body,
//     },
//     trigger: {
//       hour: hour,
//       minute: minute,
//       repeats: true,
//     },
//   });
// }
