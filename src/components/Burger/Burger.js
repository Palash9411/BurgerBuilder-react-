import React from 'react'
import classes  from './Burger.css'
import BurgerIncredient from './BurgerIncredient/BurgerIncredient'
const Burger = (props)=>{
    let transformedIncredients  = Object.keys(props.incredients)
        .map(incKey =>{
            return [...Array(props.incredients[incKey])].map((_,i)=>{
                    return <BurgerIncredient   key={incKey+i} type ={incKey}/>
            })
        }).reduce((arr,el)=>{
            return arr.concat(el);
        },[]);

        if(transformedIncredients.length === 0){
            transformedIncredients = <p>Please start adding incredients</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIncredient   type="bread-top"/>
            {transformedIncredients}
            <BurgerIncredient   type="bread-bottom"/>
        </div>
    ) ;
}

export default Burger;