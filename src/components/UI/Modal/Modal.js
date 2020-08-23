import React from 'react';
import classes from '../Modal/Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/auxillaryComp';


const Modal = (props) => (

    <Aux>
        <Backdrop show={props.show} hideModal={props.modalClosed}/>
        <div className={classes.Modal}
        style={{
            transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.show ? '1':'0'
        }}>
            {props.children}
        </div>
    </Aux>
);

export default Modal