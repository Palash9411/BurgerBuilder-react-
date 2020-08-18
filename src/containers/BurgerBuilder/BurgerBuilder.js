import React,{ Component } from "react"
import Aux from '../../hoc/auxillaryComp'
import Burger from '../../components/Burger/Burger'
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
            bacon : 1 ,
            meat : 2 ,
            cheese : 2 
        }
    }
    render(){
        return (
            <Aux>
                 <Burger incredients ={this.state.incredients}/>
                 <div>Build Controls</div>
            </Aux>
           
        );
    }
}

export default BurgerBuilder ;