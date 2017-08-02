import React, { Component } from 'react';
import '../styles/App.css';
import {Link, Route} from 'react-router-dom'


 export default class PostList extends Component {
    constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
  .then(r => r.json())
  .then(data => {
    this.setState({posts: data})
  })
}




  render() {
    return (
<div>
  <h1>~SheeShs~</h1>

          {this.state.posts.map((PostSeesh) => {
            return(
              <div>
              <div className="card" key={PostSeesh._id}>
                <div className="block">
                  <Link to={`/postlist/${PostSeesh._id}`} ><h4 className="title">{PostSeesh.title}</h4></Link>
                  <h6>{PostSeesh.name}</h6>
                  <p className="text">{PostSeesh.blog}</p>
                </div>
              </div>
            </div>
            )
          })}



</div>

    );
  }
  }
