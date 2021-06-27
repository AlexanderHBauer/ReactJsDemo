// Images (static)
import slideImg001 from './myimages/test001.PNG';
import slideImg002 from './myimages/test002.jpg';
import slideImg003 from './myimages/test003.jpg';
import slideImg004 from './myimages/test004.jpg';

class Helpers {
    constructor(){
        this.imagesArr = [
            slideImg001, 
            slideImg002,
            slideImg003,
            slideImg004
        ];

        this.imagesDict = [
            {1: slideImg001},
            {2: slideImg002},
            {3: slideImg003},
            {4: slideImg004}, 
        ]
    }

    getImgArr(){
    return this.imagesArr;
    }

    getImgDict(){
        return this.imagesDict;
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