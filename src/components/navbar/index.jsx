import uzum_logo_icon from "../../assets/uzum_logo_icon.svg";
import katalog_icon from "../../assets/katalog_icon.svg";
import x_solid from "../../assets/x-solid.svg";
import uzum_qidiruv_icon from "../../assets/uzum_qidiruv_icon.svg";
import user_icon from "../../assets/user_icon.svg";
import likes_icon from "../../assets/likes_icon.svg";
import savat_icon from "../../assets/savat_icon.svg";
import Katalog from "../katalog";
import { useState } from "react";
import Input_modal from "../input_modal";

function Navbar() {
  const [katalog, setKatalog] = useState(false);
  const [input, setInput] = useState(false);
  return (
    <div>
      <div className="w-[1519px] px-40 py-6 bg-white mx-auto flex items-center justify-between">
        <div className="flex">
          <img src={uzum_logo_icon} alt="" />
          <button
            onClick={() => {
              setKatalog(katalog === false ? true : false);
            }}
            className="flex px-2 bg-[#F0F0FF] py-2"
          >
            <img
              className="w-8 h-[22px]"
              src={katalog === false ? katalog_icon : x_solid}
              alt=""
            />
            katalog
          </button>
        </div>
        <div className="flex items-center relative">
          <input
            onClick={() => {
              setInput(input === false ? true : false);
            }}
            className="w-[450px] border px-2 py-2 rounded-lg"
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
          />
          <button className="px-6 py-[9px] bg-[#F0F0FF] absolute right-0 rounded-r-lg">
            <img src={uzum_qidiruv_icon} alt="" />
          </button>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <img src={user_icon} alt="" />
            <p>Kirish</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={likes_icon} alt="" />
            <p>Saralangan</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={savat_icon} alt="" />
            <p>Savat</p>
          </div>
        </div>
      </div>
      {katalog && <Katalog setKatalog={setKatalog} katalog={katalog} />}
      {input && <Input_modal />}
    </div>
  );
}

export default Navbar;
