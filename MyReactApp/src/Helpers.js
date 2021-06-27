// Images (static)
import slideImg001 from './myimages/001_Title.png';
import slideImg002 from './myimages/002_ReactViaScript.png';
import slideImg003 from './myimages/003_ReactApp_viaNPM.png';
import slideImg004 from './myimages/004_nodejs.png';
import slideImg005 from './myimages/005_FolderStructure.png';
import slideImg006 from './myimages/006_IndexJS.png';
import slideImg007 from './myimages/007_AppFunctionRender.png';
import slideImg008 from './myimages/008_SlideCode.png';
import slideImg009 from './myimages/009_UseStateCode.png';
import slideImg010 from './myimages/010_Recommendation.png';
import finalSlide from './myimages/logo.svg';

class Helpers {
    constructor(){
        this.imagesArr = [
            slideImg001, 
            slideImg002,
            slideImg003,
            slideImg004,
            slideImg005,
            slideImg006,
            slideImg007,
            slideImg008,
            slideImg009, 
            slideImg010,
            finalSlide
        ];
    }

    getImgArr(){
    return this.imagesArr;
    }

    findArrayIndex(imgSrc){
        for (let i = 0; i < this.imagesArr.length; i++){
            if (this.imagesArr[i] === imgSrc){
                return i;
            }
        }
    }
}
export default Helpers;