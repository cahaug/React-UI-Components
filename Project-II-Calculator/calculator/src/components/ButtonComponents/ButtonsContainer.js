import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';


const ButtonsContainer = props => {
    return (
        <div>
            <div><ActionButton /> <Divide /></div>
            <div> <NumBtn7 /> <NumBtn8 /> <NumBtn9 /> <Multiply /></div>
            <div> <NumBtn4 /> <NumBtn5 /> <NumBtn6 /> <Subtract /></div>
            <div> <NumBtn1 /> <NumBtn2 /> <NumBtn3 /> <Add /></div>
            <div><ActionButton /> <Equals /></div>
        </div>
    )

}

export default ButtonsContainer;