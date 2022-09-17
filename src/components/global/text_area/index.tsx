import React from "react";
import TextAreaStyle from "./style";

interface Iprops {
  label?: string;
  text: string;
  setText: (state: string) => void;
  placeholder: string;
  options?: {
    hasBorder?: false;
  };
}

const TextArea = (props: Iprops) => {
  const { label, text, setText, placeholder, options } = props;

  return (
    <TextAreaStyle hasBorder={options?.hasBorder === false ? false : true}>
      {label && <label>{label}</label>}
      <textarea
        placeholder={placeholder}
        defaultValue={text}
        onBlur={(e) => setText(e.target.value)}
      />
    </TextAreaStyle>
  );
};

export default TextArea;
