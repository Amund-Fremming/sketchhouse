import React from "react";
import Navbar from "./Navbar";

function App() {

  const list = [];
  for (let i = 0; i < 40; i++) {
    list.push(
      <div className="h-10 w-30 m-10 bg-blue-400">
        <p>JEG LIKER OST</p>
      </div>
    );
  } 

  return (
    <>
      <Navbar />
      <div className="flex-col">
      {
        list
      }
      </div>
    </>
  );
}

export default App;
