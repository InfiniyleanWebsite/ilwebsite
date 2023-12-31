import React, { useState } from "react";
import Image from "next/image";
import WordSlider from "./wordSlider";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storePhoneNumber } from "@/store/mobVeriSlice";
function Trial() {
  return (
    <div className="flex mt-10 md:hidden justify-evenly text-[#007BFF] p-6  text-center  font-bold text-base gap-3 mx-auto flex-row items-center h-20 bg-white px-4 rounded-2xl">
      <div className=" flex flex-col border-black ">
        <div className="text-center font-normal text-sm ">learners</div>
        <div className="font-bold text-center">50k+</div>
      </div>
      <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
      <div className=" items-center flex text-center flex-col border-black">
        <div className="text-center font-normal text-sm ">cities</div>
        <div className="font-bold text-center">60k+</div>
      </div>
      <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
      <div className="  items-center text-center flex flex-col">
        <div className="text-center flex font-normal text-sm  flex-grow">
          <div className=" mr-1">classes</div> conducted
        </div>
        <div className="font-bold text-center">9200+</div>
      </div>
    </div>
  );
}
function FirstSection() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    // Only update the state if the entered value is a digit and the length is <= 10
    if (/^\d+$/.test(e.target.value) && e.target.value.length <= 10) {
      setQuery(e.target.value);
    }
  };

  const handleToggleOverlay1 = () => {
    // Check if the number is 10 digits
    if (query.length === 10) {
      // Here, you'd typically dispatch an action to update the state in Redux
      dispatch(storePhoneNumber(query));
      dispatch(showOverlayMode(!showOverlay));
      // Any other logic you want to execute...
    } else {
      console.error("Phone number should be 10 digits!");
    }
  };
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );

  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Handler function to toggle the overlay
  const handleToggleOverlay = () => {
    // Assuming you want to toggle the state
    dispatch(showOverlayMode(!showOverlay));
  };
  // console.log(showOverlay);
  return (
    <div className="flex pb-32 max-md:pb-8 max-md:flex-col max-md:h-fit  w-full md:min-h-screen items-center justify-around bg-[#007BFF] ">
      <div className="flex flex-col ">
        <div className="  max-md:pt-6 max-md:pl-3 text-7xl max-md:text-5xl font-bold">
          power up your
        </div>
        <WordSlider />

        <div className="  max-md:pl-3 max-md:text-5xl text-7xl font-bold">
          journey with
        </div>
        <div className="  max-md:pl-3 max-md:text-5xl text-7xl font-bold">
          infinity learn
        </div>
        <div className=" mt-12 md:hidden  ">
          <Image
            className="my-image"
            src="./homepage/firstSection/imageRes.svg"
            width={450}
            height={300}
            alt="firstSectionRes"
          />
        </div>

        <div className="flex h-4/5 max-md:px-5   md:h-3/5 mt-9 mb-5">
          <input
            className="rounded-l-lg max-md:h-12 max-md:placeholder:text-sm max-md:rounded-l-3xl max-md:bg-white max-md:placeholder-gray-500 bg-blue-500 text-black w-full sm:w-1/2 md:w-96 h-10 md:h-12 pl-4 md:pl-6 text-base md:text-lg border-2  placeholder-white"
            type="text"
            placeholder="enter your mobile number"
            value={query}
            onChange={handleInputChange}
          />

          <button
            onClick={handleToggleOverlay1}
            className="md:w-32 max-md:w-40 max-md:text-black max-md:rounded-r-3xl  rounded-r-2xl bg-yellow-500"
          >
            join for free
          </button>
        </div>
        <div className=" max-md:text-sm max-md:px-6">
          {" "}
          we will send an otp for verification
        </div>
      </div>
      <Trial />
      <div className=" mt-5 max-md:hidden">
        <Image
          className="my-image"
          src="/firstSection.svg"
          width={500}
          height={500}
          alt="firstSection"
        />
      </div>
    </div>
  );
}
export default FirstSection;
