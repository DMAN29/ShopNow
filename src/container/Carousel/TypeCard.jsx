import React from "react";
import { Link } from "react-router-dom";

const TypeCard = ({ item }) => {
  return (
    <>
      <Link to={`/${item.category}`}>
        <div className="h-20 md:h-28 xl:h-32 bg-white text-center mx-3 shadow-xl my-2 rounded-xl cursor-pointer hover:translate-y-1">
          <img
            src={item.src}
            alt=""
            className="w-1/2 h-3/4 mx-auto py-2 object-cover"
          />
          <h4 className="text-xs md:text-sm xl:text-base">{item.category}</h4>
        </div>
      </Link>
    </>
  );
};

export default TypeCard;
