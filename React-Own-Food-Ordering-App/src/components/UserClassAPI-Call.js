import React from "react";

class UserClassAPI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name:'raghavendra',
        location: 'Default'
      },
    };
    console.log('child constructor called ')
  }

  async componentDidMount() {
    console.log('child component did mount')
    //API Call
    const data = await fetch("https://api.github.com/users/raghava139");
    const response = await data.json();
    console.log(response);
    this.setState({
        userInfo:response
    })
  }
  
  componentDidUpdate(){
    console.log('update cycle...')
  }

  componentWillUnmount(){
    console.log('component will unMount called')
  }
  render() {
    console.log('child api renders')
    const {login, html_url, id,avatar_url} = this.state.userInfo
    return (
      <div className="user-card">
        <img src={avatar_url} width={200} height={200}/>
        <h2>Name: {login}</h2>
        <h3>URL: {html_url}</h3>
        <h3>ID: {id}</h3>
      </div>
    );
  }
}

export default UserClassAPI;
