import * as React from "react";
import styles from "./TextBox.scss";
import { useEffect } from "react";
import autosize from "autosize";

interface TextBoxType {
  onChange: (ev) => void;
  name?: string;
  value: string;
  accessKey?: string;
  placeholder?: string;
}

const TextBox = ({ name, onChange, ...props }: TextBoxType) => {
  const textBoxRef = React.createRef();

  useEffect(() => {
    autosize(textBoxRef.current);
  }, []);

  useEffect(() => {
    autosize.update(textBoxRef.current);
  });

  return (
    <>
      <label className={styles.label} htmlFor={name}>
        <textarea
          {...props}
          ref={textBoxRef as React.LegacyRef<HTMLTextAreaElement>}
          name={name}
          onChange={(ev) => onChange(ev.target.value)}
          className={styles.textBox}
        />
      </label>
    </>
  );
};

export default TextBox;
