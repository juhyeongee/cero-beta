import styled from "styled-components/native";
import { Platform } from "react-native";
import { ITheme } from "@/types";

interface StyledProps {
  theme: ITheme;
  center?: boolean;
}

interface INoticeBarProps {
  text1: string;
  text2?: string;
  onPress?: () => void;
  center?: boolean;
}

const NoticeBar = ({ text1, text2, onPress, center }: INoticeBarProps) => {
  return (
    <Container center={center} onPress={onPress}>
      <Notice>{text1}</Notice>
      <Contents>{text2}</Contents>
    </Container>
  );
};

export default NoticeBar;

const Container = styled.Pressable`
  width: 100%;
  background-color: ${(props: StyledProps) => props.theme.color.mildgreen};
  padding: 2% 8%;
  flex-direction: row;
  border-radius: 8px;
  margin: 10px 0px;
  align-items: center;
  justify-content: ${(props: StyledProps) => props.center && "center"};
`;

const Notice = styled.Text`
  font-size: 14px;
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
  color: ${(props: StyledProps) => props.theme.color.primary};
  margin-right: 20px;
`;
const Contents = styled.Text`
  font-size: 12px;
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
  color: ${(props: StyledProps) => props.theme.color.n900};
`;
