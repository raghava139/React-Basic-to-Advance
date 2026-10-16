import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


//Custom Hook
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData(resId);
  }, []);

  const fetchData = async (resId) => {
    const data = await fetch(MENU_API + resId);
    const response = await data.json();
    setResInfo(response?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
