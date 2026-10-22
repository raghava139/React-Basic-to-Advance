import { useMemo, useState } from "react";
import findNthPrime from "../../utils/PrimeNumber";

const MemoPerformance = () => {
  const [state, setState] = useState(0);
  const [theme, setTheme] = useState(false);

  // const prime = () => {
  //   console.log('...prime')
  //   findNthPrime(state);
  // };
  const prime = useMemo(() => {
    console.log("prime still called");
    return findNthPrime(state);
  }, [state]);

  console.log("...rendering...");
  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black ${theme ? "bg-white" : "bg-gray-500"}`}
    >
      <h1>use Memo Usage...</h1>

      <button
        className="bg-amber-500 p-2 m-2 rounded-2xl text-white"
        onClick={() => {
          setTheme((prev) => !prev);
        }}
      >
        Toggle
      </button>
      <p>{prime}</p>
      <input
        type="number"
        onChange={(e) => setState(Number(e.target.value))}
        className="border-2 border-black p-2"
        value={state}
      />
    </div>
  );
};
export default MemoPerformance;
