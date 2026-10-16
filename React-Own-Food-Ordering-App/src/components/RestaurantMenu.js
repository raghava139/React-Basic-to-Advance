import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //custom Hook
  const resInfo = useRestaurantMenu(resId);

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
      <h1>{name}</h1>
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
