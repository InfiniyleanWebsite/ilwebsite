import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

// import "./letssee.css";
const courses = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },

  {
    id: 3,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image1.svg",
  },
  {
    id: 4,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image1.svg",
  },
  {
    id: 5,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image2.svg",
  },
  {
    id: 6,
    name: "IIT JEE Rankers Course",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 7,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 8,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 9,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 10,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 11,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
  {
    id: 12,
    name: "High Order Thinking Skills",
    about: "full course coverage revision and test series",
    price: "starting at 1660/month",
    svg: "./courses/image3.svg",
  },
];
function Card(props) {
  // console.log(props.data.id);
  return (
    <div
      className={`flex-shrink-0 justify-start max-w-screen-xl text-start py-7 h-full ${
        props.data.id == 1 || props.data.id == 0 || props.data.id == 2
          ? " w-96 bg-blue-200  "
          : "bg-white"
      }  rounded-2xl mx-4 p-4 flex flex-col items-center`}
    >
      <div className="">
        {props.data.id != 0 && props.data.id != 1 && props.data.id != 2 && (
          <img
            src={props.data?.svg}
            height={278}
            width={368}
            // Ensures the image maintains its aspect ratio
            className="border-2 w-auto h-auto border-blue-200"
            alt="cards svg"
          />
        )}
        <div className="relative bottom-4 left-6">
          {props.data.id != 0 && props.data.id != 1 && props.data.id != 2 && (
            <Image
              src="./courses/std.svg"
              height={29}
              width={142}
              className=" w-[40%] h-auto" // Ensures the image maintains its aspect ratio
              alt="courses.svg"
            />
          )}
        </div>
      </div>
      <div className="text-start justify-start mb-4 flex-grow border-b-2 ">
        <div className="text-black font-bold text-lg">{props.data.name}</div>
        <div className="text-black text-center mb-2 font-thin ">
          {props.data?.about}
        </div>
      </div>
      <div className="mt-3 flex justify-between items-center space-x-20">
        {" "}
        <div className="text-black mb-2">{props.data?.price}</div>
        {props.data.id != 0 && props.data.id != 1 && props.data.id != 2 && (
          <div className=" flex text-blue-500">
            <div className=" text-xs text-blue-500 text-center  cursor-pointer">
              See More{" "}
            </div>
            <IoIosArrowDown />
          </div>
        )}
      </div>
    </div>
  );
}

function Courses() {
  const [scrollPos, setScrollPos] = useState(0);
  const [activeDash, setDashCard] = useState(0);
  const [dashIndex, setDashIndex] = useState(0);
  const dashWidth = [50, 50, 50, 50, 50];
  useEffect(() => {
    const maxScroll = courses.length - 5; // total cards minus visible cards
    const interval = setInterval(() => {
      if (scrollPos >= maxScroll) {
        setScrollPos(0);
        setDashCard(0);
      } else {
        setScrollPos((prev) => prev + 2);
        setDashCard((activeDash + 1) % 5);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [scrollPos]);

  return (
    <div className="flex flex-col justify-center w-full items-center h-ull bg-blue-200">
      <div className="overflow-hidden h-auto relative  w-5/6">
        <div
          className="flex transition-transform  duration-1000 "
          style={{ transform: `translateX(-${scrollPos * 15}%)` }} // Adjust based on card width and margin
        >
          {courses.map((course) => (
            <Card key={course.id} data={course} />
          ))}
        </div>
      </div>
      <div className=" flex justify-center mt-10">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className={`dash h-1 rounded-full mx-2 b ${
              index === activeDash
                ? "active w-16 bg-blue-500 "
                : " bg-blue-300 w-10"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

function FourthSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [dashIndex, setDashIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
    setDashIndex(0);
  };

  const handleScrollChange = (scrollPosition) => {
    // Calculate the new dash index based on the scroll position
    const newDashIndex = Math.floor(scrollPosition / 2);
    setDashIndex(newDashIndex);
  };

  const dashWidth = [50, 50, 50, 50, 50];

  return (
    <div>
      <div className="w-full py-10 min-h-screen overflow-hidden mx-auto bg-blue-200 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-10">
            <img
              src="fire.svg"
              className=" w-auto h-auto"
              height={96}
              width={96}
              fit="contain"
              alt=" fire.svg"
            />
            <div className="mt-8 text-6xl font-bold text-black">
              news and
              <span className="text-6xl font-bold text-blue-400">trending</span>
            </div>
          </div>
          {/* <div className="flex max-w-screen-xl no-scrollbar  overflow-x-auto mt-8"> */}
          <Courses />
          {/* </div> */}
          <div className="dash-indicators">
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className={`dash bg-blue-500 ${
                  index === dashIndex ? "active" : ""
                }`}
                style={{ width: `${dashWidth[index]}px` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
