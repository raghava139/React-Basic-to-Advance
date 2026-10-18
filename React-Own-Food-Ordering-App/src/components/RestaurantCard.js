import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";
import { UserContext } from "../utils/userContext";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id } =
    resData?.info;

  const {curr_name} = useContext(UserContext)
  return (
    <Link to={"/restaurants/" + id}>
      <div className="m-4 p-4 w-[250px] bg-gray-10 rounded-2xl border-2 hover:border-7 border-gray-100">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="res-image"
          className="p-4 w-[400] rounded-xl"
        />
        <div className="image-card-content">
          <h3 className="text-shadow-2xs font-bold">{name}</h3>
          <h4 className="truncate">{cuisines?.join(",")}</h4>
          <h4 className="font-light italic px-1">Rating - {avgRating} </h4>
          <h4 className="text-green-950">{costForTwo}</h4>
          <h4>{sla?.deliveryTime} mintues</h4>
          <h4 className="font-bold text-xl">{curr_name}</h4>
        </div>
      </div>
    </Link>
  );
};


// High Order Component (HOC)
export const HighRatedItems = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-700 text-white p-1 m-1 rounded-lg"> High Rating Items</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
