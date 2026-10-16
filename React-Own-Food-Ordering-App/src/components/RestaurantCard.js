import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id } =
    resData?.info;
  return (
    <Link to={"/restaurants/" + id}>
      <div
        className="m-4 p-4 w-[250px] bg-blue-50 rounded-2xl hover:border-1 border-green-900 inset-shadow-olive-900"
      >
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
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
