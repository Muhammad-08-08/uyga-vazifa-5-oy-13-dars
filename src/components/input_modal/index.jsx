import { useEffect, useState } from "react";
import Cards from "../Cards";

function Input_modal() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/products").then((response) => {
      response.json().then((data) => {
        setData(data);
      });
    });
  }, []);
  return (
    <div className="w-full static  bg-gray-300/50  flex justify-center">
      <div className="w-[600px] bg-white flex justify-around flex-wrap">
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
