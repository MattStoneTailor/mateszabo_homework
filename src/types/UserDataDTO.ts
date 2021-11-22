import { maxDate } from "../components/BaseComponents/DatePicker/DatePicker";

export interface UserDataDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: number;
  about: string;
  avatar: {
    large: string;
    small: string;
  };
}

export const defaultUserData: UserDataDTO = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthday: maxDate,
  about: "",
  avatar: {
    large: "",
    small: "",
  },
};
