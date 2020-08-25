import React from 'react'

import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationFolder/NavigationFolder';
import classes from './Sidedrawer.css';

const sideDrawer = (props)=>{
    return (
        <div className={classes.SideDrawer}>
            <Logo/>
            <nav>
                <NavigationItem/>
            </nav>
        </div>
    );
}


export default sideDrawer ;