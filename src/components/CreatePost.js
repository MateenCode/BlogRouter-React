import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom'

 export default class CreatePost extends Component {

constructor(props){
  super(props);
  this.state={
    name:'',
    title:'',
    blog: '',
    submitted: false
  }
  this.SeeshAuthor = this.SeeshAuthor.bind(this)
  this.SeeshTitle = this.SeeshTitle.bind(this)
  this.SeeshText = this.SeeshText.bind(this)
  this.SeeshSubmit = this.SeeshSubmit.bind(this)
}

  SeeshAuthor(e){
    this.setState({
      name: e.target.value
    })
  }
  SeeshTitle(e){
    this.setState({
      title: e.target.value
    })
  }
  SeeshText(e){
    this.setState({
      blog: e.target.value
    })
  }

  SeeshSubmit(e){
    e.preventDefault()
    console.log('Sent', this.state);
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(r => {
      console.log(r, 'Work');
    }).catch(err => {
      console.log('error:', err);
    }).then(()=> {
      this.setState({
        name: '',
        title: '',
        blog: '',
        submitted: true
      })

    })

  }





  render() {

    if(this.state.submitted === true){
      return <Redirect to='/ShowPost' />
    }

    return (

      <div className="CreatePost">

      <h1>~Post SeeSh~</h1>

      <form onSubmit={this.SeeshSubmit} >

         <h3>Sheesh's Name</h3>
         <input  placeholder="Name" onChange={this.SeeshAuthor} value={this.state.name}></input>
         <p>you can use a pen name if you like.</p>
         <h3>Sheesh Title</h3>
         <input  placeholder="Sheesh" onChange={this.SeeshTitle} value={this.state.title} ></input>
         <h3>Write Your Sheesh...</h3>
         <textarea  cols="40" rows="10" placeholder="Twas A Dream.." onChange={this.SeeshText} value={this.state.blog}/>
         <div>
           <input className="btn" type="submit" ></input>

       </div>


      </form>


      </div>
    );
  }
}
