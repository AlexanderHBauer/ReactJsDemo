import React from 'react';

function MiniSlide(props){
    return (
        <div className="Slide">
            <div className="SlideContent center">
                <img className="SlideImg center" src={props.imgSrc} alt="couldn't load image."></img>
            </div>
        </div>
    )
}

export default MiniSlide;