import React from 'react' ;
import PropTypes from 'prop-types';
import classes  from './BurgerIncredient.css';

const BurgerIncredient = (props) => {
    let incredient = null ;
    switch(props.type){
        case('bread-bottom'):
            incredient = <div className={classes.BreadBottom}> </div>;
            break ;
        case('bread-top'):
            incredient = 
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds1}></div>
                </div>
            break;
        case('meat'):
            incredient = 
                <div className={classes.Meat}></div>
            break;
        case('cheese'):
        incredient = 
            <div className={classes.Cheese}></div>
        break;
        case('salad'):
        incredient = 
            <div className={classes.Salad}></div>
        break;
        case('bacon'):
        incredient = 
            <div className={classes.Bacon}></div>
        break;
        default :
        incredient = null ;
        
    }
    return incredient
};

BurgerIncredient.propTypes = { 
    type : PropTypes.string.isRequired
};
export default BurgerIncredient ; 