import React from 'react';

function Slide(props){
    return (
        <div className="Slide">
            <h2>{props.header}</h2>
            <p>{props.body}</p>
            <div className="SlideContent center">
                <img className="SlideImg center" src={props.imgSrc} alt="couldn't load image."></img>
            </div>
        </div>
    )
}
// can later be called as <Slide />
export default Slide;