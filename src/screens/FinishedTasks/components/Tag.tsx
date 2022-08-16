import styled from "styled-components/native";
import { View, Text } from "react-native";
import { ITheme } from "@/types";
import SvgIcon from "@/assets/SvgIcon";
import AutoHeightImage from "react-native-auto-height-image";

interface IContainerProps {
  theme: ITheme;
}
interface IProps {
  type: string;
}
const Tag = ({ type }: IProps) => {
  return (
    <View>
      {type === "photo" && (
        <AutoHeightImage
          width={60}
          source={require("@assets/images/textMissionIcon.png")}
        />
      )}
      {type === "text" && (
        <AutoHeightImage
          width={60}
          source={require("@assets/images/file.png")}
        />
      )}
      {type === "both" && (
        <View style={{ flexDirection: "row" }}>
          <AutoHeightImage
            width={60}
            source={require("@assets/images/textMissionIcon.png")}
          />
          <AutoHeightImage
            width={60}
            source={require("@assets/images/textMissionIcon.png")}
          />
        </View>
      )}
    </View>
  );
};

export default Tag;
