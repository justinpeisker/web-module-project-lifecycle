import React from "react";
import Follower from './Follower';

class FollowerList extends React.Component{

    render(){

        
        return(
            <div>
                 <h2> FOLLOWERS: </h2>
                 <div className= 'follower'>
                     {
                         this.props.followers.map(follower => {
                             return (
                                 <Follower followers= {follower} />
                             )
                         })
                     }
                  
                 </div>
            </div>
        )
    }
}

export default FollowerList;