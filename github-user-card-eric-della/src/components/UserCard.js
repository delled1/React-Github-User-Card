import React from 'react';
import axios from 'axios'
import "./UserCard.css"

class UserCard extends React.Component {
    constructor () {
        super();
        this.state = {
            name: "",
            username: "",
            location: "",
            profile: "",
            followers: "",
            following: "",
            bio: "",
            userSearch: "",
            avatar: ""
    
        }
    }

    handleChanges = (e) => {
        this.setState({
            ...this.state,
            userSearch: e.target.value
        })
    }

    fetchUser = () => {
        axios.get(`https://api.github.com/users/${this.state.userSearch}`)
        .then(res => {
            this.setState({
                ...this.state,
                name: res.data.name,
                username: res.data.login,
                location: res.data.location,
                profile: res.data.html_url,
                followers: res.data.followers,
                following: res.data.following,
                bio: res.data.bio,
                avatar: res.data.avatar_url
            });
        })
        .catch(err => console.log(err))
    }
    
    componentDidMount() {
      axios.get('https://api.github.com/users/delled1')
        .then(res => {
          console.log(res.data)
          this.setState({
            name: res.data.name,
            username: res.data.login,
            location: res.data.location,
            profile: res.data.html_url,
            followers: res.data.followers,
            following: res.data.following,
            bio: res.data.bio,
            avatar: res.data.avatar_url
          })
        })
        .catch(err => {
          console.log(err)
        })
    }

    render () {
        return (
            <div>
            <input
            placeholder="Search Github User"
            type="text"
            value={this.state.userSearch}
            onChange={this.handleChanges}

            
            />
            <button onClick={this.fetchUser}>Search User</button>
            
                <div className="card">
                    <div>
                    <h2 className="name">{this.state.name}</h2>
                    <img className="image" src={this.state.avatar} />
                    <p>Username: {this.state.username}</p>
                    <p>Location: {this.state.location}</p>
                    {/* <p>Profile: {this.state.profile}<a href={this.state.profile}/></p> */}
                    <p>Profile: <a href={this.state.profile}>{this.state.profile}</a></p>
                    <p>Followers: {this.state.followers}</p>
                    <p>Following: {this.state.following}</p>
                    <p>Bio: {this.state.bio}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default UserCard