import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardOpen from "../assets/cardO.png";

function LoadingScreen() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation
    setTimeout(() => setAnimate(true), 100);

    // Navigate after animation
    const timer = setTimeout(() => {
      navigate("/invitedYarn");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <img
        src={CardOpen}
        alt="Envelope"
        className={`
          w-[280px]
          transition-all
          duration-[1400ms]
          ease-in-out
          ${animate
            ? "scale-[5] opacity-0 rotate-3"
            : "scale-100 opacity-100 rotate-0"}
        `}
      />
    </div>
  );
}

export default LoadingScreen;