import { action, observable, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePersistable, stopPersisting } from "mobx-persist-store";

class UserInfoStore {
  todoNum = 1;
  versionNum = 1;
  nickname = "유저";
  birthday = "알려주세요!";
  gender = "미정";
  age = 0;
  FIRST_DEPRESSION_SCORE = 0;
  depressionState = "";

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
}

const userInfoStore = new UserInfoStore();

export default userInfoStore;
