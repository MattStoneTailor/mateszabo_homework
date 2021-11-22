import { defaultUserData, UserDataDTO } from "../../types/UserDataDTO";

export class AbstractDataSync {
  private userData;
  protected userDataKey = "UserData";

  retrieveUserData(): Promise<UserDataDTO> {
    return new Promise((resolve) => resolve(defaultUserData));
  }
  saveUserData(userData) {
    this.userData = userData;
  }
}
