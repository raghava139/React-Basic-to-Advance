import { useCallback, useState } from "react";
import ChildButton from "./ChildButton";

const CallBackPerformance = () => {
  const [count, setCount] = useState(0);
  const testingbtn = useCallback(() => {
    console.log("use Callback Function");
  },[]);

  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      <h1>Use Callback Usage</h1>
      <h3>count:{count}</h3>
      <button
        type="button"
        className="bg-red-400 p-3 m-3 rounded-2xl text-white"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <ChildButton testingbtn={testingbtn} />
    </div>
  );
};
export default CallBackPerformance;

