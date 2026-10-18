// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserClassAPI from "./UserClassAPI-Call";
import User from "./User";
import { UserContext } from "../utils/userContext";

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       {/* <User name = {'raghavendra'} /> */}
//       <UserClass name={'rajesh babu'}/>
//     </div>
//   );
// };
// export default About;

class About extends React.Component {
  constructor(props){
    super(props)
    // console.log('parent constructor')
  }

  componentDidMount() {
  console.log("About mounted");

  // this.timer = setInterval(() => {
  //   console.log("set Interval");
  // }, 1000);
}

// componentWillUnmount() {
//   console.log("About unmounted");
//   clearInterval(this.timer);
// }
  render() {
    //console.log('parent render')
    return (
      <div>
        <h1>About Page</h1>
        <UserContext.Consumer>
          {
            ({curr_name})=><h1 className="font-bold">{curr_name}</h1>
          }
        </UserContext.Consumer>
        <User name = {'raghavendra'} />
        {/* <UserClass name={"rajesh babu"} /> */}
        {/* <UserClassAPI name={"rajesh babu"} /> */}
      </div>
    );
  }
}

export default About
