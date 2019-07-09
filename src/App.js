import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import Home from "./home"



var newName;   var CaptainName;
class App extends React.Component{
constructor(props){
  super(props);
}

nameChanger = (e)=>{
  e.preventDefault();
  newName = e.target.value;
}

CaptainPlayer = (e)=>{
  e.preventDefault();    
  CaptainName = e.target.value;
  // console.log(PlayerNumber)
}


  render(){
// console.log(this.props.posts.addPlayer)
  return (
    <div className="App">
      <header className="App-header">
      {/* <Home /> */}
      <div className="rightdiv" >
              {
                this.props.posts.addPlayer.map((k,s)=>{
                    return(
                      <p>{ s + ". " + this.props.posts.addPlayer[s] } </p>
                      );
                 })
              }  
        </div>
        <img src={require("./logoknife.png")} className="App-logo" alt="logo" style={{animation:"App-logo-spin infinite 1.5s linear"}} />
            <div className="leftdiv" >
            {
                this.props.posts.addPlayer.map((k,s)=>{
                    return(
                      <p>{ s + ". " + this.props.posts.addPlayer[s] } </p>
                      );
                 })
              }  
        </div>
        <br /><br /><br /> 
            <input type="Text" placeholder="Player Name" onChange={this.nameChanger} /><br />
            <input type="button" value="Add Player"  onClick={this.props.Add_name} /><br />
            <input type="text" placeholder="Captain Name" onChange={this.CaptainPlayer} /><br />
            <input type="button" value="Captain Name"  onClick={this.props.Add_Captain} />
            <h3>Captain Name -> {this.props.posts.addCaptain[this.props.posts.addCaptain.length-1]}</h3>
          
      </header>
    </div>
  );
}


  }

  const mapSateToProps = (state)=>{
    console.log(state)
    return{
      posts:state
    }
  }

  const mapDispachToProps = (dispach) =>{
    return{
      Add_Captain:(e)=>{
        e.preventDefault();
        dispach({type:'ADD_CAPTAIN',Captain:CaptainName})
      },

      Add_name:(e)=>{
        e.preventDefault();
        dispach({type:'ADD_NAME',name:newName})
      }
    }
  }

export default connect(mapSateToProps,mapDispachToProps )(App);
