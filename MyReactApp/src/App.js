// React JS - General files (official)
import React, {useState} from 'react';
import './App.css';
// React JS - custom elements
import Slide from './Slide';
import MiniSlide from './MiniSlide';
import Helpers from './Helpers';
// Images (static)
import slideImg001 from './myimages/001_Title.PNG';
import slideImg002 from './myimages/002_ReactViaScript.PNG';
import slideImg003 from './myimages/003_ReactApp_viaNPM.PNG';
import slideImg004 from './myimages/004_nodejs.PNG';
import slideImg005 from './myimages/005_FolderStructure.PNG';
import slideImg006 from './myimages/006_IndexJS.PNG';
import slideImg007 from './myimages/007_AppFunctionRender.PNG';
import slideImg008 from './myimages/008_SlideCode.PNG';
import slideImg009 from './myimages/009_UseStateCode.PNG';
import slideImg010 from './myimages/004_nodejs.PNG';


function App() {

  // Custom fuctionality code

   // Define Input Values
   const header1 = "React JS";
   const header2 = "Installation - Inclusion via Script";
   const header3 = "Installation - Create a React App";
   const header4 = "App - Node.js";
   const header5 = "App - Folder Structure";
   const header6 = "Index.js";
   const header7 = "App.js - Render()";
   const header8 = "Example Component - Slide.js"; 
   const header9 = "Dynamic Object - UseState()";  
 
   const body1 = "React JS is a Javascript (Node.js) framework based on so called components.";
   const body2 = "React can be included in an already existing project by inserting specific scripts.";
   const body3 = "When starting from scracth, one can create a dedicated React App.";
   const body4 = "Working with React Apps requires Node.js.";
   const body5 = "After creating the project/app, the following folder structure is given.";
   const body6 = "The index.js file shows the 'root' elements to which all other items point.";
   const body7 = "Via 'return ()' React defines the return values as HTML elements.";
   const body8 = "One can create custom components that can be included in other React files.";
   const body9 = "With 'states' one can create dynamic objects like counters, color changers, etc.";


  const headerArr = [header1,header2,header3,header4,header5,header6,header7,header8,header9];
  const bodyArr = [body1,body2,body3,body4,body5,body6,body7,body8,body9];

  let helper = new Helpers();
  // Start with first image
  let currentImgSource = slideImg001;
  let currentHeaderVal = header1;
  let currentBodyVal = body1;
  // Get imgArr for later comparison and switching
  let imgArr = helper.getImgArr();

  // Define React JS "useState" variables for state changes
  let [cntr, setCntr] = useState(1);
  let [currentImg, setcurrentImg] = useState(slideImg001);
  let [currentHeader, updateHeader] = useState(header1);
  let [currentBody, updateBody] = useState(body1);
  
  // Manipulating the state variables
  
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

    // Function to  switch to the next possible image in the shown slide item.
  const nextImage = () => {
    for (let i = 0; i < imgArr.length; i++){
      // If end of array is reached, reset counter and use first image
        if (((i+1) == imgArr.length) && currentImg === imgArr[i]){
          currentImgSource = slideImg001;
          setCntr(cntr - cntr + 1);
          currentHeaderVal = headerArr[0];
          currentBodyVal = bodyArr[0];
          break;
        }
        else if (currentImg === imgArr[i]){
          try {
            let nextIndex = i+1;
            currentImgSource =  imgArr[nextIndex];
            setCntr(cntr + 1);
            currentHeaderVal = headerArr[nextIndex];
            console.log(currentHeader);
            currentBodyVal = bodyArr[nextIndex];
            console.log(currentBody);
          }
          catch {
            currentImgSource = slideImg001;
            setCntr(cntr - cntr + 1);
            currentHeaderVal = headerArr[0];
            currentBodyVal = bodyArr[0];
          }
        }
        }
    // Set new value for "currentImg" state via the value of currentimgSource
    //setcurrentImg(currentImgSource);
    console.log(`BodyVal: ${currentBodyVal}`);
    console.log(`HeaderVal: ${currentHeaderVal}`);
    console.log(`ImgVal: ${currentImgSource}`);
    updateMainSlide(currentHeaderVal, currentBodyVal, currentImgSource)
  };

 
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
        <MiniSlide imgSrc={slideImg005} clickFunction={() => updateMainSlide(header5, body5, slideImg005)}/>
        <MiniSlide imgSrc={slideImg006} clickFunction={() => updateMainSlide(header6, body6, slideImg006)}/>
        <MiniSlide imgSrc={slideImg007} clickFunction={() => updateMainSlide(header7, body7, slideImg007)}/>
        <MiniSlide imgSrc={slideImg008} clickFunction={() => updateMainSlide(header8, body8, slideImg008)}/>
        <MiniSlide imgSrc={slideImg009} clickFunction={() => updateMainSlide(header9, body9, slideImg009)}/>
      </div>
      <div className="currentSlideShown">
        <Slide header={currentHeader} body={currentBody} imgSrc={currentImg}/>
      </div>
    </div>
  );
}

export default App;
