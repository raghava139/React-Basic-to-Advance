import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
  resData?.card?.card?.info || {};
  return (
    <>
    {(cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla) &&
    <div
      className="res-card"
      style={{
        backgroundColor: "#f3e4e4",
        padding: "12px",
      }}
    >
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
        className="res-logo"
      />
      <div className="image-card-content">
        <h3>{name}</h3>
        <h4>{cuisines?.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} mintues</h4>
      </div>
    </div>
    }
    </>
  );
};

export default RestaurantCard;
