import Image from "next/image";
import React from "react";

const Feature = ({ src, text }) => {
    const style = {
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100px",
        width: "100px",
      };

      return (
        <div className="max-w-3xl flex flex-col items-center text-center space-y-4">
          {/* Image with circular styling */}
          <div className="rounded-full" style={style}></div>
    
          {/* Text below the image */}
          <p className="font-playfair">{text}</p>
        </div>
      );
    };
    
    export default Feature;
