/* eslint-disable no-undef */
import React from "react";

function clickMe() {
  alert("Hire Me");
}
function App() {
  return (
    <body className="min-h-screen bg-blue-300">
      <div className="flex flex-col justify-center items-center bg-blue-300">
        <div className="m-10 p-10 bg-green-500 rounded-2xl shadow-2xl ">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-center">Tailwind CSS</h1>
            <p className="p-5 font-light ">Do you like my Tailwind demo?</p>
            <button
              onClick={clickMe}
              className="p-5 bg-white hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Press Me
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
