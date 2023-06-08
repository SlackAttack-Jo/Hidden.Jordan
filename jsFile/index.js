'use strict';
let like1=document.getElementById("like1");
let like2=document.getElementById("like2");
let like3=document.getElementById("like3");
let like4=document.getElementById("like4");
let like5=document.getElementById("like5");
let like6=document.getElementById("like6");
let like7=document.getElementById("like7");
let counterDisplayElem1 = document.querySelector('.counterDisplayElem1');
let counterDisplayElem2 = document.querySelector('.counterDisplayElem2');
let counterDisplayElem3 = document.querySelector('.counterDisplayElem3');
let counterDisplayElem4 = document.querySelector('.counterDisplayElem4');
let counterDisplayElem5 = document.querySelector('.counterDisplayElem5');
let counterDisplayElem6 = document.querySelector('.counterDisplayElem6');
let counterDisplayElem7 = document.querySelector('.counterDisplayElem7');

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;

updateDisplay1();
updateDisplay2();
updateDisplay3();
updateDisplay4();
updateDisplay5();
updateDisplay6();
updateDisplay7();

like1.addEventListener("click",()=>{
    count1++;
    updateDisplay1();
}) ;
like2.addEventListener("click",()=>{
    count2++;
    updateDisplay2();
}) ;
like3.addEventListener("click",()=>{
    count3++;
    updateDisplay3();
}) ;
like4.addEventListener("click",()=>{
    count4++;
    updateDisplay4();
}) ;
like5.addEventListener("click",()=>{
    count5++;
    updateDisplay5();
}) ;
like6.addEventListener("click",()=>{
    count6++;
    updateDisplay6();
}) ;
like7.addEventListener("click",()=>{
    count7++;
    updateDisplay7();
}) ;


function updateDisplay1(){
    counterDisplayElem1.innerHTML = count1;
};
function updateDisplay2(){
    counterDisplayElem2.innerHTML = count2;
};
function updateDisplay3(){
    counterDisplayElem3.innerHTML = count3;
};
function updateDisplay4(){
    counterDisplayElem4.innerHTML = count4;
};
function updateDisplay5(){
    counterDisplayElem5.innerHTML = count5;
};
function updateDisplay6(){
    counterDisplayElem6.innerHTML = count6;
};
function updateDisplay7(){
    counterDisplayElem7.innerHTML = count7;
};
