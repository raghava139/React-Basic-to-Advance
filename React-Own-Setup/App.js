import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1',{id:"headin1g"},'raghavendra');

// console.log(heading)
// jsx => html like syntax or xml like syntax
// const jsxheading = <h1 id="heading">raghavendra</h1>

// component composition
const Title = () => <h1>title element</h1>;
const HeadingComponent = () => {
  return (
    <div>
      {/* {title} */}
      {Title()}
      <h1>react functional component </h1>;
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
