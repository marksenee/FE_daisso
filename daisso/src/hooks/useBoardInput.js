import React, { useState } from "react";

const useBoardInput = (initialState) => {
  // console.log("ddd", initialState);
  const [input, setInput] = useState(initialState);

  const handler = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };
  return [input, setInput, handler];
};

export default useBoardInput;
