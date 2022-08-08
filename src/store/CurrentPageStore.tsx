import { action, observable, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePersistable, stopPersisting } from "mobx-persist-store";

class CurrentPageStore {
  currentScreen = "IntroNav";

  constructor() {
    makeAutoObservable(
      this,
      {
        currentScreen: observable,
      },
      { autoBind: true }
    );
    makePersistable(this, {
      name: "CurrentPagePersistStore",
      properties: ["currentScreen"],
      storage: AsyncStorage,
    });

    // TODO: 메모리 누수를 위한 stopPersisting 요소 사용 방법 습득 후 적용
  }

  updateScreen(newCurrentScreen: string) {
    this.currentScreen = newCurrentScreen;
  }
}

const currentPageStore = new CurrentPageStore();

export default currentPageStore;
