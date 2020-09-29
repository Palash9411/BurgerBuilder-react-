import React from 'react';
import classes from '../Toolbar/Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationFolder/NavigationFolder';
import DrawerToggle from '../../Navigation/Sidedrawer/DrawerToggle/Drawertoggle'
const toolbar = (props)=>(
    <header className={classes.Toolbar}>
       <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar ;