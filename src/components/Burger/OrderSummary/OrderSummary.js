import React, { Component } from 'react';
import Aux from '../../../hoc/auxillaryComp';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
   
    render () {
        const incredientSummary = Object.keys(this.props.incredients).map(igKey =>{
            return <li key={igKey}>
                <span 
                     style={{textTransform : 'capitalize'}}>
                {igKey} </span> 
                     :{this.props.incredients[igKey]}
                </li>
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following incredients:</p>
                <ul>
                    {incredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.price.toFixed(2)}$</strong></p>
                <p>Continue to Checkout ?</p>
                <Button btntype="Danger" clicked ={this.props.orderCancel}>CANCEL</Button>
                <Button btntype="Success" clicked={this.props.orderContinue}>CONTINUE</Button>
            </Aux>
            
        );
    }
}
export default OrderSummary ;