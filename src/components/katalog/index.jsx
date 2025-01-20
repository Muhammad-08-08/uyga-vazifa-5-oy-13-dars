function Katalog({ setKatalog }) {
  return (
    <div>
      <div
        onClick={() => {
          setKatalog(false);
        }}
        className="w-full h-[100vh] opacity-0 fixed top-0 left-0"
      ></div>
      <div className="px-40 absolute z-10 w-full bg-white flex shadow-xl shadow-black">
        <div className="border-r-gray-600">
          <div className="w-[300px] pr-7 py-6 ">
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={"https://static.uzum.uz/fast_categories/Ras2025.png"}
                alt=""
              />
              <b className="hover:text-[#7000FF]">Qishki Savdo</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={"https://static.uzum.uz/fast_categories/%20vyg.png"}
                alt=""
              />
              <b className="hover:text-[#7000FF]">Har Kuni Savdo</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={"https://static.uzum.uz/fast_categories/Licv.png"}
                alt=""
              />
              <b className="hover:text-[#7000FF]">tugatish</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={"https://static.uzum.uz/fast_categories/Topsales.png"}
                alt=""
              />
              <b className="hover:text-[#7000FF]">hafta tovarlari</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={
                  "https://img.freepik.com/free-psd/sleek-black-headphones-immersive-audio-experience_191095-86064.jpg?t=st=1737310992~exp=1737314592~hmac=87dec2976a78e95fbf88394b96f0e3fadde9701c11ad1050b1546b56e153806f&w=740"
                }
                alt=""
              />
              <b className="hover:text-[#7000FF]">elektronika</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={
                  "https://img.freepik.com/free-psd/water-purifier-isolated-transparent-background_191095-32494.jpg?t=st=1737311145~exp=1737314745~hmac=bf4bd3ea3dd0584982be1f31dd239741c2858ef74a03b4edaa4d693eadd632d6&w=740"
                }
                alt=""
              />
              <b className="hover:text-[#7000FF]">maishiy texnika</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={
                  "https://img.freepik.com/free-photo/assortment-beige-tone-colored-pants_23-2150773366.jpg?ga=GA1.1.1151875099.1722579433&semt=ais_incoming"
                }
                alt=""
              />
              <b className="hover:text-[#7000FF]">kiyim</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={
                  "https://images2.zoodmall.uz/cdn-cgi/image/w=500,fit=contain,f=auto/https%3A%2F%2Fimages2.zoodmall.com%2Fhttps%253A%2Fimg.joomcdn.net%2Fc160576ac9de8db17d5b325fdb9b96765dcf14c6_original.jpeg"
                }
                alt=""
              />
              <b className="hover:text-[#7000FF]">poyabzallar</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={
                  "https://vertu.uz/uploads/collections/watch/dd10f9f2438c.png"
                }
                alt=""
              />
              <b className="hover:text-[#7000FF]">aksessuarlar</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={
                  "https://lh3.googleusercontent.com/proxy/4zQZgvTWYiQQCr7XmrzcgU65nIl5pWNP98xTkT5own78h9B9PcObzpv5KHXNZIggP75h-KXBBtx93FqxztJT8oyTtPj9"
                }
                alt=""
              />
              <b className="hover:text-[#7000FF]">salomatlik </b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={
                  "https://i.pinimg.com/736x/e3/41/af/e341af9ddb43931e5d04f31fe6f4b64c.jpg"
                }
                alt=""
              />
              <b className="hover:text-[#7000FF]">uy-ro'zg'or buyumlari</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2OhLwEUbYpTZ5q1fjsqDz3iCADxfb9AWCw&s"
                }
                alt=""
              />
              <b className="hover:text-[#7000FF]">avtotovarlar</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={
                  "https://img.freepik.com/premium-vector/pile-sports-balls-soccer-basketball-volleyball-tennis-ball-cartoon-vector-balls-white-background_647443-1221.jpg?semt=ais_hybrid"
                }
                alt=""
              />
              <b className="hover:text-[#7000FF]">sport va hordiq</b>
            </div>
            <div className="flex items-center gap-2 hover:bg-slate-200/70 w-full p-2 pr-8 transition-all ease-in-out rounded-md cursor-pointer">
              <img
                width={"35px"}
                src={
                  "https://agro-olam.uz/wp-content/uploads/2019/12/book-clip-art-books-png-image-with-transparency-background.jpg"
                }
                alt=""
              />
              <b className="hover:text-[#7000FF]">kitoblar</b>
            </div>
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
