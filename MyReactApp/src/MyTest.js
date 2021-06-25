import React from 'react';
import VaderPic from './myimages/vader_orig.jpg'

function MyTest(props){
    return (
        <div className="vaderDiv">
            <p>my prop: {props.name}</p>
            <img className="vaderImg" src={VaderPic} alt="vader should be here."></img>
        </div>
    )
}

export default MyTest;