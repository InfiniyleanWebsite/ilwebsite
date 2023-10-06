import React, { useState, useEffect } from "react";
import Image from "next/image";
const reviews = [
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: true,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image1.svg",
  },
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image2.svg",
  },
  {
    name: "Rakesh",
    place: "maharashtra",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image3.svg",
  },
  {
    name: "Ruchil",
    place: "hyderabad",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "./reviews/image2.svg",
  },
  {
    name: "Rakesh",
    place: "maharashtra",
    batch: "IIT JEE Foundation",
    video: false,
    review:
      "It has been the most amazing experience studying in Sri Chaitanya. I gained a lot of experience.",
    image: "reviews/image3.svg",
  },
];
function LevelShower(props) {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-4 h-4 mr-6 font-semibold">01</div>
        <div className=" w-48 h-0.5 mt-2 bg-white"></div>
        <div className="w-4 h-4 font-semibold ml-6">05</div>
      </div>
      <div
        className={`relative bottom-2 w-${props.data}  left-10 bg-blue-500 h-2`}
      ></div>
    </div>
  );
}
function Card(props) {
  const check = props.data.video;

  if (check) {
    return (
      <div className="flex mb-12 mx-auto shadow-lg   flex-col px-5 flex-shrink-0  my-4 rounded-2xl w-1/4 bg-white text-black ">
        <Image
          src={props.data.image}
          // className=" rounded-full"
          height={120}
          width={200}
          className="  mt-6  w-[100%] h-[100%]"
          fit="contain"
          alt="cards svg"
        />
        <div className=" ml-4  text-start">{props.data.review}</div>

        <Image
          src="reviews/invertedCommas2.svg"
          height={52}
          width={40}
          alt="inverted commas "
          className=" w-[15%] bottom-12 opacity-75 left-72  relative"
        />
        <div className=" flex  items-center ">
          <div className="flex z-50 ml-4  flex-col flex-grow">
            <div className=" font-bold">{props.data.name}</div>
            <div className="  font-medium opacity-50">{props.data.place}</div>
          </div>
          <div className="  text-orange-400">{props.data.batch}</div>
        </div>
      </div>
    ); // or you can return some default component or <></> for nothing.
  }

  return (
    <div className="flex mb-12 shadow-lg gap-5  flex-col px-5 flex-shrink-0 py-8 my-4 rounded-2xl w-1/4 bg-white text-black ">
      <div className="flex  items-center gap-6 px-7 ">
        <Image
          src={props.data.image}
          // className=" rounded-full"
          height={120}
          width={120}
          className=" w-auto h-auto "
          fit="contain"
          alt="cards svg"
        />
        <div className="flex z-50  flex-col flex-grow">
          <div className=" font-bold mb-3">{props.data.name}</div>
          <div className="  font-medium opacity-50">{props.data.place}</div>
          <div className="  text-orange-400">{props.data.batch}</div>
        </div>
      </div>
      <Image
        src="reviews/invertedcommas.svg"
        height={52}
        width={40}
        alt="inverted commas"
        className=" w-[15%]"
      />
      <div className="  text-start">{props.data.review}</div>
    </div>
  );
}

function Reviews() {
  const [scrollPos, setScrollPos] = useState(0);
  const [lineLength, setLineLength] = useState(9);
  useEffect(() => {
    const maxScroll = reviews.length - 3;
    const interval = setInterval(() => {
      if (scrollPos >= maxScroll) {
        setScrollPos(0);
        setLineLength(4);
      } else {
        setScrollPos((prev) => prev + 4);
        setLineLength(48);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [scrollPos]);

  return (
    <div>
      <div className=" bg-[#00364E] px-36  ">
        <LevelShower data={lineLength} />
      </div>
      <div className=" flex relative top-40 flex-col justify-center items-center ">
        <div className="overflow-hidden w-screen  relative w-5/">
          <div
            className="flex gap-8 transition-transform duration-1000"
            style={{ transform: `translateX(-${scrollPos * 20}%)` }}
          >
            {reviews.map((review, index) => (
              <Card key={index} data={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function FifthSection() {
  return (
    <div className=" mb-40 w-full bg-[#00364E]">
      <div className=" bg-[#00364E] flex mb justify-evenly pt-20 ">
        <div className=" flex flex-col">
          <div className=" text-6xl font-extrabold">inspring </div>
          <div className=" text-6xl font-extrabold">stories of our </div>
          <div className=" text-6xl font-extrabold text-yellow-300">
            toppers{" "}
          </div>
        </div>
        <img src="./topper.svg" height={400} width={600} alt="topper.svg" />
      </div>
      <Reviews />
    </div>
  );
}
export default FifthSection;
