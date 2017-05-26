import React,{Component} from 'react';
//判断要显示哪一个路由
import RouterMap from '../routers';
export default class App extends Component{
  constructor(){
    super();
    this.state = {
        loading:false
    }
  }
  componentDidMount(){
      this.setState({loading:true});
  }
  render(){
      return (
          <div>
              {this.state.loading?<RouterMap/>:<div>正在加载</div>}
          </div>
      )
  }

}