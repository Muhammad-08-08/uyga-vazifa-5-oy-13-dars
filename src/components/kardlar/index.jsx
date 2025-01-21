import { useEffect, useState } from "react";
import Cards from "../Cards";
import { Link } from "react-router";

function Kardlar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCard = (id) => {
    setData(data.filter((card) => card.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-[1519px] px-40 py-5 bg-white mx-auto flex flex-wrap items-center justify-between">
      {loading && (
        <div className="w-16 h-16 border-4 border-slate-100 border-t-slate-300 border-t-2 animate-spin rounded-full mx-auto"></div>
      )}
      {data.map((item) => {
        return (
          <Link key={item.id} to={`/product/${item.id}`}>
            <Cards
              id={item.id}
              rasm={item.images}
              malumot={item.description}
              rating={item.rating}
              oyiga_tolov={item.price / 12}
              eski_narx={item.price}
              chegirma_narx={item.price * 0.8}
              onDelete={deleteCard}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Kardlar;
