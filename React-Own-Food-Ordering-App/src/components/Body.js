// import resList from "../utils/mockData";
// import resList from "../utils/mockData";
import RestaurantCard, { HighRatedItems } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { UserContext } from "../utils/userContext";

const Body = () => {
  //state variable - Super powerful variable;'
  let [listOfRestaurants, setRestaurants] = useState([]);
  let [SearchListofRests, setSearchList] = useState([]);
  let [searchText, setSearchText] = useState("");

  const { curr_name, setUserInfo } = useContext(UserContext);
  const HighRatingListItems = HighRatedItems(RestaurantCard);
  // console.log(<Body/>)
  // normal js variable
  // let listOfRestaurants = [];

  // console.log("inside component")

  useEffect(() => {
    // console.log('useEffect called')
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.44893755769859&lng=78.38797520846128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const response = await data.json();
    setRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ); // always original
    setSearchList(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ); // for initial load purpose;
  };

  // conditional rendering => if ? true : false;
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              const target = e.target.value;
              setSearchText(target);
            }}
          />
          <button
            className="px-4 bg-green-100 m-4"
            onClick={() => {
              const filteredRestrs = listOfRestaurants.filter((res) => {
                if (
                  res?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLocaleLowerCase())
                ) {
                  return res;
                }
              });
              setSearchList(filteredRestrs);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 bg-blue-100 m-4"
          onClick={() => {
            const filterRestaruants = listOfRestaurants.filter((data) => {
              return data?.info?.avgRating > 4;
            });
            console.log(filterRestaruants);
            setSearchList(filterRestaruants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      user Name:{" "}
      <input
        type="text"
        className="border-2"
        onChange={(e) => setUserInfo(e.target.value)}
        value={curr_name}
      />
      <div className="flex flex-wrap">
        {SearchListofRests?.map((data, index) => {
          const avgRating = data?.info.avgRating;
          if (avgRating <= 4) {
            return (
              <HighRatingListItems
                key={data?.card?.card?.info?.id || index}
                resData={data}
              />
            );
          } else {
            return (
              <RestaurantCard
                key={data?.card?.card?.info?.id || index}
                resData={data}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Body;
