import React from "react";
import CardClose from "../assets/cardC.png";
import MainCourse from "../assets/maincourse.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Invitation() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-white m-10 tracking-[.20em]">
        <header
          className="font-LG text-center text-3xl animate-bounce"
          style={{
            WebkitTextStroke: "0.5px #ffffff",
            textShadow: `
              0 0 3px #fff,
              0 0 6px #3B82F6,
              0 0 10px #3B82F6,
              0 0 16px #60A5FA
            `,
          }}
        >
          Greetings Man
        </header>

        <div className="flex flex-col items-center mt-6">
         <Link to="/loading">
          <img
            src={CardClose}
            alt="Card"
            className="p-2 animate-pulse cursor-pointer active:scale-95 transition-transform duration-200 hover:scale-105"
            style={{
              filter: `
                drop-shadow(0 0 5px #3B82F6)
                drop-shadow(0 0 10px #3B82F6)
                drop-shadow(0 0 20px #60A5FA)
              `,
            }}
          />
          </Link>
          <p
            className="mt-4 text-2xl font-bold animate-bounce p-6"
            style={{
              WebkitTextStroke: "0.4px #ffffff",
              textShadow: `
                0 0 3px #fff,
                0 0 6px #3B82F6,
                0 0 10px #3B82F6,
                0 0 16px #60A5FA
              `,
            }}
          >
            ☝️ Click Here 🖕
            
          </p>
   
          <img
            src={MainCourse}
            alt="Card"
            className="p-2 animate-spin cursor-pointer active:scale-95 
                        transition-transform duration-200 hover:scale-105
                        min-[110px]:w-18.25 min-[280px]:h-22.5"
            style={{
              filter: `
                drop-shadow(0 0 5px #3B82F6)
                drop-shadow(0 0 10px #3B82F6)
                drop-shadow(0 0 20px #60A5FA)
              `,
            }}/>
        </div>
      </div>
    </div>
  );
}

export default Invitation;