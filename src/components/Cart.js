import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(deleteItems());
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-bold m-4 md:m-8">
        Cart Details
      </h1>
      {cartItems.length == 0 && (
        <h1 className="text-center m-4 text-red-500">Cart is empty!!</h1>
      )}
      <div className="flex justify-end">
        {cartItems.length > 0 && (
          <button
            className="m-2 p-2 border-blue-500 border-2 bg-transparent rounded-lg text-blue-500 hover:text-white hover:bg-blue-500 mr-56"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="mb-4 border-b-2 p-2 flex flex-col-reverse md:flex-row items-center w-10/12 md:w-7/12 m-auto my-5"
        >
          <div className="w-10/12 flex gap-3 flex-col ">
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
              className="p-2"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item?.card?.info?.imageId
              }
              alt={item?.card?.info?.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
