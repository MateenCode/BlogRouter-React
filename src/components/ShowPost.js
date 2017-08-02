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

       <h1>{this.state.name}</h1>
       <p>{this.state.author}</p>
       <p>{this.state.blog}</p>



      </div>
    );
  }
  }
