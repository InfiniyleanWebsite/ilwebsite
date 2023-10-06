import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showOverlayMode } from "@/store/mobVeriSlice";
import { storeClass } from "@/store/newUserSlice";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import ChooseCourse from "./chooseCourse";
const std = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "12+",
];
function ChooseClass() {
  const showOverlay = useSelector(
    (state) => state.mobileVerification.showOverlay
  );
  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassClick = (stdClass) => {
    setSelectedClass(stdClass);
    dispatch(storeClass(stdClass));
  };
  const [showCourse, setShowCourse] = useState(false);

  const dispatch = useDispatch();
  // const storeNameHandler = () => {
  //   dispatch(storeClass(name));
  // };
  const handleToggleOverlay = () => {
    dispatch(showOverlayMode(!showOverlay));
  };
  const handleContinue = () => {
    if (selectedClass) {
      setShowCourse(true);
    }
  };
  if (showCourse) {
    console.log("nikla");
    return <ChooseCourse />;
  }

  return (
    <div
      className={`fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center`}
    >
      <div className="bg-white gap-10 flex p-8 rounded-xl justify-evenly relative">
        <Image
          src="./login/newUser/newUser2.svg"
          height={400}
          width={400}
          alt="newUser-ver-1"
        />
        <div className="flex flex-col justify-evenly text-black">
          <div className=" flex flex-col gap-3">
            <div>
              <h2 className="text-2xl font-extrabold mb-2">
                every champion sets a{" "}
              </h2>
              <h2 className="text-2xl font-extrabold mb-4">
                goal. let's define yours
              </h2>
            </div>
            <div>
              <div className=" opacity-50 text-sm ">select class</div>
              <div className="grid grid-cols-5 gap-4 ">
                {std.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-3   cursor-pointer hover:bg-gray-200 ${
                      selectedClass === item ? "bg-blue-500 text-white" : ""
                    }`}
                    onClick={() => handleClassClick(item)}
                  >
                    <span className="mx-auto pl-3">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className={`mt-4 p-2 rounded bg-blue-500 text-white ${
              !selectedClass ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!selectedClass}
            onClick={handleContinue}
          >
            continue <span>&#8599;</span>
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
export default ChooseClass;
