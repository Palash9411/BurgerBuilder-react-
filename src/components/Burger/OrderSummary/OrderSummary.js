import React from 'react';
import Aux from '../../../hoc/auxillaryComp';
import Button from '../../UI/Button/Button';

const orderSummary = (props)=> {

    const incredientSummary = Object.keys(props.incredients).map(igKey =>{
    return <li key={igKey}>
        <span 
             style={{textTransform : 'capitalize'}}>
        {igKey} </span> 
             :{props.incredients[igKey]}
        </li>
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following incredients:</p>
            <ul>
                {incredientSummary}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)}$</strong></p>
            <p>Continue to Checkout ?</p>
            <Button btntype="Danger" clicked ={props.orderCancel}>CANCEL</Button>
            <Button btntype="Success" clicked={props.orderContinue}>CONTINUE</Button>
        </Aux>
        
    );
}
export default orderSummary ;