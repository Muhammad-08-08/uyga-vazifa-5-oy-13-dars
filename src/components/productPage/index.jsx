import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Xatolik:", error));
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <img src={product.images[0]} alt={product.title} width="300" />
          <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Narxi: {product.price}</p>
          </div>
        </div>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
}

export default ProductDetail;
