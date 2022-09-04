import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import { ITheme } from "@/types";
import SvgIcon from "@/assets/SvgIcon";
import AutoHeightImage from "react-native-auto-height-image";

interface IProps {
  type?: string;
  photo: number;
}
const Tag = ({ type, photo }: IProps) => {
  return (
    <View>
      {type === "photo" && (
        <Image
          style={{
            width: 60,
            height: 60,
            resizeMode: "cover",
            borderRadius: 10,
            marginLeft: 5,
          }}
          source={photo}
        />
      )}
      {type === "text" && (
        <AutoHeightImage
          width={60}
          source={require("@assets/images/textMissionIcon.png")}
        />
      )}
      {type === "both" && (
        <View style={{ flexDirection: "row" }}>
          <AutoHeightImage
            width={60}
            source={require("@assets/images/textMissionIcon.png")}
          />
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: "cover",
              borderRadius: 10,
              marginLeft: 5,
            }}
            source={photo}
          />
        </View>
      )}
    </View>
  );
};

export default Tag;
