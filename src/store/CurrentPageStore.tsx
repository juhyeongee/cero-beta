import { observable, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makePersistable } from "mobx-persist-store";

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
