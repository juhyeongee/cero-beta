import { action, observable, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import dayjs from "dayjs";

const date2 = dayjs("2020-04-08 ");

class UserInfoStore {
  todoNum: number = 1;
  versionNum: number = 1;
  nickname: string = "유저";
  birthday: string = "알려주세요!";
  gender: string = "미정";
  age: number = 0;
  FIRST_DEPRESSION_SCORE: number = 0;
  depressionState: string = "";
  completeMissionDatesArray = ["200000"];

  constructor() {
    makeAutoObservable(
      this,
      {
        addOne: action,
        minusOne: action,
        resetVersionNum: action,
        updateBirthday: action,
        todoNum: observable,
        versionNum: observable,
        nickname: observable,
        birthday: observable,
        gender: observable,
        FIRST_DEPRESSION_SCORE: observable,
        depressionState: observable,
        completeMissionDatesArray: observable,
      },
      { autoBind: true }
    );
    makePersistable(this, {
      name: "TodoNumPersistStore",
      properties: [
        "todoNum",
        "versionNum",
        "nickname",
        "birthday",
        "gender",
        "FIRST_DEPRESSION_SCORE",
        "completeMissionDatesArray",
      ],
      storage: AsyncStorage,
    });

    // TODO: 메모리 누수를 위한 stopPersisting 요소 사용 방법 습득 후 적용
  }

  addOne() {
    this.todoNum += 1;
  }
  minusOne() {
    this.todoNum -= 1;
  }
  plusVersionNum() {
    this.versionNum += 1;
  }
  resetVersionNum() {
    this.versionNum = 1;
  }
  updateNickname(newName: string) {
    this.nickname = newName;
  }
  updateBirthday(newBirthday: string) {
    this.birthday = newBirthday;
  }
  updateGender(newGender: string) {
    this.gender = newGender;
  }
  updateAge(age: number) {
    this.age = age;
  }
  updateFirstDepressionScore(score: number) {
    this.FIRST_DEPRESSION_SCORE = score;
  }
  updateFirstDepressionState(state: string) {
    this.depressionState = state;
  }

  updateCompleteMissionDatesArray(date: any) {
    this.completeMissionDatesArray = [...this.completeMissionDatesArray, date];
  }
}

const userInfoStore = new UserInfoStore();

export default userInfoStore;

//미션 완료 () =>
//   Update Last Completed Mission Date
//   plusVersionNum ()
//   if ( Last Completed Mission Date === todayDate)
//   => show "오늘의 미션을 완료했어요"
//
