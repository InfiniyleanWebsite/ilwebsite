import React, { useState, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import timeTable from "@/utils/timeTable";
function TimeTableCard(props) {
  return (
    <div className=" flex w-full items-center  py-5 gap-12 justify-evenly ">
      <div className=" flex  flex-col">
        <div className=" text-2xl text-black font-light">{props.data.day}</div>
        <div className=" flex text-lg gap-1  opacity-50">
          <div>{props.data.id} </div>
          <div> {props.month}</div>
        </div>
      </div>
      {props.data.class.map((item, index) => (
        // <div className=" flex ">
        <div className=" flex bg-white p-4 w-1/2 rounded-2xl ">
          <div
            className={` relative ${
              item.subject === "Biology" ? " bg-[#8EC37A]" : ""
            } ${item.subject === "Physics" ? " bg-[#FFAD7A]" : ""}
            ${
              item.subject === "Chemistry" ? " bg-[#D85A6E]" : ""
            }  rounded-r-2xl top-2 right-4 h-16 w-2 `}
          ></div>
          <div className="flex flex-col">
            <div className=" flex justify-start items-center my-2 ">
              <div className=" font-bold w-1/2  text-2xl">{item.subject}</div>

              <div className=" opacity-60 text-center w-1/2">{item.time}</div>
            </div>
            <div className=" flex gap-5 text-lg items-center">
              <div className=" font-thin">chapter {item.chapter}</div>
              <div className="">{item.about}</div>
            </div>
          </div>
        </div>
        // </div>
      ))}
    </div>
  );
}
const DateSelector = ({ onFromChange, onToDate }) => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const formatSelectedDate = (date) => {
    if (!date) return "";
    const options = { day: "numeric", month: "long" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleDateSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
    onFromChange(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
    onToDate(e.target.value);
    setIsOpen(false);
  };

  const getButtonLabel = () => {
    if (fromDate && toDate) {
      return `${formatSelectedDate(fromDate)} to ${formatSelectedDate(toDate)}`;
    }
    return "Select dates";
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={handleDateSelect}
          className={`inline-flex justify-between items-center w-[fit] rounded-2xl px-4 py-2 text-sm font-medium ${
            fromDate && toDate
              ? "bg-blue-500 bg-opacity-20 border-blue-500 border-2 text-black"
              : "bg-white border-gray-300 text-gray-700"
          }  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}
        >
          {getButtonLabel()}
          <MdArrowDropDown size={20} />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2">
              <label
                htmlFor="fromDate"
                className="block text-sm font-medium text-gray-700"
              >
                From
              </label>
              <input
                type="date"
                id="fromDate"
                value={fromDate || ""}
                onChange={(e) => handleFromDateChange(e, setFromDate)}
                className="mt-1 p-1.5 rounded-md w-full border"
              />
            </div>
            <div className="px-4 py-2">
              <label
                htmlFor="toDate"
                className="block text-sm font-medium text-gray-700"
              >
                To
              </label>
              <input
                type="date"
                id="toDate"
                value={toDate || ""}
                onChange={(e) => handleToDateChange(e, setToDate)}
                className="mt-1 p-1.5 rounded-md w-full border"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function ThirdSection() {
  // const [selectedDates, setSelectedDates] = useState({
  //   fromDate: null,
  //   toDate: null,
  // });
  const [selectedFromDate, setSelectedFromDate] = useState("");
  const [selectedToDate, setSelectedToDate] = useState("9");
  const handleFromDate = (date) => {
    setSelectedFromDate(date);
  };
  const handleToDate = (date) => {
    setSelectedToDate(date);
  };
  console.log("nikal to", selectedToDate);
  console.log("nikal from", selectedToDate);
  const toMonth = selectedToDate ? new Date(selectedToDate).getMonth() : null;
  const fromMonth = selectedFromDate
    ? new Date(selectedFromDate).getMonth()
    : null;

  const fromDate = selectedFromDate
    ? new Date(selectedFromDate).getDate()
    : null;

  const toDate = selectedToDate ? new Date(selectedToDate).getDate() : null;
  // console.log(fromMonth, toMonth);
  // console.log(fromDate, toDate);
  const monthTimeTable = timeTable.find((item) => item.id == fromMonth + 1);
  console.log(monthTimeTable);

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };

  return (
    <div className="p-16 pb-32 px-32  border-2">
      <div className="text-black h-min items-center p-8 rounded-xl bg-slate-200 flex flex-col">
        <div className="text-5xl w-full mb-4 font-extrabold">schedule</div>
        <div className="flex w-full items-center mb-8 justify-between">
          <div className="text-opacity-50 text-lg tracking-wider font-extralight">
            syllabus will be completed by
            <span className="font-bold"> 12 Dec, 2023</span> after which
            revision will commence.
          </div>
          <DateSelector onFromChange={handleFromDate} onToDate={handleToDate} />
        </div>

        {monthTimeTable?.schedule.map((item, index) => (
          <TimeTableCard data={item} month={"october"} />
        ))}

        <button className=" relative top-8 left-5 mt5 font-semibold text-blue-500 flex items-center">
          view more <FaCaretDown />{" "}
        </button>
        <div className=" relative top-24 py-12  rounded-3xl w-full h-min items-center flex gap-9 flex-col bg-[#00364E]">
          <div className=" text-4xl text-white">
            need help with{" "}
            <span className=" text-yellow-300">your study plan</span>
          </div>
          <button className=" w-80 bg-blue-500 text-white px-8  rounded-xl p-3">
            <div className=" font-semibold">
              let's plan together<span>&#8599;</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
