import { useEffect, useState } from "react";
import Cards from "../Cards";

function Kardlar() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState();
  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/products").then((response) => {
      response.json().then((data) => {
        setData(data);
      });
    });
  }, []);
  return (
    <div className="w-[1519px] px-40 py-5 bg-white mx-auto flex flex-wrap items-center justify-between">
      {data.map((item, index) => {
        return (
          <Cards
            key={index}
            img={item.images}
            price={item.price}
            title={item.title}
            creationAt={item.creationAt}
            setPage={setPage}
            page={page}
          />
        );
      })}
    </div>
  );
}

export default Kardlar;
