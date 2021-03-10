'use strict';



//получаем модули
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import validation from './modules/validation';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';


//Timer
countTimer();


//Menu 
toggleMenu();


//Popup
togglePopUp();


//Tabs 
tabs();


//Slider
slider();



//change photo
changePhoto();

//valid
validation();


// Calculator
calculator(100);
 
//send-ajax-form
sendForm('form1');
sendForm('form2');
sendForm('form3');
