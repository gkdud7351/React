// hook은 파일명이 소문자로 시작, 컴포넌트는 대문자로 시작

import React, { useState } from "react";

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}

export default useToggle;
