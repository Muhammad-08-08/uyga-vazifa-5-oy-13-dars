import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import star from "../../assets/star.png";

const ArrowLeft01Icon = (props) => (
  <svg
    className="rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#000000"}
    fill={"none"}
    {...props}
  >
    <path
      d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FavouriteIcon = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#ff0000"}
      fill={isFavorite ? "#ff0000" : "none"}
      onClick={() => setIsFavorite(!isFavorite)}
      style={{ cursor: "pointer" }}
      {...props}
    >
      <path
        d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Tick01Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#35c135"}
    fill={"none"}
    {...props}
  >
    <path
      d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShoppingBasketAdd01Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#000000"}
    fill={"none"}
    {...props}
  >
    <path
      d="M21.0524 11.5L21.3307 9.83981C21.5126 8.75428 21.6036 8.21152 21.3123 7.85576C21.0209 7.5 20.4854 7.5 19.4144 7.5H4.58564C3.51461 7.5 2.9791 7.5 2.68773 7.85576C2.39637 8.21152 2.48735 8.75428 2.66933 9.83981L3.87289 17.0194C4.27181 19.3991 4.47127 20.5889 5.28565 21.2945C6.10003 22 7.27396 22 9.62182 22H12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14 18H22M18 22L18 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

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
    <div className="max-w-[1200px] mx-auto py-10 px-6 bg-white shadow-md rounded-lg">
      {product ? (
        <div>
          <div className="flex flex-col gap-10 md:flex-row mb-6">
            <div>
              <h1 className="text-2xl font-bold text-[#1F2026] mb-3">
                {product.title}
              </h1>
              <div className="flex gap-4 w-max items-center mb-12">
                <div className="flex">
                  <img className="w-6" src={star} alt="" />
                  <img className="w-6" src={star} alt="" />
                  <img className="w-6" src={star} alt="" />
                  <img className="w-6" src={star} alt="" />
                  <img className="w-6" src={star} alt="" />
                </div>
                <p className="text-[14px] text-[#8B8E99]">4.9 (38 sharh)</p>
                <p className="text-[14px] text-[#8B8E99]">9 fotosurat</p>
                <p className="text-[14px] text-[#8B8E99]">+300 buyurtma</p>
              </div>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-[600px] h-[400px] rounded-lg shadow-sm border border-gray-200"
              />
            </div>
            <div className="border rounded-lg py-8 px-9 flex flex-col gap-5">
              <div className="flex gap-3 w-full items-center">
                <h2 className="text-3xl font-bold">
                  {(product.price * 0.8).toFixed(3)} so'm
                </h2>
                <del className="text-[14px] text-[#8B8E99]">
                  {product.price} 000 so'm
                </del>
              </div>
              <div className="flex gap-2 px-4 py-4 bg-slate-100 rounded-xl hover:bg-slate-200 cursor-pointer">
                <p className="bg-yellow-300 w-max px-2 rounded-md font-medium">
                  oyiga {(product.price / 12).toFixed(3)}{" "}
                  <span className="text-[12px]">so'mdan</span>
                </p>
                <p>muddatli to'lov</p>
                <ArrowLeft01Icon />
              </div>
              <div className="flex gap-3 items-center">
                <button className="px-16 py-4 bg-slate-100 rounded-xl hover:bg-slate-200 cursor-pointer">
                  1 klikda xarid qilish
                </button>
                <button className="px-4 py-4 bg-slate-100 rounded-xl hover:bg-slate-200 cursor-pointer">
                  <FavouriteIcon />
                </button>
              </div>
              <div>
                <button className="px-4 py-4 w-full bg-indigo-600 text-lg rounded-xl text-white hover:bg-indigo-500 cursor-pointer">
                  Savatga qo'shish
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <button className="px-3 py-3 bg-green-100 rounded-md">
                  <Tick01Icon />
                </button>
                <p>150 dona xarid qilish mumkin</p>
              </div>
              <div className="flex gap-2 items-center">
                <button className="px-3 py-3 bg-amber-100 rounded-md">
                  <ShoppingBasketAdd01Icon />
                </button>
                <p>Bu haftada 182 kishi sotib oldi</p>
              </div>
            </div>
          </div>
          <h2 className="text-center text-2xl font-medium mb-4">Mahsulot haqida ma'lumot</h2>
          <h2>{product.description}</h2>
        </div>
      ) : (
        <p className="text-center text-xl font-semibold text-gray-500">
          Yuklanmoqda...
        </p>
      )}
    </div>
  );
}

export default ProductDetail;
