import React from 'react';
import classes from '../NavigationFolder/NavigationFolder.css';
import NavigationItem from '../NavigationFolder/NavigationItem/NavigationItem';
const navigationItems  = () =>  (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' active>Burger Builder</NavigationItem>
      <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
) ;


export default navigationItems ;