import muddatli_tolov_img from "../../assets/muddatli_tolov_img.svg";
import { useState } from "react";

function OsonQidiruv() {
  const [component, setComponent] = useState("");

  if (component === "elekronika") {
    return <Elektronika />;
  }
  return (
    <div className="w-[1519px] px-40 py-5 bg-white mx-auto flex items-center justify-between">
      <div className="flex gap-1 items-center">
        <img src={muddatli_tolov_img} alt="" />
        <h4 className="text-[12.8px] tetx-[#1F2026] font-bold">
          Muddatli to'lov
        </h4>
      </div>
      <div className="flex gap-7">
        <p onClick={()=>{
          setComponent("elekronika")
        }} className="text-[14px] text-[#595B66]">Elektronika</p>
        <p className="text-[14px] text-[#595B66]">Maishiy texnika</p>
        <p className="text-[14px] text-[#595B66]">Kiyim</p>
        <p className="text-[14px] text-[#595B66]">Poyabzallar</p>
        <p className="text-[14px] text-[#595B66]">Aksessuarlar</p>
        <p className="text-[14px] text-[#595B66]">Goʻzallik va parvarish</p>
        <p className="text-[14px] text-[#595B66]">Salomatlik</p>
        <p className="text-[14px] text-[#595B66]">Qurilish va taʼmirlash</p>
      </div>
      <select className="w-20">
        <option value="yana">Yana</option>
        <option value="Uy-roʻzgʻor buyumlari">Uy-roʻzgʻor buyumlari</option>
        <option value="o'quv qurollari">O'quv qurollari</option>
        <option value="xostovarlar">Xostovarlar</option>
      </select>
    </div>
  );
}

export default OsonQidiruv;
