import React, { useState } from "react";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    //  phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    // show OTP Filed
    setShowOtpInput(true);
  };

  return (
    <div className="text-center">
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            className="border-2 border-solid border-black rounded-lg p-1 font-semibold "
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button className="bg-gray-300 rounded-lg p-1 m-1" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p className="font-semibold">Enter OTP sent to {phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default PhoneOtpForm;
