import React from "react";
import './Foot.css';

function Foot() {
  return (
    <div id="Foot" className="flex justify-between items-center p-4 bg-transparent text-white mt-[130px]">
      <div>
        <img src="src\assets\pictures\public\real.jpg" alt="ast1" className="image-blurred-edge w-24 h-auto ast ast-1" />
      </div>

      <div className="flex flex-col items-center content">
        <div className="box"></div>

        <div className="text-center mt-4">
          Made by Aditya Bhardwaj
          <br />
          © 2024
          <p>Feel free to connect at abc@123.xom</p>
        </div>

        <div className="box2 mt-4"></div>
      </div>

      <div>
        <img src="src\assets\pictures\public\inverted.jpg" alt="ast2" className="image-blurred-edge w-24 h-auto ast ast-2" />
      </div>
    </div>
  );
}

export default Foot;
