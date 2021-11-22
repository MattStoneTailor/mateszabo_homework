import { AbstractDataSync } from "./AbstractDataSync";
import { defaultUserData, UserDataDTO } from "../../types/UserDataDTO";

export class SessionDataSync extends AbstractDataSync {
  retrieveUserData(): Promise<UserDataDTO> {
    return new Promise((resolve) => {
      const sessionData = sessionStorage.getItem(this.userDataKey);
      resolve(sessionData ? JSON.parse(sessionData) : defaultUserData);
    });
  }
  saveUserData(userData: UserDataDTO) {
    sessionStorage.setItem(this.userDataKey, JSON.stringify(userData));
  }
}
