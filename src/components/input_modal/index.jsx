import { useEffect, useState } from "react";
import Cards from "../Cards";

function Input_modal({ setInput }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (!response.ok) throw new Error("Ma'lumotni yuklashda xatolik!");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <div
        onClick={() => setInput(false)}
        className="w-full h-[100vh] bg-slate-500 opacity-0 fixed top-0 left-0"
      ></div>
      <div
        onClick={() => setInput(false)}
        className="fixed z-50 w-full bg-black/50 flex justify-center items-start"
      >
        <div
          className="w-[600px] h-[100vh] scroll-m-0 bg-white flex justify-around flex-wrap p-4 rounded-lg overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {loading && (
            <div className="w-16 h-16 border-4 border-slate-100 border-t-slate-300 border-t-2 animate-spin rounded-full "></div>
          )}
          {error && <p className="text-red-500">{error}</p>}
          {!loading &&
            !error &&
            data.map((item) => (
              <Cards
                key={item.id}
                rasm={item.images[0]}
                malumot={item.description}
                rating={item.rating}
                oyiga_tolov={(item.price / 12).toFixed(2)}
                eski_narx={item.price}
                chegirma_narx={(item.price * 0.8).toFixed(2)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Input_modal;
