import React, { useState } from "react";
import ItemsList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setExpandItems }) => {
  const showItemsFunc = () => {
    setExpandItems(null);
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg my-4 m-auto p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={showItemsFunc}
        >
          <span className="font-extrabold text-xl">
            {data?.title} ( {data.itemCards.length} )
          </span>
          <span>{showItems ? "⬆" : "⬇"}</span>
        </div>
        {/* accoridin body */}
        {showItems ? <ItemsList items={data.itemCards} /> : null}
      </div>
    </div>
  );
};
export default RestaurantCategory;
