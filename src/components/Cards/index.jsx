import React, { useState } from "react";
import likes_svg from "../../assets/likes.svg";
import rating_icon from "../../assets/rating_icon.svg";
import qizil_likes from "../../assets/heart-solid.svg";
import bag_svg from "../../assets/bag_svg.svg";

function Cards(props) {
  const [color, setColor] = useState(likes_svg);

  function like_bosish() {
    setColor((col) => (col === likes_svg ? qizil_likes : likes_svg));
  }
  return (
    <div className="w-[232px] h-[472px] mx-auto">
      <div className="relative">
        <img
          onClick={like_bosish}
          className="absolute w-6 right-2 top-2 cursor-pointer"
          src={color}
          alt=""
        />
        <img src={props.rasm} alt="card imgs" />
        <p className="px-3  text-[13px] text-white  bg-[#3B007D] absolute left-2 bottom-2 rounded-lg">
          {props.bolishi_mumkin}
        </p>
      </div>
      <div className="pl-4">
        <p className="text-[12.8px] mt-3">
          {props.malumot.split(" ").slice(0, 10).join(" ")}
        </p>
        <div className="flex gap-2 items-center mt-1 mb-2">
          <img src={rating_icon} alt="" />
          <p className="text-[11.2px] text-[#8B8E99]">5.0</p>
          <p className="text-[11.2px] text-[#8B8E99]">(1234 sharsh)</p>
        </div>
        <p className="px-2 bg-[#FFFF00] w-max text-[11px] text-[#1F1F26]">
          {parseFloat(props.oyiga_tolov).toFixed(3)} so'm oyiga
        </p>
        <div className="flex justify-between items-center gap-2 mt-5">
          <div>
            <del className="text-[11.2px] text-[#8B8E99]">
              {props.eski_narx} 000 so'm
            </del>
            <h4 className="text-[14px] text-[#1F2026] font-medium">
              {parseFloat(props.chegirma_narx).toFixed(3)} so'm
            </h4>
          </div>
          <img className="cursor-pointer" src={bag_svg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
