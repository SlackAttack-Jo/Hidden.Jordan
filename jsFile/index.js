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



updateDisplay1();
updateDisplay2();
updateDisplay3();
updateDisplay4();
updateDisplay5();
updateDisplay6();
updateDisplay7();

like1.addEventListener("click",()=>{
    if(!window.localStorage.getItem("like1")){
        let count1 = 0;
        window.localStorage.setItem("like1",count1)
    }
    let count1=JSON.parse(window.localStorage.getItem("like1"));
    if(count1==0){
     count1++;
    window.localStorage.setItem("like1",count1)}
    else{
        let count1 =0; 
    window.localStorage.setItem("like1",count1)}

    
    updateDisplay1();
}) ;

like2.addEventListener("click",()=>{
    if(!window.localStorage.getItem("like2")){
        let count2 = 0;
        window.localStorage.setItem("like2",count2)
    }
    
    let count2=JSON.parse(window.localStorage.getItem("like2"));
    if(count2==0){
     count2++;
    window.localStorage.setItem("like2",count2)}
    else{
        let count2 =0; 
    window.localStorage.setItem("like2",count2)}
    updateDisplay2();
}) ;
like3.addEventListener("click",()=>{
    if(!window.localStorage.getItem("like3")){
        let count3 = 0;
        window.localStorage.setItem("like3",count3)
    }
    
    let count3=JSON.parse(window.localStorage.getItem("like3"));
    if(count3==0){
     count3++;
    window.localStorage.setItem("like3",count3)}
    else{
        let count3 =0; 
    window.localStorage.setItem("like3",count3)}
    updateDisplay3();
}) ;
like4.addEventListener("click",()=>{
    if(!window.localStorage.getItem("like4")){
        let count4 = 0;
        window.localStorage.setItem("like4",count4)
    }
    
    let count4=JSON.parse(window.localStorage.getItem("like4"));
    if(count4==0){
     count4++;
    window.localStorage.setItem("like4",count4)}
    else{
        let count4 =0; 
    window.localStorage.setItem("like4",count4)}
    updateDisplay4();
}) ;
like5.addEventListener("click",()=>{
    if(!window.localStorage.getItem("like5")){
        let count5 = 0;
        window.localStorage.setItem("like5",count5)
    }
    let count5=JSON.parse(window.localStorage.getItem("like5"));
    if(count5==0){
     count5++;
    window.localStorage.setItem("like5",count5)}
    else{
        let count5 =0; 
    window.localStorage.setItem("like5",count5)}

    updateDisplay5();
}) ;
like6.addEventListener("click",()=>{
    if(!window.localStorage.getItem("like6")){
        let count6 = 0;
        window.localStorage.setItem("like6",count6)
    }
    let count6=JSON.parse(window.localStorage.getItem("like6"));
    if(count6==0){
     count6++;
    window.localStorage.setItem("like6",count6)}
    else{
        let count6 =0; 
    window.localStorage.setItem("like6",count6)}

    updateDisplay6();
}) ;
like7.addEventListener("click",()=>{
    if(!window.localStorage.getItem("like7")){
        let count7 = 0;
        window.localStorage.setItem("like7",count7)
    }
    let count7=JSON.parse(window.localStorage.getItem("like7"));
    if(count7==0){
     count7++;
    window.localStorage.setItem("like7",count7)}
    else{
        let count7 =0; 
    window.localStorage.setItem("like7",count7)}

    updateDisplay7();
}) ;


function updateDisplay1(){
    counterDisplayElem1.innerHTML = JSON.parse(window.localStorage.getItem("like1"));
};
function updateDisplay2(){
    counterDisplayElem2.innerHTML = JSON.parse(window.localStorage.getItem("like2"));
};
function updateDisplay3(){
    counterDisplayElem3.innerHTML = JSON.parse(window.localStorage.getItem("like3"));
};
function updateDisplay4(){
    counterDisplayElem4.innerHTML = JSON.parse(window.localStorage.getItem("like4"));
};
function updateDisplay5(){
    counterDisplayElem5.innerHTML = JSON.parse(window.localStorage.getItem("like5"));
};
function updateDisplay6(){
    counterDisplayElem6.innerHTML = JSON.parse(window.localStorage.getItem("like6"));
};
function updateDisplay7(){
    counterDisplayElem7.innerHTML = JSON.parse(window.localStorage.getItem("like7"));
}
