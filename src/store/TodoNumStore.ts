import { action, observable, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePersistable, stopPersisting } from "mobx-persist-store";

class TodoNumStore {
  todoNum = 1;
  versionNum = 1;
  nickname = "유저";
  birthday = "알려주세요!";
  gender = "미정";
  age = 0;

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
      },
      { autoBind: true }
    );
    makePersistable(this, {
      name: "TodoNumPersistStore",
      properties: ["todoNum", "versionNum", "nickname", "birthday", "gender"],
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
}

const todoNumStore = new TodoNumStore();

export default todoNumStore;
