// import resList from "../utils/mockData";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  //state variable - Super powerful variable;'
  let [listOfRestaurants, setRestaurants] = useState(resList);
  // console.log(<Body/>)
  // normal js variable
  // let listOfRestaurants = [];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaruants = listOfRestaurants.filter((data) => {
              return data?.card?.card?.info?.avgRating > 4;
            });
            setRestaurants(filterRestaruants);  
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((data, index) => {
          return (
            <RestaurantCard key={data?.card?.card?.info?.id} resData={data} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
