import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [activeButton, setActiveButton] = useState("all");
  return (
    <>
      <div>
        <img className="w-screen" src="./bg-cafe.jpg" alt="" />

        <div className="flex items-center justify-center">
          <div className="w-10/12  rounded-xl bg-[#1B1D1F] absolute top-48 p-24">
            <div className="flex items-center flex-col gap-y-4">
              <img
                src="./vector.svg"
                alt="vector"
                className="absolute top-6 left-1/2 "
              />
              <p className="text-white text-3xl font-bold text-center z-10">
                Our Collection
              </p>
              <p className="text-slate-400 xl:w-1/2 sm:w-1/2 lg:w-1/2 text-center z-10">
                Introducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in
                small batches and shipped fresh weekly.
              </p>
              <div className="flex gap-x-4">
                <button
                  onClick={() => setActiveButton("all")}
                  className="py-2 px-4 rounded-xl text-white text-bold hover:bg-[#6F757C] active:bg-slate-700 focus:ring focus:ring-violet-300"
                >
                  All Products
                </button>
                <button
                  onClick={() => setActiveButton("available")}
                  className="py-2 px-4 rounded-xl text-white text-bold hover:bg-[#6F757C] active:bg-slate-700 focus:ring focus:ring-violet-300"
                >
                  Available Now
                </button>
              </div>
              <Card activeButton={activeButton} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
