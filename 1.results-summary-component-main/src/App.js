import React from "react";
import data from "./data.json";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <section className="flex flex-col md:flex-row md:rounded-3xl bg-white shadow-lg shadow-black h-screen md:h-auto ">
        <div className="right h-2/5 md:h-auto md:w-1/2  flex flex-col md:space-y-4 rounded-b-3xl md:rounded-3xl text-center md:px-2 md:py-10">
           <p className="flex-grow mt-4 md:mt-0 text-dark-gray md:text-xl">Your Result</p>
           <div className="circle flex my-4 bg-blue-500 rounded-full justify-center items-center flex-col w-32 h-32 md:w-40 md:h-40 mx-auto">
             <p className="text-5xl md:text-6xl text-white">76</p>
             <p className="text-md text-dark-gray">of 100</p>
           </div>
           <h1 className="flex-grow text-white text-2xl ">Great</h1>
           <p className="flex-grow w-2/3 text-white text-sm mx-auto mb-2">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className="h-3/5 md:h-auto md:w-1/2 flex flex-col md:px-2 md:py-10">
          <div className="my-4 px-4 space-y-4 flex flex-col grow md:my-auto">
            <h2 className="flex-grow text-slate-700 font-bold text-xl">Summary</h2>
            <div className="flex-grow flex justify-between items-center bg-red-50 rounded-lg p-3">
              <h3 className="flex items-center gap-1 text-light-red"><img src={data[0].icon} alt={data[0].category}/> {data[0].category}</h3>
              <p className="text-slate-700 font-bold">{data[0].score} / 100</p>
            </div>
            <div className="flex-grow flex justify-between items-center bg-yellow-50 rounded-lg p-3">
              <h3 className="flex items-center gap-1 text-orangey-yellow"><img src={data[1].icon} alt={data[1].category}/> {data[1].category}</h3>
              <p className="text-slate-700 font-bold">{data[1].score} / 100</p>
            </div>
            <div className="flex-grow flex justify-between items-center bg-green-50	 rounded-lg p-3">
              <h3 className="flex items-center gap-1 text-green-teal"><img src={data[2].icon} alt={data[2].category}/> {data[2].category}</h3>
              <p className="text-slate-700 font-bold">{data[2].score} / 100</p>
            </div>
            <div className="flex-grow flex justify-between items-center bg-blue-50	 rounded-lg p-3">
              <h3 className="flex items-center gap-1 text-cobalt-blue"><img src={data[3].icon} alt={data[3].category}/> {data[3].category}</h3>
              <p className="text-slate-700 font-bold">{data[3].score} / 100</p>
            </div>
            <button className="flex-grow bg-blue-950 focus:bg-light-slate-blue w-full rounded-full text-white p-3 text-sm">
              Continue
            </button>
        </div>
      </div>
    </section>
  </div>
  );
}

export default App;
