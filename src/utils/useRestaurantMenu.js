import React, { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    // console.log(resId);
    fetchData();
  }, []);

  const fetchData = async () => {
    const cors = "https://proxy.cors.sh/";
    const cors2 = "https://http-cors-proxy.p.rapidapi.com/";
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    setRestInfo(jsonData?.data);
  };

  return restInfo;
};

export default useRestaurantMenu;
