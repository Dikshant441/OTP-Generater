import React, { useEffect, useRef } from "react";
import { useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if(inputRefs.current[0]){
      inputRefs.current[0].focus();
    }
  },[])
  console.log(inputRefs);

  const handleChange = () => {};
  const handleClick = () => {};
  const handleKeyDown = () => {};
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
          key={index}
          type="text"
          ref={(input) => (inputRefs.current[index] = input)}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
            className="border-2 border-solid border-black w-[40px] h-[40px] m-[5px] text-center text-[1.2em] rounded-xl"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
