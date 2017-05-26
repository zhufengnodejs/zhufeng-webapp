import React,{Component} from 'react';
import Home from '../container/Home';
import {
    HashRouter as Router,//路由类型
    Route,//小路由
    Link
} from 'react-router-dom';

export default class RouterMap extends Component{
  render(){
      return (
          <Router>
              <Route path="/" component={Home}/>
          </Router>
      )
  }
}