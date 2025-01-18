import { useEffect, useState } from "react";
import uzum_carousel from "../../assets/uzum_carousel.png";
import uzum_carousel1 from "../../assets/uzum_market_img1.png";
import uzum_carousel2 from "../../assets/uzum_market_img2.png";
import uzum_carousel3 from "../../assets/uzum_market_img3.png";
import chapga_belgisi from "../../assets/chapga_belgisi.svg";
import onga_belgisi from "../../assets/onga_belgisi.svg";

function Carousel() {
  const [carousel, setCarousel] = useState(0);

  const imgs = [
    {
      rasm: uzum_carousel,
    },
    {
      rasm: uzum_carousel1,
    },
    {
      rasm: uzum_carousel2,
    },
    {
      rasm: uzum_carousel3,
    },
  ];

  useEffect(() => {
    const carousel_vaqti = setInterval(() => {
      if (carousel < imgs.length - 1) {
        setCarousel(carousel + 1);
      } else if (imgs.length === 4) {
        setCarousel(carousel - 3);
      }
    }, 3000);

    return () => clearInterval(carousel_vaqti);
  }, [carousel]);

  const chap = () => {
    if (carousel > 0) {
      setCarousel(carousel - 1);
    }
  };

  const ong = () => {
    if (carousel < imgs.length - 1) {
      setCarousel(carousel + 1);
    }
  };

  return (
    <div className="w-[1519px] px-40 py-6 bg-white mx-auto">
      <div className="flex items-center w-max justify-between relative">
        {carousel > 0 && (
          <button
            className="w-12 h-12 p-4 text-[25px] box-border rounded-full bg-[#36364040] absolute left-4"
            onClick={chap}
          >
            <img src={chapga_belgisi} alt="chapga belgisi" />
          </button>
        )}
        <img
          className="w-[1190px] h-[413px] rounded-xl"
          src={imgs[carousel].rasm}
          alt={`carousel ${carousel + 1}`}
        />
        {carousel < imgs.length - 1 && (
          <button
            className="w-12 h-12 p-4 text-[25px] box-border rounded-full bg-[#36364040] absolute right-4"
            onClick={ong}
          >
            <img src={onga_belgisi} alt="chapga belgisi" />
          </button>
        )}
      </div>
      <div className="flex w-max gap-4 mx-auto translate-y-[-13px]">
        {imgs.map((item, index) => {
          return (
            <img
              onClick={() => {
                setCarousel(index);
              }}
              className={`w-[50px] cursor-pointer h-[3px] ${
                carousel === index ? "border-white border-[2px]" : ""
              }`}
              src={item.rasm}
              alt={`item ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
