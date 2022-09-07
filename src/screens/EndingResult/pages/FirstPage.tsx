import { View, Text, Pressable } from "react-native";
import { EndingResultText } from "@constants/properties";
import SvgIcon from "@/assets/SvgIcon";
import {
  TextContainer,
  TitleText,
  MainText,
  BtnContainer,
  BtnText,
} from "../components/Styled";
import userInfoStore from "@/store/UserInfoStore";

interface IFirstPageProps {
  goNextPage: () => void;
}
const FirstPage = ({ goNextPage }: IFirstPageProps) => {
  const { nickname } = userInfoStore;
  return (
    <>
      <TextContainer>
        <TitleText>
          {EndingResultText["firstPageTitle"].replace("유저", nickname)}
        </TitleText>
        <MainText>
          {EndingResultText["firstPageSub"].replace("유저", nickname)}
        </MainText>
      </TextContainer>
      <BtnContainer>
        <Pressable
          onPress={goNextPage}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <BtnText>다음으로 넘어가기</BtnText>
          <SvgIcon name="rightPrimaryTriangle" />
        </Pressable>
      </BtnContainer>
    </>
  );
};

export default FirstPage;
