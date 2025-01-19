import { useEffect, useState } from "react";
import Cards from "../Cards";

function Input_modal({ setInput }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div
      onClick={() => {
        setInput(false);
      }}
      className="absolute z-10 w-full bg-black/50 flex justify-center items-start"
    >
      <div
        className="w-[600px] bg-white flex justify-around flex-wrap p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {data.map((item, index) => {
          return (
            <Cards
              key={index}
              img={item.images}
              price={item.price}
              title={item.title}
              creationAt={item.creationAt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Input_modal;
