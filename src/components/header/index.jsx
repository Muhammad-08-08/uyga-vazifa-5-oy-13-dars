import { useState } from "react";
import lokation_icon from "../../assets/location_icon.svg";
import uzbek_bayroq_icon from "../../assets/uzbek_bayroq_icon.svg";
import russia_bayroq_icon from "../../assets/russia.png";

function Header() {
  const [drop, setDrop] = useState(false);
  return (
    <div className="w-[1519px] px-40 py-5 bg-white mx-auto flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <img src={lokation_icon} alt="" />
        <p>
          Shahar:{" "}
          <span className="text-[#1F2026] font-bold underline">Toshkent</span>
        </p>
        <p>Topshirish punktlari</p>
      </div>
      <p className="text-[#8B8E99] text-[14px]">
        Buyurtmangizni 1 kunda bepul yetkazib beramiz!
      </p>
      <div className="flex items-center gap-4">
        <p>Savol-javoblar</p>
        <p>Buyurtmalarim</p>
        <div>
          <div
            onClick={() => {
              setDrop(drop === false ? true : false);
            }}
            className="flex cursor-pointer"
          >
            <img src={uzbek_bayroq_icon} alt="" />
            <p>O'zbekcha</p>
          </div>
          <div>
            <Ruscha_til drop={drop} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Ruscha_til({ drop }) {
  return (
    <div
      className={`${
        drop === false ? "hidden" : "flex"
      } items-center gap-2 absolute cursor-pointer`}
    >
      <img className="w-5 h-5" src={russia_bayroq_icon} alt="" />
      <p>Ruscha</p>
    </div>
  );
}

export default Header;
