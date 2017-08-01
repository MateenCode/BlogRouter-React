import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './BaseLayout'
import CreatePost from './CreatePost'
import PostList from './PostList'
import ShowPost from './ShowPost'
import MainPage from './MainPage'





class App extends Component {
  render() {
    return (
      <div className="App">

      <BrowserRouter>
         <BaseLayout>
           <Switch>

           <Route exact path='/' component={MainPage} />
           <Route path='/CreatePost' component={CreatePost}/>
           <Route exact path='/ShowPost' component={PostList} />
           <Route path='/ShowPost/:PostList' component={ShowPost} />


           </Switch>
         </BaseLayout>
       </BrowserRouter>


      </div>
    );
  }
}

export default App;
