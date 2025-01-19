function Katalog({ katalog, setKatalog }) {
  return (
    <div
      onClick={() => {
        setKatalog(katalog === false ? true : false);
      }}
      className="fixed pl-7 bottom-[-23px] bg-white right-0 w-full h-5/6 z-10"
    >
      <div className="flex ">
        <div className=" border w-max px-11 pr-20 py-6">
          <div className="flex items-center gap-2">
            <img
              width={"35px"}
              src={"https://static.uzum.uz/fast_categories/Ras2025.png"}
              alt=""
            />
            <b>Qishki Savdo</b>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <img
              width={"35px"}
              src={"https://static.uzum.uz/fast_categories/%20vyg.png"}
              alt=""
            />
            <b>Har Kuni Savdo</b>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4 border w-max px-10 py-6">
          <h2 className="font-semibold">Elektronika</h2>
          <h3 className="font-semibold">Smartfonlar va telefonlar</h3>
          <p>Smartfonlar alsessuarlar</p>
          <p>Smartfonlar</p>
          <p>Knopkali telefonlar</p>
          <p>Ehtiyot qisimlar va ta'minlash</p>
          <p>Statsionar telefonlar</p>
        </div>
      </div>
    </div>
  );
}

export default Katalog;
