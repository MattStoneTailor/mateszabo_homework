import * as React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerGlobal.css";
import styles from "./DatePicker.scss";

const minimumDatePick = 1000 * 60 * 60 * 24 * 7 * 4 * 12 * 14; // 14 years;
const maximumDatePick = 1000 * 60 * 60 * 24 * 7 * 4 * 12 * 99; // 99 years;
export const maxDate = Date.now() - minimumDatePick;
const minDate = Date.now() - maximumDatePick;

interface DatePickerType {
  onChange: (value) => void;
  value: number;
  label: string;
  name: string;
}
const DatePicker = ({ name, onChange, value, label }: DatePickerType) => {
  return (
    <label className={styles.datePicker} htmlFor={name}>
      <h3>{label}</h3>
      <ReactDatePicker
        inline
        showYearDropdown
        name={name}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText={label}
        title={label}
        selected={value || maxDate}
        onChange={(date) => onChange(new Date(date).getTime())}
        onYearChange={(selectedDate) =>
          onChange(new Date(selectedDate).getTime())
        }
      />
    </label>
  );
};

export default DatePicker;
