import muddatli_tolov_img from "../../assets/muddatli_tolov_img.svg";

function OsonQidiruv() {
  return (
    <div className="w-[1519px] px-40 py-5 bg-white mx-auto relative flex items-center justify-between">
      <div className="flex gap-1 items-center">
        <img src={muddatli_tolov_img} alt="" />
        <h4 className="text-[12.8px] tetx-[#1F2026] font-bold">
          Muddatli to'lov
        </h4>
      </div>
      <div className="flex gap-7">
        <p className="relative group text-[14px] text-[#595B66] hover:text-black cursor-pointer">
          Elektronika
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </p>
        <p className="relative group text-[14px] text-[#595B66] hover:text-black cursor-pointer">
          Maishiy texnika
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </p>
        <p className="relative group text-[14px] text-[#595B66] hover:text-black cursor-pointer">
          Kiyim
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </p>
        <p className="relative group text-[14px] text-[#595B66] hover:text-black cursor-pointer">
          Poyabzallar
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </p>
        <p className="relative group text-[14px] text-[#595B66] hover:text-black cursor-pointer">
          Aksessuarlar
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </p>
        <p className="relative group text-[14px] text-[#595B66] hover:text-black cursor-pointer">
          Goʻzallik va parvarish
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </p>
        <p className="relative group text-[14px] text-[#595B66] hover:text-black cursor-pointer">
          Salomatlik
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </p>
        <p className="relative group text-[14px] text-[#595B66] hover:text-black cursor-pointer">
          Qurilish va taʼmirlash
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </p>
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
