import { action, observable, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePersistable, stopPersisting } from "mobx-persist-store";

class CurrentPageStore {
  currentScreen = "IntroNav";
  isCurriculumEnd: boolean = false;

  constructor() {
    makeAutoObservable(
      this,
      {
        currentScreen: observable,
        isCurriculumEnd: observable,
      },
      { autoBind: true }
    );
    makePersistable(this, {
      name: "CurrentPagePersistStore",
      properties: ["currentScreen", "isCurriculumEnd"],
      storage: AsyncStorage,
    });

    // TODO: 메모리 누수를 위한 stopPersisting 요소 사용 방법 습득 후 적용
  }

  updateScreen(newCurrentScreen: string) {
    this.currentScreen = newCurrentScreen;
  }
  finishEndingMovie() {
    this.isCurriculumEnd = true;
  }
}

const currentPageStore = new CurrentPageStore();

export default currentPageStore;
