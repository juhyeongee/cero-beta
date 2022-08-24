import SvgIcon from "@assets/SvgIcon";
import { DescCard, DescContainer, Container } from "../components";
import userInfoStore from "@/store/UserInfoStore";

interface IPageProps {
  swipeNextPage: () => void;
}
const FirstPage = ({ swipeNextPage }: IPageProps) => {
  const { nickname } = userInfoStore;
  const contentsText = `좋아요! 그럼 지금부터 ${nickname}님의 마음을 알아보기 위한 질문을 드릴게요.`;
  return (
    <Container onPress={swipeNextPage}>
      <SvgIcon name="bookLines" style={{ position: "relative", top: 100 }} />
      <SvgIcon name="searchHeart" style={{ position: "relative", right: 60 }} />
      <DescContainer onPress={swipeNextPage}>
        <DescCard text={contentsText} />
      </DescContainer>
    </Container>
  );
};

export default FirstPage;
