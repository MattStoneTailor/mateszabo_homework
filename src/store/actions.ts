import { UserDataDTO } from "../types/UserDataDTO";

export const SET_USER_DATA = "SET_USER_DATA";
export const setUserData = (userData: UserDataDTO) => ({
  type: SET_USER_DATA,
  userData,
});

export const SET_LOADING = "SET_LOADING";
export const setLoading = (isLoading: boolean) => ({
  type: SET_LOADING,
  isLoading,
});

export default {
  SET_LOADING,
  setLoading,
  SET_USER_DATA,
  setUserData,
};
