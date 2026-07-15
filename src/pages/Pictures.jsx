import React, { useState, useEffect } from "react";

import Abe1 from "../assets/abegail/abe1.png";

import Abe3 from "../assets/abegail/abe3.png";
import Abe4 from "../assets/abegail/abe4.png";
import Abe5 from "../assets/abegail/abe5.png";
import Abe6 from "../assets/abegail/abe6.png";

function Pictures() {

  const pictures = [
    Abe1,
    Abe3,
    Abe4,
    Abe5,
    Abe6
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentImage((prev) =>
        prev === pictures.length - 1 ? 0 : prev + 1
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(slide);
  }, []);

  return (
    <div className="text-white">

      <h2 className="text-3xl font-FD text-center mb-6 text-blue-300">
        Pictures
      </h2>

      {/* Slideshow */}
      <div className="flex justify-center mb-6">
        <img
          src={pictures[currentImage]}
          alt="Abegail"
          className="
            w-64 
            h-64 
            object-cover 
            rounded-xl 
            border 
            border-blue-400
            transition-all
            duration-700
          "
          style={{
            filter: `
              drop-shadow(0 0 5px #3B82F6)
              drop-shadow(0 0 10px #60A5FA)
            `,
          }}
        />
      </div>

      <p className="whitespace-pre-line leading-8 text-center">
        {`AI yung message nakakatamad pala mag isip pag ako pa nag code ahahahahahha
        
        Every picture we take captures a moment that I'll always be happy to look back on. They remind me of the laughter, smiles, and fun times we've shared together.

Whether it's a silly selfie, a random candid shot, or a picture from a special occasion, each one tells a story that I'll always cherish. They remind me just how lucky I am to have someone like you in my life.

I hope this birthday gives us another reason to fill our gallery with more unforgettable memories together. ❤️`}
      </p>

    </div>
  );
}

export default Pictures;