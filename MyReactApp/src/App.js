// React JS - General files (official)
import React, {useState} from 'react';
import './App.css';
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

   // Define Input Values
   const header1 = "Screenshot";
   const header2 = "Feeding";
   const header3 = "Happy";
   const header4 = "Sad";
 
   const body1 = "mybody1";
   const body2 = "mybody2";
   const body3 = "mybody3";
   const body4 = "mybody4";

  let helper = new Helpers();
  // Start with first image
  let currentImgSource = slideImg001;
  // Get imgArr for later comparison and switching
  let imgArr = helper.getImgArr();

  // Define React JS "useState" variables for state changes
  let [cntr, setCntr] = useState(1);
  let [currentImg, setcurrentImg] = useState(slideImg001);
  let [currentHeader, updateHeader] = useState(header1);
  let [currentBody, updateBody] = useState(body1);
  
  // Manipulating the state variables
  
  // Function to  switch to the next possible image in the shown slide item.
  const nextImage = () => {
    for (let i = 0; i < imgArr.length; i++){
      // If end of array is reached, reset counter and use first image
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

    const updateMainSlide = (header, body, specImgSrc) => {
      updateHeader(header);
      updateBody(body);
      getSpecificImage(specImgSrc);
    }

 
  // Render HTML (including custom elements) 
  return (
    <div className="mainDiv">
      <div className="previewSection">
        <div>
        <span>Continue: </span>   
        <button onClick={nextImage}>Slide {cntr}</button>
        </div>
        
        <MiniSlide imgSrc={slideImg001} clickFunction={() => updateMainSlide(header1, body1, slideImg001)}/>
        <MiniSlide imgSrc={slideImg002} clickFunction={() => updateMainSlide(header2, body2, slideImg002)}/>
        <MiniSlide imgSrc={slideImg003} clickFunction={() => updateMainSlide(header3, body3, slideImg003)}/>
        <MiniSlide imgSrc={slideImg004} clickFunction={() => updateMainSlide(header4, body4, slideImg004)}/>
      </div>
      <div className="currentSlideShown">
        <Slide header={currentHeader} body={currentBody} imgSrc={currentImg}/>
      </div>
    </div>
  );
}

export default App;
