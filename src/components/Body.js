import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const cors = "https://proxy.cors.sh/";

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);

    setRestaurantData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(
    //   jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
  };

  if (restaurantData.length === 0) {
    return <Shimmer />;
  }

  function filterRating() {
    setFilteredData(restaurantData.filter((res) => res.info.avgRating >= 4.5));
  }

  function GetRestraunt() {
    setFilteredData(
      restaurantData.filter((rest) =>
        rest?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setSearchText("");
  }

  // console.log(filteredData);

  return (
    <div className="p-3">
      <div className="flex justify-items-center flex-wrap">
        <div className="mx-5">
          <input
            className="border-blue-500 border-2 md:m-2 p-2 rounded-md focus-within:border-blue-500 w-8/12 md:4/12 "
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="m-2 p-2 border-blue-500 border-2 bg-transparent rounded-lg text-blue-500 hover:text-white hover:bg-blue-500"
            onClick={GetRestraunt}
          >
            Search
          </button>
        </div>
        <div className="">
          <button
            className="m-2 p-2 border-blue-500 border-2 bg-transparent rounded-lg text-blue-500 hover:text-white hover:bg-blue-500"
            onClick={() => filterRating()}
          >
            4.5+ Rating
          </button>
        </div>
      </div>

      <div className="flex m-4 flex-wrap gap-5">
        {filteredData.map((rest) => (
          <Link key={rest?.info?.id} to={`/restaurants/${rest.info.id}`}>
            <RestaurantCard
              key={rest.info.cloudinaryImageId}
              data={rest.info}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
