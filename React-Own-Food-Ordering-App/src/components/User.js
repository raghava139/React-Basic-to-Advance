import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("functional based unMount Call");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("unmount called");
    };
  }, []);
  return (
    <div className="user-card">
      <h3>functiona based</h3>
      <h1>count: {count}</h1>
      <h1>count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Kadapa</h3>
      <h3>Contact: 9676324174</h3>
    </div>
  );
};

export default User;
