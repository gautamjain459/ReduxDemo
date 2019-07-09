import React from "react";
import {connect} from "react-redux";

class Home extends React.Component{
    constructor(props){
        super(props);

    }
    
    
    render(){
        return(
            <div> 
              <h1>Cricket Team</h1>
              Captain :-> {this.props.posts[0].name}
            </div>
        );

    }
}

const mapSateToProps = (state)=>{
    return{
      posts:state.posts.slice()
    }
  }
export default connect(mapSateToProps)(Home);