import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

export const Container = styled.View`
  color: ${(props: IContainerProps) => props.theme.color.n50};
  flex: 1;
  justify-content: center;
  padding: 8%;
  width: 100%;
  height: 100%;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const PressableIconBox = styled.Pressable`
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: flex-start;
`;

export const MainContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 10%;
`;

export const AgreeText = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  color: ${(props: IContainerProps) => props.theme.color.n800};
  font-size: 16px;
  margin-left: 8%;
  position: relative;
  top: -0.5%;
`;

export const PolicyGrayBar = styled.View`
  position: relative;
  margin-top: 2%;
  margin-bottom: 3%;
  background-color: ${(props: IContainerProps) => props.theme.color.n600};
  width: 100%;
  height: 1px;
`;

export const OnelineContainer = styled.View`
  height: 46px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WhiteSpace = styled.View`
  width: 100%;
  height: 5%;
`;

export const LoginInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n300};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-bottom: 12px;
`;

export const PasswordInput = styled.TextInput`
  font-size: 16px;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n300};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-bottom: 12px;
`;

export const BottomLinePressable = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
export const SignInGrayBar = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n500};
  margin-top: 24px;
  margin-bottom: 12px;
  width: 100%;
  height: 1px;
`;
