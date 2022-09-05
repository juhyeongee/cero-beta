import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Animated,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";

const FeedBack = () => {
  const [pageNumber, setPageNubmer] = useState(1);

  const goGoodPage = () => {
    setPageNubmer(2);
  };

  const goBadPage = () => {
    setPageNubmer(3);
  };

  const goFeedbackPage = () => {
    setPageNubmer(4);
  };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {pageNumber === 1 && (
          <FirstPage goGoodPage={goGoodPage} goBadPage={goBadPage} />
        )}
        {pageNumber === 2 && <SecondPage goFeedbackPage={goFeedbackPage} />}
        {pageNumber === 3 && <ThirdPage goFeedbackPage={goFeedbackPage} />}
        {pageNumber === 4 && <FourthPage />}
      </SafeAreaView>
    </View>
  );
};

export default FeedBack;
