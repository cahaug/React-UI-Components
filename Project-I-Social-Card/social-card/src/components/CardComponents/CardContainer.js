import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    return (
        <div className="CardContain" onClick={()=>{window.location.replace("https://www.reactjs.org")}}>
            <CardBanner />
            <CardContent />
        </div>
    )
}


export default CardContainer;