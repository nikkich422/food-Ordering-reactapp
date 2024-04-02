import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../utils/useRestaurantMenu";
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { ShimmerCard } from "./ShimmerCard";

function RestaurantMenu() {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  // console.log(restInfo);
  if (restInfo === null) return <ShimmerCard />;

  console.log(restInfo);
  // console.log(restInfo?.cards[2]?.card?.card?.info);

  const { name, cuisines, expectationNotifiers, locality, sla } =
    restInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;
  // console.log(restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const itemcards2 =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemcards2);

  return (
    <div className="restaurant-menu">
      <div className="mx-auto w-full my-10 flex items-center justify-center">
        <div>
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="text-gray-500">{cuisines.join(", ")}</p>
          <p className="text-gray-500">
            {locality}, {sla.lastMileTravelString}
          </p>
        </div>
      </div>

      {itemcards2.map((card, index) => (
        <ItemCard
          key={index}
          data={card?.card?.card}
          index={index == showIndex ? true : false}
          setShowIndex={(data) =>
            data ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
    </div>
  );
}

export { RestaurantMenu };
