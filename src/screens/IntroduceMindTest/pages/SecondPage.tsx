import { ITheme } from "@/types";
import { DescCard, DescContainer, Container } from "../components";
import userInfoStore from "@/store/UserInfoStore";
interface IPageProps {
  swipeNextPage: () => void;
}
const SecondPage = ({ swipeNextPage }: IPageProps) => {
  const { nickname } = userInfoStore;
  const contentsText = `답변에 따라 ${nickname}님의 마음을 본 뜬 씨앗이 만들어집니다.`;

  return (
    <Container onPress={swipeNextPage}>
      <DescContainer onPress={swipeNextPage}>
        <DescCard text={contentsText} />
      </DescContainer>
    </Container>
  );
};

export default SecondPage;
