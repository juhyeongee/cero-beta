import { OnBoardingStackScreenProps } from "@/types";
import { useState } from "react";
import SvgIcon from "@/assets/SvgIcon";
import { Container, DescContainer, DescCard } from "./components";
import { introduceMindText } from "@/constants/properties";
import MakeSeedModal from "./components/MakeSeedModal";
import userInfoStore from "@/store/UserInfoStore";

const OnBoarding = ({
  route,
  navigation,
}: OnBoardingStackScreenProps<"OnBoarding">) => {
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const { nickname } = userInfoStore;
  const goNextPage = () => {
    if (page !== 4) {
      setPage(page + 1);
    }
    if (page === 4) {
      setModalVisible(true);
    }
  };

  return (
    <Container onPress={goNextPage}>
      {(page === 1 || page === 2) && (
        <>
          <SvgIcon
            name="bookLines"
            style={{ position: "relative", top: 100 }}
          />
          <SvgIcon
            name="searchHeart"
            style={{ position: "relative", right: 60 }}
          />
        </>
      )}
      {(page === 3 || page === 4) && (
        <SvgIcon
          name="LastPot"
          style={{ position: "absolute", bottom: "25%" }}
        />
      )}
      {page === 4 && (
        <SvgIcon
          name="yellowHighlight"
          style={{ position: "relative", bottom: "3%" }}
        />
      )}

      <DescContainer onPress={goNextPage}>
        <DescCard
          text={introduceMindText[page - 1].replace("유저", nickname)}
        />
      </DescContainer>

      <MakeSeedModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigateToMindText={() => navigation.navigate("MindTest")}
      />
    </Container>
  );
};

export default OnBoarding;
