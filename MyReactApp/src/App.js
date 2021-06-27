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

  // Custom fuctionality code
  //let currentHeader = "Test Header";
  let helper = new Helpers();
  let currentImgSource = slideImg002;
  let imgArr = helper.getImgArr();
  // React JS "useState" variables
  let [cntr, setCntr] = useState(1);
  let [currentImg, setcurrentImg] = useState(slideImg001);
  let [currentHeader, updateHeader] = useState("Test Header");
  // Manipulating the state variables
  const nextImage = (imgSrc) => {
    for (let i = 0; i < imgArr.length; i++){
        if (currentImg === imgArr[i] && ((i+1) == imgArr.length)){
          currentImgSource = slideImg001;
            setCntr(cntr - cntr + 1);
        }
        else if (currentImg === imgArr[i]){
          try {
            currentImgSource =  imgArr[i + 1];
            setCntr(cntr + 1);
          }
          catch {
            currentImgSource = slideImg001;
            setCntr(cntr - cntr + 1);
          }
        }
        }
    // Set new value for "currentImg" state via the value of currentimgSource
    setcurrentImg(currentImgSource);
  };

  const getSpecificImage = (specImgSrc) => {
    // Test if a specific source is given and break if necessary
    currentImgSource = specImgSrc;
    // Reset Counter to 1 => the "index" of the first image
    cntr = 1;
    // Set counter to adjusted index of new image source
    setCntr(cntr + helper.findArrayIndex(specImgSrc));
    // Set new value for "currentImg" state via the value of currentimgSource
    setcurrentImg(currentImgSource);
    }

    const updateMainSlide = (header, specImgSrc) => {
      updateHeader(header);
      getSpecificImage(specImgSrc);
    }

  // Define Input Values
  const header1 = "Screenshot";
  const header2 = "Feeding";
  const header3 = "Happy";
  const header4 = "Sad";
  

  // Render HTML
  return (
    <div className="mainDiv">
      <div className="previewSection">
        <button onClick={nextImage}>{cntr}</button>
        <MiniSlide header="Intro" imgSrc={slideImg001} clickFunction={() => updateMainSlide(header1, slideImg001)}/>
        <MiniSlide header="Custom Items" imgSrc={slideImg002} clickFunction={() => updateMainSlide(header2, slideImg002)}/>
        <MiniSlide header="State Items" imgSrc={slideImg003} clickFunction={() => updateMainSlide(header3, slideImg003)}/>
        <MiniSlide header="Further thoughts" imgSrc={slideImg004} clickFunction={() => updateMainSlide(header4, slideImg004)}/>
      </div>
      <div className="currentSlideShown">
        <Slide header={currentHeader} imgSrc={currentImg}/>
      </div>
    </div>
  );
}

export default App;
