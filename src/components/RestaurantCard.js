import React from "react";

function RestaurantCard({ data }) {
  // console.log(data);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    data;

  return (
    <div className="w-full md:w-64 p-4 border-1 border-gray-400 shadow-xl bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        className="rounded-md "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-img"
      />
      <h2 className="font-bold text-2xl my-3">{name}</h2>
      <p className="text-gray-500">{cuisines.join(", ")}</p>
      <h4>{avgRating} Star</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{sla.lastMileTravelString}</h4>
    </div>
  );
}

export default RestaurantCard;
