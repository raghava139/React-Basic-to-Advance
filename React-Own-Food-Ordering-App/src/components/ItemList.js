import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { UserContext } from "../utils/userContext";
import { useDispatch } from "react-redux";
import {addItem} from '../utils/CartSlice'

const ItemsList = ({ items }) => {
  const { curr_name } = useContext(UserContext);

  const dispatch = useDispatch();

  const handleCartItems = (item) => {
    dispatch(addItem(item))
  };
  return (
    <div>
      {/* <h1 className="font-bold">{curr_name}</h1> */}
      {items?.map((item) => {
        return (
          <div key={item.card.info.id} className="text-left p-2">
            <div className="border-b border-gray-400 p-3">
              <div className="flex justify-between">
                <div>
                  {" "}
                  <span className="font-bold">{item.card.info.name}</span>
                  <p>{item.card.info.price}</p>
                  <p className="font-sans text-xs">
                    {" "}
                    {item?.card?.info?.description}
                  </p>
                </div>
                <div className="border-[1px] border-gray-400 shadow-md">
                  <div className="absolute">
                    <button
                      className="bg-black my-12 mx-10 text-white p-1 rounded-md shadow-2xl"
                      onClick={() => handleCartItems(item)}
                    >
                      {" "}
                      Add +
                    </button>
                  </div>
                  <img
                    src={CDN_URL + item.card.info?.imageId}
                    alt="image"
                    className="w-50"
                    height={300}
                  />
                </div>
              </div>
              <div> </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
