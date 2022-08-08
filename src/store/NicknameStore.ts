import { action, observable, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePersistable, stopPersisting } from "mobx-persist-store";

class NicknameStore {
  nickname = "초기화이름";

  constructor() {
    makeAutoObservable(
      this,
      {
        nickname: observable,
        updateNickname: action,
      },
      { autoBind: true }
    );
    makePersistable(this, {
      name: "NickNamePersistStore",
      properties: ["nickname"],
      storage: AsyncStorage,
    });
  }
  updateNickname(newname: string) {
    this.nickname = newname;
  }
}

const nicknameStore = new NicknameStore();

export default nicknameStore;
