import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [expandItems, setExpandItems] = useState(null);

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
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories?.map((category, index) => {
        //Controlled Component
        return (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index === expandItems}
            setExpandItems = {()=> setExpandItems(expandItems === index ?  null : index)}
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
