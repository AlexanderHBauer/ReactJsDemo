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
            slideImg009
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