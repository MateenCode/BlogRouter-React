import React, { Component } from 'react';
import '../styles/App.css';


 export default class ShowPost extends Component {

   constructor(props) {
     super(props)
     this.state = {
       name: '',
       title: '',
       blog: ''
     }
   }

   componentDidMount() {
     const { id } = this.props.match.params;
     const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
     fetch(URL).then(results => {
           return results.json();
         }).then(data => {
           this.setState({
             name: data.name,
             title: data.title,
             blog: data.blog
           });
         })
   }



  render() {
    return (
      <div>
      <div className="display">
      <p>Name:</p>
       <h2>{this.state.name}</h2>
       <p>Title:</p>
       <h2>{this.state.title}</h2>
       <p>Sheesh:</p>
       <h2>{this.state.blog}</h2>
       </div>
      </div>
    );
  }
  }
