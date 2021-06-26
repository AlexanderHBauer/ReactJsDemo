import React from 'react';

function MiniSlide(props){
    return (
        <div className="Slide">
            <div className="MiniSlideDiv center">
                <img className="MiniSlideImg center" src={props.imgSrc} alt="couldn't load image."></img>
            </div>
        </div>
    )
}

export default MiniSlide;