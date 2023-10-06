import React, { useState } from "react";

function SeventhSection() {
  // Added useState for 'query'
  const [query, setQuery] = useState("");

  return (
    <div className="bg-[#00364E] min-h-max">
      <div className="flex justify-evenly py-40">
        <div className="flex flex-col">
          <div className="tracking-wider text-4xl font-extrabold">
            speak to our <span className="text-yellow-400">academic</span>
          </div>
          <div className="h-2"></div>
          <div className="text-4xl text-yellow-400 font-extrabold">
            counsellor
          </div>
          <div className="h-2"></div>
          <div className="text-xl">
            access to India's best teachers with a record of
          </div>
          <div className="text-xl">producing top rankers year on year.</div>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex h-4/5 md:h-3/5 mt-9 mb-5">
            <input
              className="rounded-l-lg bg-white w-full sm:w-1/2 md:w-96 h-10 md:h-12 pl-4 md:pl-6 text-base md:text-lg border-2 text-black placeholder-grey-300"
              type="text"
              // Escaped the apostrophes here
              placeholder="enter your mobile number"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="md:w-32 rounded-r-3xl bg-blue-500">
              join for free
            </button>
          </div>
          <div>we will send an otp for verification</div>
        </div>
      </div>
    </div>
  );
}

export default SeventhSection;
