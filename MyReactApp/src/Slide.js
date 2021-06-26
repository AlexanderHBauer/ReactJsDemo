import React from 'react';

function Slide(props){
    return (
        <div className="Slide">
            <h2>{props.header}</h2>
            <div className="SlideContent center">
                <img className="SlideImg center" src={props.imgSrc} alt="couldn't load image."></img>
            </div>
        </div>
    )
}

export default Slide;