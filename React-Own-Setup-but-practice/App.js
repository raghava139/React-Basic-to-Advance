import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "testing..");


// a functional component is a normal js function it return some jsx code; 
// a functional component is a normal js function it return react element;

// JSX => JSX is not html. it is a HTML like syntax , XML like syntax;;;
// JSX => React.creatElement => js Plain object => HTMLElement(render)

// our browser will not understand the jsx code
// now the parcel has package called babel;
// this babel is transpiler it converts jsx to react.createElement.

// component composition
// const Heading = () => <h1>hello</h1>;
// const MainLayout = () => {
//   return (
//     <div>
//       <Heading />
//       <h1> MainLayout component</h1>
//     </div>
//   );
// };

const Heading = () => <h1>hello</h1>;
const calc = 10 * 2
const MainLayout = () => {
  return (
    <div>
       {calc}
       {/* these 3 are same things  && we can write N times to reuse*/}
       <Heading/>
       <Heading></Heading>
      {Heading()}
      <h1> MainLayout component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainLayout />);
