import React from 'react';
import classes from './Layout.css'
import Aux from '../../hoc/auxillaryComp';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';
const Layout = (props) =>
  <Aux>
    <Toolbar/>
    <SideDrawer/>
    <main className={classes.Content}>
        {props.children}
    </main>
</Aux>
 
export default Layout ;