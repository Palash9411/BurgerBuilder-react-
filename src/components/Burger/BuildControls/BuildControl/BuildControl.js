import React from 'react';
import classes from '../BuildControl/BuildControl.css'


const BuildControl = (props) =>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.added}>More</button>
        <button className={classes.Less}  disabled={props.disabled}onClick={props.removed}>Less</button>
    </div>
)


export default BuildControl ;