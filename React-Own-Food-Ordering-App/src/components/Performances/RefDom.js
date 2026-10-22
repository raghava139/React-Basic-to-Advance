import { useRef, useState } from "react";
const ReferencePerformance = () => {
  let [y, setY] = useState(0);
  let x = 0;

  const z = useRef(0);

  console.log("component rendering...");

   const inputRef = useRef(null);
  return (
    <div className="m-4 p-2 w-96 h-96 border border-black">
      <h1 className="font-bold">use Ref Usage:</h1>

      {/* x Variable  */}
      <h1 className="font-bold">
        <button
          className="bg-green-400 p-3 m-3 rounded-md"
          onClick={() => {
            x = x + 1;
            console.log("normal-variable", x);
          }}
        >
          Increase X
        </button>
        Let : {x}
      </h1>

      {/* {state handling} */}
      <h1 className="font-bold">
        <button
          className="bg-green-400 p-3 m-3 rounded-md"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        State : {y}
      </h1>

      {/* {use Ref} */}
      <h1 className="font-bold">
        <button
          className="bg-green-400 p-3 m-3 rounded-md"
          onClick={() => {
            z.current = z.current + 1;
            console.log("use-ref", z);
          }}
        >
          Increase Z
        </button>
        use Ref : {z.current}
      </h1>
    </div>
  );
};
export default ReferencePerformance;
