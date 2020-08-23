import React from'react';
import classes from '../Button/Button.css';


const button = (props)=>(
<button
    className={[classes.ButtonEle ,classes[props.btntype]].join(' ')}
    onClick={props.clicked}>{props.children}
</button>
);

export default button ;