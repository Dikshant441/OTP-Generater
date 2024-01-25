import React, { useState } from "react";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handlePhoneSubmit}>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="Enter Phone Number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PhoneOtpForm;
