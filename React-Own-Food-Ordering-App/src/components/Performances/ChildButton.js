import React from "react";

const ChildButton = React.memo(({ testingbtn }) => {
  console.log("child rendered");
  return (
    <button
      type="button"
      className="bg-gray-400 p-3 rounded-2xl text-white"
      onClick={testingbtn}
    >
      childBtn
    </button>
  );
});

export default ChildButton;
