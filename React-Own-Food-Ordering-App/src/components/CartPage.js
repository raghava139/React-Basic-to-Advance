import ItemsList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/CartSlice";

const CartPage = () => {
  //we are subscribing to the store;
  const cartItems = useSelector((store) => store.cart.items);

  // Dispatch an action for clear items;
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearItems());
  };
  return (
    <div>
      <div className=" w-60 m-auto">
        {cartItems.length > 0 && (
          <p className="font-bold text-2xl ">Cart Items </p>
        )}
        <div className="flex">
          {cartItems.length > 0 && (
            <button
              className="bg-yellow-300 text-black p-1 rounded-md shadow-2xs"
              type="button"
              onClick={clearCartItems}
            >
              {" "}
              X Clear all Items
            </button>
          )}
        </div>
      </div>

      <div
        className={`w-10/12 m-auto ${cartItems.length > 0 ? `border-2 border-gray-500` : "flex justify-center"}`}
      >
        {cartItems?.length > 0 ? (
          <ItemsList items={cartItems} />
        ) : (
          <p className="font-bold text-md">Cart Items are Empty...!</p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
