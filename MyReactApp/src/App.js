// React JS - General files (official)
import React, {useState} from 'react';
import './App.css';
import './index.js';
// React JS - custom elements
import Slide from './Slide';
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
  let [cntr, setCntr] = useState(0);
  let [currentImg, setcurrentImg] = useState(slideImg001);
  const nextImage = () => {
      for (let i = 0; i < imgArr.length; i++){
        if (currentImg === imgArr[i] && ((i+1) == imgArr.length)){
          currentImgSource = slideImg001;
            console.log("Used default image src.")
            setCntr(cntr - imgArr.length);
        }
        else if (currentImg === imgArr[i]){
          try {
            currentImgSource =  imgArr[i + 1];
            console.log(`Used nex img src: ${i+1}`)
          }
          catch {
            currentImgSource = slideImg001;
            console.log("Used default image src.")
            setCntr(cntr - imgArr.length);
          }
        }
        }
    setcurrentImg(currentImgSource);
    setCntr(cntr + 1);
  };

  return (
    <div className="mainDiv">
      <div className="previewSection">
        <button onClick={nextImage}>{cntr}</button>
        <div>aaa</div>
      </div>
      <div className="currentSlideShown">
        <Slide header="Header 1" body="one" imgSrc={currentImg}/>
      </div>
    </div>
  );
}

export default App;
