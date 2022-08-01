import { action, observable, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePersistable, stopPersisting } from "mobx-persist-store";

class MissionNumStore {
  missionNum = 1;
  constructor() {
    makeAutoObservable(
      this,
      {
        addOne: action,
        minusOne: action,
        missionNum: observable,
      },
      { autoBind: true }
    );
    makePersistable(this, {
      name: "MissionNumPersistStore",
      properties: ["missionNum"],
      storage: AsyncStorage,
    });
    // TODO: 메모리 누수를 위한 stopPersisting 요소 사용 방법 습득 후 적용
  }

  addOne() {
    this.missionNum += 1;
  }
  minusOne() {
    this.missionNum -= 1;
  }
}

const missionNumStore = new MissionNumStore();

export default missionNumStore;
