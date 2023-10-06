import React, { useState } from "react";

const options = [
  "overview",
  "learn with live classes",
  "revise with recordings",
  "practice mock test",
  "study with IL books",
];
const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTab = (tab, index) => {
    setLeft(index * 200);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div>
      <div className=" bg-white text-black  ">
        <div className=" h-full mt-1 flex items-center relative">
          {data.map((tab, index) => (
            <span
              key={index}
              className={`h-full px-1 text-center text-base cursor-pointer   mt-2 justify-center items-center 
              ${selectedTab == index ? " text-black" : ""}  `}
              onClick={() => activeTab(tab, index)}
              style={{ zIndex: selectedTab === index ? 1 : 0, width: 200 }}
            >
              {tab}
            </span>
          ))}
          <span
            className=" border-b-2   border-blue-500 text-black  absolute transition-all cubic-bezier[0.88, -0.35, 0.565, 1.35] duration-500  mt-2"
            style={{ left, height: 30, width: 190 }}
          ></span>
        </div>
      </div>
    </div>
  );
};

function SecondSection() {
  const [selectedOption, setSelectedOption] = useState(0);

  const [endpoint, setEndpoint] = useState("day");
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  const handleClick = (index) => {
    setSelectedOption(index);
  };

  const borderPosition = {
    transform: `translateX(-${(100 / options.length) * selectedOption}%)`,
  };
  return (
    <div className="items-center min-h-screen py-16 bg-white">
      <div className="w-[70%] max-w-[1000px] mx-auto flex flex-col">
        <div className="flex justify-evenly mb-10 space-x-16 w-full h-max relative">
          <SwitchTabs data={options} onTabChange={onTabChange} />
        </div>
      </div>
      <div className="flex justify-evenly  mx-auto ml-9  items-center">
        <div className="flex pl-10 flex-col">
          <div className="text-5xl text-black font-bold">all-rounder </div>
          <div className="text-5xl text-blue-500 mb-5 font-bold">learning!</div>
          <div className="text-base ml-auto gap-5 text-black font-thin flex flex-col">
            <div> 1000+ hrs live classes </div>
            <div> 3000+ hrs recorded content</div>
            <div> AITS - 24 biweekly mock tests</div>
            <div> world class IL books</div>
          </div>
        </div>
        <img
          src="./livecourses/secondSection/image1.svg"
          height={530}
          width={600}
          alt="thirdSection"
          className="my-image"
        />
      </div>
    </div>
  );
}
export default SecondSection;
