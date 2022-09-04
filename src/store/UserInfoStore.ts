import { action, observable, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import dayjs from "dayjs";

class UserInfoStore {
  todoNum: number = 1;
  versionNum: number = 1;
  nickname: string = "유저";
  birthday: string = "";
  gender: string = "미정";
  age: number = 0;
  FIRST_DEPRESSION_SCORE: number = 0;
  LAST_DEPRESSION_SCORE: number = 0;
  firstDepressionState: string = "";
  lastDepressionState: string = "";
  completeMissionDatesArray = ["200000"];
  completeMissionVersionArray = ["version0"];
  completeMissionName = "";
  firstMindTestResultObject: { [key: number]: number } = {};
  todayDate = dayjs().format("YYMMDD");
  lastMindTestResultObject: { [key: number]: number } = {};

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
        age: observable,
        FIRST_DEPRESSION_SCORE: observable,
        LAST_DEPRESSION_SCORE: observable,
        completeMissionVersionArray: observable,
        firstDepressionState: observable,
        lastDepressionState: observable,
        completeMissionDatesArray: observable,
        completeMissionName: observable,
        firstMindTestResultObject: observable,
        todayDate: observable,
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
        "LAST_DEPRESSION_SCORE",
        "completeMissionDatesArray",
        "completeMissionVersionArray",
        "firstMindTestResultObject",
        "todayDate",
        "firstDepressionState",
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
    this.firstDepressionState = state;
  }
  updateLastDepressionScore(score: number) {
    this.LAST_DEPRESSION_SCORE = score;
  }
  updateLastDepressionState(state: string) {
    this.lastDepressionState = state;
  }
  updateCompleteMissionDatesArray(date: any) {
    this.completeMissionDatesArray = [...this.completeMissionDatesArray, date];
  }
  updateCompleteMissionVersionArray(version: string) {
    this.completeMissionVersionArray = [
      ...this.completeMissionVersionArray,
      version,
    ];
  }
  resetCompleteMissionDatesArray() {
    this.completeMissionDatesArray = ["100000"];
  }
  updateCompleteMissionName(name: string) {
    this.completeMissionName = name;
  }
  updateFirstMindTestResultObject(answerNum: number, answer: number) {
    this.firstMindTestResultObject[answerNum] = answer;
  }
  updateLastMindTestResultObject(answerNum: number, answer: number) {
    this.lastMindTestResultObject[answerNum] = answer;
  }
  updateTodayDate() {
    this.todayDate = dayjs().format("YYMMDD");
  }
  updateTempTodayDate(date: string) {
    this.todayDate = date;
  }
}

const userInfoStore = new UserInfoStore();

export default userInfoStore;

//미션 완료 () =>
//   Update Last Completed Mission Date
//   plusVersionNum ()
//   if ( Last Completedf Mission Date === todayDate)
//   => show "오늘의 미션을 완료했어요"
//
