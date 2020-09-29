import React from 'react'

import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationFolder/NavigationFolder';
import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop' ;
import Aux from '../../../hoc/auxillaryComp'

const sideDrawer = (props)=>{
    let attachedClasses  = [classes.SideDrawer , classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDrawer , classes.Open]
    }

    return (
        <Aux>
        <Backdrop show = {props.open} hideModal={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                 <Logo/>
            </div>
            <nav>
                <NavigationItem/>
            </nav>
        </div>
        </Aux>
    );
}


export default sideDrawer ;