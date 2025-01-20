function Cards({ img, price, title, creationAt, setPage, page }) {
  return (
    <div
      onClick={() => {
        setPage(page);
      }}
      className="flex flex-col gap-4 w-[250px] mt-10 h-[370px] border"
    >
      <div>
        <img className="w-[250px]" src={img} alt="img" />
      </div>
      <div className="pl-5">
        <p className="text-[20px] font-medium">${price}</p>
        <h3 className="font-bold">{title}</h3>
        <h3 className="font-bold">{creationAt}</h3>
      </div>
    </div>
  );
}

export default Cards;
