import React, { useMemo, useRef, useState } from "react";
import InputMask, { ReactInputMask } from "react-input-mask";
import ConfirmInputStyle from "./style";

interface Iprops {}

const ConfirmInput = (props: Iprops) => {
  const {} = props;
  const refOne = useRef<HTMLInputElement>(null);
  const refTwo = useRef<HTMLInputElement>(null);
  const refThree = useRef<HTMLInputElement>(null);
  const refFour = useRef<HTMLInputElement>(null);
  const refFive = useRef<HTMLInputElement>(null);
  const refSix = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<string[]>(["", "", "", "", "", ""]);

  const refs = useMemo(
    () => [refOne, refTwo, refThree, refFour, refFive, refSix],
    []
  );

  const onInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!value.match(/^(\s*|\d+)$/)) return;
    const allValue = [...state];
    allValue[index] = e.target.value;
    setState(allValue);
    switch (index) {
      case 0:
        if (value.length > 0) {
          refs[1].current?.focus();
        }
        break;
      case 1:
        if (value.length > 0) {
          refs[2].current?.focus();
        } else {
          refs[0].current?.focus();
        }
        break;
      case 2:
        if (value.length > 0) {
          refs[3].current?.focus();
        } else {
          refs[1].current?.focus();
        }
        break;
      case 3:
        if (value.length > 0) {
          refs[4].current?.focus();
        } else {
          refs[2].current?.focus();
        }
        break;
      case 4:
        if (value.length > 0) {
          refs[5].current?.focus();
        } else {
          refs[3].current?.focus();
        }
        break;
      case 5:
        if (value.length > 0) {
          refs[5].current?.blur();
        } else {
          refs[4].current?.focus();
        }
        break;
    }
  };

  const focuseInput = (index: number) => {
    console.log("call focuse");
    if (!refs[index].current) return;
    console.log("is focused", index);
  };

  return (
    <ConfirmInputStyle>
      <div className="bg_cont">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <input
            key={item}
            ref={refs[item]}
            type="text"
            onChange={(e) => onInput(e, item)}
            onFocus={() => focuseInput(item)}
            value={state[item]}
            maxLength={1}
            placeholder="-"
          />
        ))}
      </div>
    </ConfirmInputStyle>
  );
};

export default ConfirmInput;
