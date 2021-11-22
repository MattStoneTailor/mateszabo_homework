import Actions from "./actions";
import { defaultUserData } from "../types/UserDataDTO";

const defaultState = {
  userData: defaultUserData,
  isLoading: false,
};

function setUserData(state, action) {
  const { userData } = action;

  return {
    ...state,
    userData,
  };
}

function setLoading(state, action) {
  const { isLoading } = action;

  return {
    ...state,
    isLoading,
  };
}

export default function (state = { ...defaultState }, action) {
  switch (action.type) {
    case Actions.SET_LOADING:
      return setLoading(state, action);
    case Actions.SET_USER_DATA:
      return setUserData(state, action);
    default:
      return state;
  }
}
