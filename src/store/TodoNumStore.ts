import { action, observable, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePersistable, stopPersisting } from "mobx-persist-store";

class TodoNumStore {
  todoNum = 1;
  constructor() {
    makeAutoObservable(
      this,
      {
        addOne: action,
        minusOne: action,
        todoNum: observable,
      },
      { autoBind: true }
    );
    makePersistable(this, {
      name: "MissionNumPersistStore",
      properties: ["todoNum"],
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
}

const todoNumStore = new TodoNumStore();

export default todoNumStore;
