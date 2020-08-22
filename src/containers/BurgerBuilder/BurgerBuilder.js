import React,{ Component } from "react"
import Aux from '../../hoc/auxillaryComp'
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls"

const INCREDIENT_PRICE ={
    salad : 0.5 ,
    cheese : 0.5 ,
    meat :1.3,
    bacon : 0.7
}

class BurgerBuilder extends Component{

    // adding state using constructor 

    // constructor(props){
    //     super(props)
    //     this.state = {..}
    // }

    // another method for initialising state  
    state ={
        incredients : {
            salad : 0 ,
            bacon : 0 ,
            meat : 0 ,
            cheese : 0 
        },
        price : 4,
        purchasable : false 
    }

    updatePurchaseState (incredients) {
        
        const sum = Object.keys(incredients).map(igKey =>{
                return incredients[igKey];
        }).reduce((sum,el)=>{
            return sum+el ;
        },0)
        this.setState({purchasable : sum>0})
    }
    addIncredientHandler = (type) =>{
        let oldCount = this.state.incredients[type];
        let updatedCount = oldCount + 1 ;
        const updatedIncredients = {
            ...this.state.incredients
        }
        updatedIncredients[type ] = updatedCount ;
        const priceAddition = INCREDIENT_PRICE[type];
        const newPrice = this.state.price + priceAddition ;
        this.setState({price : newPrice , incredients : updatedIncredients});
        this.updatePurchaseState(updatedIncredients);
        }
    
    removeIncredientHandler = (type) =>{
        
        let oldCount = this.state.incredients[type];
        if(oldCount <= 0 ){
            return ;
        }
        let updatedCount = oldCount - 1 ;
        const updatedIncredients = {
            ...this.state.incredients
        }
        updatedIncredients[type ] = updatedCount ;
        const priceDeduction = INCREDIENT_PRICE[type];
        const newPrice = this.state.price - priceDeduction ;
        this.setState({price : newPrice , incredients : updatedIncredients});
        this.updatePurchaseState(updatedIncredients);
    }
    render(){
        const disabledInfo = {
            ...this.state.incredients
        }
        for( let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0 ;
        }
        return (
            <Aux>
                 <Burger incredients ={this.state.incredients}/>
                <BuildControls
                incredientAdded = {this.addIncredientHandler} 
                incredientRemoved = {this.removeIncredientHandler}
                disabled={disabledInfo}
                price={this.state.price}
                purchasable = {this.state.purchasable}/>
            </Aux>
           
        );
    }
}

export default BurgerBuilder ;