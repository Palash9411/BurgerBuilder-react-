import React ,{Component} from 'react';
import classes from './Layout.css'
import Aux from '../../hoc/auxillaryComp';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';
class Layout extends Component {
  state = {
    showSideDrawer : false 
  }
  sideDrawerClosedHAndler = () =>{
    this.setState({showSideDrawer : false })
  }
  sideDrawerToggleHandler = () =>{
    this.setState((previousState)=>{
      return {showSideDrawer:!previousState.showSideDrawer}
  });
}
  render(){
    return (
      <Aux>
      <Toolbar  drawerToggleClicked={this.sideDrawerToggleHandler}/>
      <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHAndler}/>
      <main className={classes.Content}>
          {this.props.children}
      </main>
  </Aux>
    )
  }
}
 
 
export default Layout ;