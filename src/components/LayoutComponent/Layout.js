import React from 'react';
import classes from './Layout.css'
import Aux from '../../hoc/auxillaryComp';
const Layout = (props) =>
  <Aux>
    <div>Toolbar , Sidebar ,backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
</Aux>
 
export default Layout ;