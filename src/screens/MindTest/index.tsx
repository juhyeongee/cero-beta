import React from "react";
import Swiper from "react-native-swiper";
import { questionObj } from "@constants/mindtestProperties";
import TestPage from "./pages/TestPage";

const MindTest = () => {
  return (
    <Swiper loop={false} showsPagination={false}>
      {Object.keys(questionObj).map((item, index) => (
        <TestPage
          pageNumber={parseInt(item)}
          key={index}
          submitPress={() => console.log("마인드 테스트 완료")}
        />
      ))}
    </Swiper>
  );
};

export default MindTest;
