import React from 'react';

function Slide(props){
    return (
        <div className="Slide">
            <h1 className="slideH1">{props.header}</h1>
            <p>{props.body}</p>
            <div className="SlideContent center">
                <img className="SlideImg center" src={props.imgSrc} alt="couldn't load ..."></img>
            </div>
        </div>
    )
}
// can later be called as <Slide />
export default Slide;