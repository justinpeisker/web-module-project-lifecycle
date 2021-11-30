import React from 'react';

class Follower extends React.Component{

    render(){
        
        const {followers} = this.props

        return(
            <div>
                <img src= {followers.avatar_url} alt= "Image of GitHub follower" />
                <a target= "_blank" href= {followers.html_url}> <h4> {followers.login} </h4> </a>
            </div>
        )
    }
}

export default Follower;