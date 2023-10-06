import React from "react";

function FirstSection() {
  return (
    <div className=" h-full mx-auto  text-white bg-blue-500">
      <div className=" flex justify-center  py-16">
        <img
          className="relative w-[578px] h-[528px] object-cover"
          alt=""
          src="livecourses/firstSection/mask-group@2x.png"
        />
        <div className=" ml-10 pb-12 flex flex-col justify-evenly ">
          <div>
            <div className=" relative  lowercase">
              <span className=" text-yellow-400 font-semibold">
                Full Syllabus Course
              </span>
              <span className="text-background-02">
                {" "}
                + Revision + Test Series
              </span>
            </div>
            <div className=" font-extrabold my-7">
              <span className=" text-5xl text-yellow-400 ">NEET</span>
              <span className=" text-5xl text-background-02">
                {" "}
                rankers course
              </span>
            </div>
            <div className="font-thin">
              <p className=" m ">
                write a short description of the course here that talks about
              </p>
              <p className="m-0">
                what is included and why it should be taken.
              </p>
            </div>
          </div>
          <div className="flex font-thin my-4 gap-9 items-start justify-evenly ">
            <div className="flex  items-center gap-3 justify-evenly">
              <img
                className="relative w-8 h-8"
                alt=""
                src="/livecourses/firstSection/subjectslogo.svg"
              />
              <div className="relative ">Biology, Physics, Chemistry</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <img
                className="relative w-8 h-8"
                alt=""
                src="/livecourses/firstSection/calendar.svg"
              />
              <div className="relative ">
                <span>{`batch starts `}</span>
                <span className="font-semibold">24th June</span>
              </div>
            </div>
          </div>
          <div className=" flex justify-evenly gap-14 my-4  border-2 border-yellow-300 rounded-2xl p-4">
            <div className=" flex flex-col">
              <div className=" text-sm lowercase font-medium ">{`Starting at `}</div>
              <div className=" flex items-center gap-3 text-yellow-300">
                <d className="  font-bold text-4xl  ">₹ 1,660</d>

                <div className="  lowercase font-medium ">/month</div>
              </div>
              <div className=" flex gap-3">
                <div className=" text-red-500  text-lg [text-decoration:line-through] lowercase font-medium text-crimson">
                  {" "}
                  ₹ 2,550
                </div>
                <div className="  text-sm">* offer valid until 21st June</div>
              </div>
            </div>
            <div className="rounded-2xl p-3 px-5 items-center bg-[#00364E] ">
              <div className=" flex flex-col ">
                <p className="m-0 text-2xl font-bold">40%</p>
                <p className="m-0 text-3xl ">Off</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-evenly">
            <button className="border-2 text-blue-500 bg-white px-8  rounded-xl p-3">
              <div className=" font-semibold">
                enrol at ₹1,660/month<span>&#8599;</span>
              </div>
            </button>
            <button className="border-2 text-yellow-300 border-yellow-300  px-8  rounded-xl p-3">
              <div className=" font-semibold">
                start learning for free<span>&#8599;</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FirstSection;
