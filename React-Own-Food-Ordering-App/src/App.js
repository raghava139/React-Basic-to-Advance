import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//----low Level for Fooder Ordering app----
//Header -> logo, navitems , cart
//Body -> cardContainer , cards;
//Footer -> copyright, links address;

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
