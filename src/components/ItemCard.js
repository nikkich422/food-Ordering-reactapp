import React, { useState } from "react";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ItemCard = ({ data, index, setShowIndex }) => {
  const { title, itemCards } = data;
  // console.log(itemCards);

  const dispatch = useDispatch();

  function onListClick() {
    setShowIndex(index);
  }

  function handleCartItems(items) {
    dispatch(addItems(items));
  }

  return (
    <div>
      <div
        className="w-10/12 md:w-7/12 m-auto my-5 flex justify-start bg-gray-200 rounded-lg items-center"
        onClick={onListClick}
      >
        <h1 className="w-2/3 font-bold  p-2  cursor-pointer px-4 inline-block">
          {title} ({itemCards.length})
        </h1>
        <div className="w-1/3 pl-32 flex justify-end pr-2">
          <ExpandMoreIcon />
        </div>
      </div>
      {index && (
        <div className="w-10/12 md:w-7/12 m-auto my-5">
          {itemCards.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="mb-4 border-b-2 p-2 flex flex-col-reverse md:flex-row items-center"
            >
              <div className="w-10/12 flex gap-3 flex-col m-2 md:m-0">
                <h2>{item?.card?.info?.name}</h2>
                <p>
                  ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </p>
                <p className="mb-2 text-gray-400">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className="relative w-10/12 md:w-2/12 bg-gray-300 rounded-md">
                <img
                  className="p-2 "
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    item?.card?.info?.imageId
                  }
                  alt={item?.card?.info?.name}
                />
                <button
                  onClick={() => handleCartItems(item)}
                  className="absolute left-1/3 top-3/4 bg-white border border-green-300 rounded-lg shadow-lg px-4 text-green-400 "
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemCard;
