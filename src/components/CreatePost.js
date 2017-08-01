import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


 export default class CreatePost extends Component {
  render() {
    return (

      <div className="CreatePost">

      <h1>Post Seesh</h1>

      <form>

         <h3>Author's Name</h3>
         <input className="authName"></input>
         <p>you can use a pen name if you like.</p>
         <h3>Title</h3>
         <input className="postTitle" placeholder="Title"></input>
         <h3>Write your blog...</h3>
         <textarea className="blogPost" />
         <div>
           <input className="btn" onClick={this.addThisPost} type="submit"></input>

       </div>


      </form>


      </div>
    );
  }
}
