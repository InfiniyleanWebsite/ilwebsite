import React, { useState } from "react";
import Image from "next/image";
const std = [" 11 to 12 +", "9 to 10", " 4 to 8 ", " 1 to 3 "];
import items from "@/utils/infoSecSection";
export const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTab = (tab, index) => {
    const multiplier = window.innerWidth <= 640 ? 100 : 148; // 640px as a common breakpoint for small screens
    setLeft(index * multiplier);

    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div>
      <div
        className="rounded-2xl    bg-gray-200 text-black  "
        style={{ height: 34 }}
      >
        <div className="h-full mt-1 gap-12 max-md:gap-1   flex items-center relative">
          {data.map((tab, index) => (
            <div
              key={index}
              className={` h-8 max-md:h-9 max-md:px-1   py-1 max-md:py-2 w-[100px]    max-md:w-[70px] text-sm text-center cursor-pointer
              ${
                selectedTab == index ? " bg-yellow-300 " : ""
              } bg-white rounded-2xl  mt-2 justify-center items-center 
            `}
              onClick={() => activeTab(tab, index)}
              style={{ zIndex: selectedTab === index ? 1 : 0 }}
            >
              {tab}
            </div>
          ))}
          <span
            className=" h-8  bg-yellow-300 w-[100px] max-md:w-[5px] text-black  absolute transition-all cubic-bezier[0.88, -0.35, 0.565, 1.35] duration-500 rounded-2xl mt-2"
            style={{ left }}
          >
            {/* // {data[left / 100]} */}
          </span>
        </div>
      </div>
    </div>
  );
};

function SecondSecCard(props) {
  const [textColor, settextColor] = useState(true);
  const handleTextColor = () => {
    settextColor(!textColor);
  };
  return (
    <div
      onMouseEnter={handleTextColor}
      onMouseOut={handleTextColor}
      onMouseOver={handleTextColor}
      className=" flex flex-col   hover:bg-blue-500 bg-blue-200 max-md:px-10 max-md:py-1  px-16 py-20  w-1/3 rounded-2xl"
    >
      <Image
        src={props.data.svg}
        className=""
        width={96.74}
        height={96.74}
        alt="secondSec.svg"
        color="white"
      />
      <div className="">
        <h1
          className={`${
            textColor ? " text-black" : "text-white"
          } text-xl   mt-4 font-medium`}
        >
          {props.data.name}
        </h1>
        <div
          className={`${
            textColor ? " text-black" : "text-white"
          }   text-sm mb-5`}
        >
          {props.data.subItemAbout}
        </div>
        <div className={`${textColor ? " text-black" : "text-white"} text-lg `}>
          {props.data.examTime}
        </div>
      </div>
    </div>
  );
}
function Class11to12() {
  return (
    <div className=" flex flex-col pb-20 justify-start ">
      <div className=" text-4xl text-black mb-6 font-semibold ">
        competitive exam
      </div>
      <div className=" flex   w-full max-md:w-auto max-md:overflow-hidden no-scrollbar gap-5  ">
        {items[1].subItems[0].lists.map((item, index) => (
          <SecondSecCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
function Class9to10() {
  return (
    <div className=" flex flex-col pb-20 justify-start ">
      <div className=" text-4xl text-black mb-6 font-semibold ">
        competitive exam
      </div>
      <div className=" flex flex-col gap-8">
        <div className=" flex  w-full gap-5  ">
          {items[1].subItems[0].lists.map((item, index) => (
            <SecondSecCard data={item} key={index} />
          ))}
        </div>
        <div className=" font-bold text-4xl text-black">
          tutions{" "}
          <span className=" font-normal opacity-50 text-2xl">(cbse)</span>
        </div>
        <div className=" flex gap-6">
          <div className=" flex p-7 bg-blue-200 gap-7 justify-evenly w-full   items-center  rounded-[2rem] border-black">
            <Image src="./math1.svg" height={90} width={90} alt="math" />
            <div className=" font-semibold text-2xl text-black ">Maths</div>
          </div>
          <div className=" flex p-7 bg-blue-200 gap-7 justify-evenly w-full   items-center  rounded-[2rem] border-black">
            <Image src="./science1.svg" height={70} width={70} alt="science" />
            <div className=" font-semibold text-2xl text-black ">Science</div>
          </div>
          <div className=" flex p-7 bg-blue-200 gap-7 justify-evenly w-full   items-center  rounded-[2rem] border-black">
            <Image src="./english1.svg" height={80} width={80} alt="english" />
            <div className=" font-semibold text-2xl text-black ">English</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Class4to8() {
  return (
    <div className=" flex flex-col pb-20 justify-start ">
      <div className=" text-4xl text-black mb-6 font-semibold ">
        competitive exam
      </div>
      <div className=" flex flex-col gap-8">
        <div className=" flex  w-full gap-5  ">
          <div className=" flex flex-col p-16  gap-3 hover:bg-blue-500  items-center bg-blue-200 rounded-3xl border-2  text-black w-full ">
            <Image src="./iit.svg" width={100} height={100} alt="found" />
            <div className=" text-2xl font-bold">Foundation</div>
            <div className=" opacity-50 text-lg">engineering+medical</div>
            <div className=" text-blue-500 text-xl">class 8 only</div>
          </div>
        </div>
        <div className=" font-bold text-4xl text-black">
          tutions{" "}
          <span className=" font-normal opacity-50 text-2xl">(cbse)</span>
        </div>
        <div className=" flex gap-6">
          <div className=" flex p-7 hover:bg-blue-500 bg-blue-200 gap-7 justify-evenly w-full   items-center  rounded-[2rem] border-black">
            <Image src="./math1.svg" height={90} width={90} alt="math" />
            <div className=" font-semibold text-2xl text-black ">Maths</div>
          </div>
          <div className=" flex p-7 bg-blue-200 hover:bg-blue-500 gap-7 justify-evenly w-full   items-center  rounded-[2rem] border-black">
            <Image src="./science1.svg" height={70} width={70} alt="science" />
            <div className=" font-semibold text-2xl text-black ">Science</div>
          </div>
          <div className=" flex p-7 bg-blue-200 hover:bg-blue-500 gap-7 justify-evenly w-full   items-center  rounded-[2rem] border-black">
            <Image src="./english1.svg" height={80} width={80} alt="english" />
            <div className=" font-semibold text-2xl text-black ">English</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Class1to3() {
  return (
    <div className=" flex flex-col pb-20 justify-start ">
      <div className=" text-4xl text-black mb-6 font-semibold ">
        program for kids
      </div>
      <div className=" flex flex-col gap-8">
        <div className=" flex  w-full gap-5  ">
          <div className=" flex flex-col p-20  gap-3  items-center bg-blue-200 rounded-3xl border-2  text-black w-full ">
            <Image src="./iit.svg" width={100} height={100} alt="found" />
            <div className=" text-2xl font-semibold">Headstart Program</div>
            <div className=" opacity-50">english +math +science +coding</div>
          </div>
        </div>
        <div className=" font-semibold text-4xl text-black">
          infinity futurz
        </div>
        <div className=" flex gap-6">
          <div className=" flex p-7 bg-blue-200 gap-7 justify-evenly w-full   items-center  rounded-[2rem] border-black">
            <Image src="./math1.svg" height={90} width={90} alt="math" />
            <div className=" flex flex-col">
              <div className=" font-semibold text-2xl text-black ">
                Young Product
              </div>
              <div className=" font-semibold text-2xl text-black ">
                Designer's Program
              </div>
            </div>
          </div>
          <div className=" flex p-7 bg-blue-200 gap-7 justify-evenly w-full   items-center  rounded-[2rem] border-black">
            <Image src="./hots1.svg" height={70} width={70} alt="science" />
            <div className=" flex flex-col">
              <div className=" font-semibold text-2xl text-black ">
                High Order thinking
              </div>
              <div className=" font-semibold text-2xl text-black ">Skills</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function SecondSection() {
  const [endpoint, setEndpoint] = useState("day");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tab, index) => {
    setActiveTab(index);
  };
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="items-center min-h-screen  bg-gray-200">
      <div className="w-[70%] max-w-[1000px] max-md:w-[100%] mx-auto">
        <div className="flex justify-evenly p-6 text-center max-md:hidden font-bold text-4xl gap-4 relative bottom-[4.5rem] mx-auto flex-row items-center h-36 bg-yellow-300 px-4 rounded-2xl">
          <div className="text-black flex flex-col border-black">
            <div className="text-center font-normal text-2xl text-[#080E14]">
              Learners
            </div>
            <div className="font-bold text-center">50k+</div>
          </div>
          <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
          <div className="text-black items-center flex text-center flex-col border-black">
            <div className="text-center font-normal text-2xl text-[#080E14]">
              Cities
            </div>
            <div className="font-bold text-center">60k+</div>
          </div>
          <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
          <div className="text-black  items-center text-center flex flex-col">
            <div className="text-center font-normal text-2xl text-[#080E14] flex-grow">
              Classes Conducted
            </div>
            <div className="font-bold text-center">9200+</div>
          </div>
        </div>

        <h1 className=" text-black mx-auto max-md:mx-3 max-md:py-5 max-md:w-full max-md:text-start tracking-wide max-md:tracking-normal  text-center text-5xl max-md:text-3xl font-black">
          select your learning <span className=" text-blue-500 "> goal </span>
          grade-wise
        </h1>
        <div className=" h-full flex justify-center mb-9   items-center">
          {/* {std.map((item) => (
            <button className=" bg-white rounded-3xl px-4 py-2 mx-3 text-black hover:bg-yellow-300">
              {item}
            </button>
          ))} */}
          <SwitchTabs data={std} onTabChange={handleTabChange} />
        </div>
        {/* {"empty"} */}
        {activeTab === 0 && <Class11to12 />}
        {activeTab === 1 && <Class9to10 />}
        {activeTab === 2 && <Class4to8 />}
        {activeTab === 3 && <Class1to3 />}
        {/* <Class11to12 /> */}
      </div>
    </div>
  );
}

export default SecondSection;
