import { Pressable } from "react-native";
import { EndingResultText } from "@constants/properties";
import SvgIcon from "@/assets/SvgIcon";
import {
  TitleText,
  MainText,
  BtnContainer,
  BtnText,
} from "../components/Styled";
import userInfoStore from "@/store/UserInfoStore";

interface IFirstPageProps {
  goNextPage: () => void;
}
const SecondPage = ({ goNextPage }: IFirstPageProps) => {
  const { nickname } = userInfoStore;

  return (
    <>
      <TitleText>
        {EndingResultText["secondPageTitle"].replace("유저", nickname)}
      </TitleText>
      <MainText>
        {EndingResultText["secondPageSub"].replace("유저", nickname)}
      </MainText>
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

export default SecondPage;
