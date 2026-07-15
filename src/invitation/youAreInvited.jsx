import React, { useState } from "react";
import Invitation from "../assets/invitation.png";
import Linard from "../assets/linard.png";

import Why from "../pages/Why";
import Memories from "../pages/Memories";
import Pictures from "../pages/Pictures";
import Appreciated from "../pages/Appreciated";

function YouAreInvited() {
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white">
      {/* Invitation */}
      <div>
        <img
          src={Invitation}
          alt=""
          className="p-4"
          style={{
            filter: `
              drop-shadow(0 0 5px #3B82F6)
              drop-shadow(0 0 10px #3B82F6)
              drop-shadow(0 0 20px #60A5FA)
            `,
          }}
        />
      </div>

      <header>
        <h1 className="text-center font-FD m-6 text-4xl">
          I know damn well this isn't what you were expecting.
        </h1>
      </header>

      <div className=" flex flex-col justify-center items-center">
        <img
          src={Linard}
          alt=""
          className="p-4 flex justify-center items-center"
          style={{
            filter: `
              drop-shadow(0 0 5px #3B82F6)
              drop-shadow(0 0 10px #3B82F6)
              drop-shadow(0 0 20px #60A5FA)
            `,
          }}
        />

<div className="flex justify-between gap-3 p-4 flex-wrap">

  <button
    onClick={() => setSelectedPage("why")}
    className={`p-3 rounded-full border active:scale-95 hover:scale-95 transition ${
      selectedPage === "why"
        ? "bg-blue-500 text-white border-blue-300 shadow-lg shadow-blue-500/50"
        : "border-blue-500"
    }`}
  >
    Why
  </button>

  <button
    onClick={() => setSelectedPage("memories")}
    className={`p-3 rounded-full border active:scale-95 hover:scale-95 transition ${
      selectedPage === "memories"
        ? "bg-blue-500 text-white border-blue-300 shadow-lg shadow-blue-500/50"
        : "border-blue-500"
    }`}
  >
    Memories
  </button>

  <button
    onClick={() => setSelectedPage("pictures")}
    className={`p-3 rounded-full border active:scale-95 hover:scale-95 transition ${
      selectedPage === "pictures"
        ? "bg-blue-500 text-white border-blue-300 shadow-lg shadow-blue-500/50"
        : "border-blue-500"
    }`}
  >
    Pictures
  </button>

  <button
    onClick={() => setSelectedPage("appreciated")}
    className={`p-3 rounded-full border active:scale-95 hover:scale-95 transition ${
      selectedPage === "appreciated"
        ? "bg-blue-500 text-white border-blue-300 shadow-lg shadow-blue-500/50"
        : "border-blue-500"
    }`}
  >
    You Deserve It ❤️
  </button>

</div>

        {/* Message Box */}
        <div className="mx-4 m-6 mt-6 p-6 rounded-2xl border border-blue-500 bg-white/10 backdrop-blur-md">
          {selectedPage === "why" && <Why />}
          {selectedPage === "memories" && <Memories />}
          {selectedPage === "pictures" && <Pictures />}
          {selectedPage === "appreciated" && <Appreciated />}
        </div>
      </div>
    </div>
  );
}

export default YouAreInvited;