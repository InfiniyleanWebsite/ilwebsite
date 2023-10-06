import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode, storePhoneNumber } from "@/store/mobVeriSlice";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import OtpComponent from "./otpComponent";
import Tick from "./tick";

function MobileVerification() {
  const [number, setNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  const dispatch = useDispatch();

  const handleToggleOverlay = () => {
    dispatch(showOverlayMode(!showOverlay));
  };

  const phoneNumberHandler = () => {
    dispatch(storePhoneNumber(number));
    setOtpSent(true);
  };

  const isNumberValid = number.length === 10 && /^\d+$/.test(number);

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setNumber(value);
    }
  };

  if (otpSent) {
    return <OtpComponent onClose={() => setOtpSent(false)} />;
  }

  return (
    <div
      className={`fixed inset-0 ${
        showOverlay ? "block" : "hidden"
      } bg-black bg-opacity-50 flex items-center justify-center`}
    >
      <div className="bg-white gap-10 flex p-8 rounded justify-evenly relative">
        <Image
          src="./login/mobVer/mobVer1.svg"
          height={400}
          width={400}
          alt="mob-ver-1"
        />
        <div className="flex flex-col justify-evenly text-black">
          <div className=" flex flex-col gap-3">
            <div>
              <h2 className="text-2xl font-extrabold mb-2">
                drop your number, we've{" "}
              </h2>
              <h2 className="text-2xl font-extrabold mb-4">got the rest</h2>
            </div>
            <div>
              <div className=" opacity-50 text-sm mb-2">
                enter your mobile number
              </div>
              <div className="flex items-center border-2 rounded-xl w-80">
                <select
                  defaultValue="+91"
                  className="appearance-none bg-transparent border-r-2 w-1/6  pl-4 focus:outline-none"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  className="appearance-none  border-l-0 flex-grow p-2 focus:outline-none"
                  placeholder="Your number..."
                  value={number}
                  onChange={handleNumberChange}
                />
              </div>
            </div>
          </div>
          <button
            className={`mt-4 p-2 rounded ${
              isNumberValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300"
            } text-white`}
            disabled={!isNumberValid}
            onClick={phoneNumberHandler}
          >
            Send OTP <span>&#8599;</span>
          </button>
        </div>
        <button
          onClick={handleToggleOverlay}
          className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full"
        >
          <IoClose size={24} color="black" />
        </button>
      </div>
    </div>
  );
}

export default MobileVerification;
