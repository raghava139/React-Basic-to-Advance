import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId,
    );
    const response = await data.json();
    setResInfo(response?.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const {
    cuisines,
    // id,
    name,
    // cloudinaryImageId,
    costForTwoMessage,
    // avgRating,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card || {};
  console.log(itemCards);
  return (
    <div>
      <h1>{name} </h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.length > 0 &&
          itemCards?.map((res) => {
            const { name, id, price } = res?.card?.info || {};
            return (
              <li key={id}>
                {name} - {price}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
