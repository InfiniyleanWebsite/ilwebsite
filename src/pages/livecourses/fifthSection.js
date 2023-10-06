import React from "react";
import Image from "next/image";

import { BsDownload } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
function FifthSection() {
  return (
    <div className=" w-full">
      <div className=" flex  w-full justify-between text-black">
        <div className=" w-1/2  py-6 flex items-cener justify-center bg-blue-100">
          <Image
            src="./livecourses/fifthSection/books/book1.svg"
            width={436}
            height={580}
            alt="books"
            className=" mr-9"
          />
        </div>
        <div className=" w-1/2 justify-center gap-4 px-28  flex flex-col bg-[#FEF8DE]">
          <div className=" pb-12 font-extrabold text-4xl">
            <span className=" text-blue-600">IL books</span> for NEET
          </div>
          <div>
            <span className=" font-bold text-2xl"> Botany Class 11</span>{" "}
            <span className=" opacity-50">(12 Books)</span>
          </div>
          <div className=" flex gap-3 flex-col ">
            <div className=" flex gap-2">
              <Image src="./tick.svg" width={24} height={24} alt="books" />
              <div>Based on latest NEET Pattern</div>
            </div>
            <div className=" flex gap-2">
              <Image src="./tick.svg" width={24} height={24} alt="books" />
              <div>Concise Theory + Practice Questions</div>
            </div>
            <div className=" flex gap-2">
              <Image src="./tick.svg" width={24} height={24} alt="books" />
              <div>Topic-wise Detailed MCQs for revision</div>
            </div>
          </div>
          <button className=" mt-10  w-80 border-2 border-black border-opacity-50 bg-[#FEF8DE]  text-black  rounded-xl p-3">
            <div className=" gap-5 flex justify-center font-semibold">
              <div>download sample pdf</div>

              <BsDownload size={20} />
            </div>
          </button>
        </div>
      </div>
      <div className=" flex flex-col w-full justify-center mt-10 text-black">
        <div className=" text-center font-extrabold mb-9 mt-4  text-4xl">
          syllabus
        </div>
        <div className=" flex gap-12 mb-12 justify-center ">
          <button className=" hover:border-2 hover:gap-32  hover:border-red-300 items-center bg-red-300  bg-opacity-30 gap-7  p-7 border-2 rounded-2xl flex">
            <Image
              src="./livecourses/fifthSection/syllabus/chemistry.svg"
              width={60}
              height={60}
              alt="chemishtry icon"
            />
            <div className=" mr-16 font-semibold">Chemistry</div>
            <BsArrowRight size={20} />
          </button>
          <button className=" hover:border-2  hover:border-orange-300 items-center bg-orange-300  bg-opacity-30 gap-7  p-7 border-2 rounded-2xl flex">
            <Image
              src="./livecourses/fifthSection/syllabus/physics.svg"
              width={60}
              height={60}
              alt="chemishtry icon"
            />
            <div className=" mr-16 font-semibold">Physics</div>
            <BsArrowRight size={20} />
          </button>
          <button className=" hover:border-2  hover:border-green-300 items-center bg-green-300 bg-opacity-30 gap-7   p-7 border-2 rounded-2xl flex">
            <Image
              src="./livecourses/fifthSection/syllabus/biology.svg"
              width={60}
              height={60}
              alt="chemishtry icon"
            />
            <div className=" mr-16 font-semibold">Biology</div>
            <BsArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default FifthSection;
