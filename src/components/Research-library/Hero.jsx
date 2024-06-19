import React from "react";
import backgroundImage from "/public/giant-clam/IMG_6231.jpg";

const Hero = () => {
  return (
    <>
      <div
        className="py-40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "400px",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex items-center">
          <div className="text-6xl font-bold text-base-300">
            Research Library <br /> About Giant Clam
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;