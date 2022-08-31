import {
  getExpoPushTokenAsync,
  scheduleNotificationAsync,
  requestPermissionsAsync,
} from "expo-notifications";

import * as Permissions from "expo-permissions";

const registerForPushNotifications = async () => {
  try {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (!permission.granted) return;
    const token = await getExpoPushTokenAsync();
    return token;
  } catch (error) {
    console.log("Error while getting a token", error);
  }
};

const createSender = async () => {
  const sendPushNotification = async (title: string, body: string) => {
    scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
      },
      trigger: {
        seconds: 5,
      },
    });
  };
  return sendPushNotification;
};

export default createSender;
