// React JS - General files (official)
import React, {useState} from 'react';
import './App.css';
import './index.js';
// React JS - custom elements
import Slide from './Slide';
import MiniSlide from './MiniSlide';
import Helpers from './Helpers';
// Images (static)
import slideImg001 from './myimages/test001.PNG';
import slideImg002 from './myimages/test002.jpg';
import slideImg003 from './myimages/test003.jpg';
import slideImg004 from './myimages/test004.jpg';


function App() {
  let counter = 0;
  let helper = new Helpers();
  let currentImgSource = slideImg002;
  let imgArr = helper.getImgArr();
  let [cntr, setCntr] = useState(1);
  let [currentImg, setcurrentImg] = useState(slideImg001);
  const nextImage = () => {
      for (let i = 0; i < imgArr.length; i++){
        if (currentImg === imgArr[i] && ((i+1) == imgArr.length)){
          currentImgSource = slideImg001;
            console.log("Used default image src.");
        }
        else if (currentImg === imgArr[i]){
          try {
            currentImgSource =  imgArr[i + 1];
            console.log(`Used nex img src: ${i+1}`)
            setCntr(cntr + 1);
          }
          catch {
            currentImgSource = slideImg001;
            console.log("Used default image src.");
          }
        }
        }
    setcurrentImg(currentImgSource);
    if (cntr == imgArr.length){
      cntr = 0;
    }
    //setCntr(cntr + 1);
  };

  return (
    <div className="mainDiv">
      <div className="previewSection">
        <button onClick={nextImage}>{cntr}</button>
        <MiniSlide header="Header 1" body="one" imgSrc={slideImg001}/>
        <MiniSlide header="Header 1" body="one" imgSrc={slideImg002}/>
        <MiniSlide header="Header 1" body="one" imgSrc={slideImg003}/>
        <MiniSlide header="Header 1" body="one" imgSrc={slideImg004}/>
      </div>
      <div className="currentSlideShown">
        <Slide header="Header 1" body="one" imgSrc={currentImg}/>
      </div>
    </div>
  );
}

export default App;
