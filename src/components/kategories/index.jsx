import { useEffect, useState } from "react";

function Kategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div>
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.id}>
            <img className="w-[300px]" src={category.image} alt="" />
            <h2>{category.name}</h2>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Kategories;
