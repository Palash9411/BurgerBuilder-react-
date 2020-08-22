import React from 'react';
// import classes from '.. BuildControls/BuildControls.css';
import classes from '../BuildControls/BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls  = [ 
    {label:'Salad' ,type: 'salad'},
    {label:'Bacon' ,type: 'bacon'},
    {label:'Cheese' ,type: 'cheese'},
    {label:'Meat' ,type: 'meat'}
]
const BuildControls = (props)=>(
    <div className={classes.BuildControls}>
        <p>Current Price : <strong>{props.price.toFixed(2)}$</strong></p>
        {controls.map(cntrl=>(
            <BuildControl 
                key={cntrl.label} 
                label={cntrl.label} 
                added={()=>props.incredientAdded(cntrl.type)}
                removed={()=>props.incredientRemoved(cntrl.type)}
                disabled ={props.disabled[cntrl.type]}
                
            />
        ))}
    <button disabled={!props.purchasable}className={classes.OrderButton}>ORDER NOW </button>
          
    </div>
);



export default BuildControls ;