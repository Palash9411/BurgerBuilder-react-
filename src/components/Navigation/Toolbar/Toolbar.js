import React from 'react';
import classes from '../Toolbar/Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationFolder/NavigationFolder';
const toolbar = (props)=>(
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar ;