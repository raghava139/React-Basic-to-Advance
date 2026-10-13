import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log('child constructor')
  }

  componentDidMount(){
    console.log('child component did mount')
  }
  render() {
    console.log('child render')
    return (
      <div className="user-card">
        <h1>count-class: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase
        </button>
        <h1>count2-class: {this.state.count2}</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Kadapa</h3>
        <h3>Contact: 9676324174</h3>
      </div>
    );
  }
}

export default UserClass;
