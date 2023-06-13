'use strict';

let placesArray=[];
function Place(fName,pName,pImage,pMessage){
    this.userName = fName;
    this.placeName = pName;
    this.placeImage= pImage;
    this.placeMessage= pMessage;
    placesArray.push(this);
}
let render=document.getElementById('render');
render.innerHTML = '';


function feedbackRender () {
    render.innerHTML = '';
    for (let i = 0; i < placesArray.length; i++) {
let cardRender=document.createElement('div')
cardRender.style.marginLeft="22px"
cardRender.style.width="400px"
cardRender.style.height="670px"
cardRender.style.textAlign="center"
cardRender.style.marginBottom="40px"
cardRender.style.borderRadius="15px"
cardRender.style.boxShadow="5px 5px 5px 5px rgba(0, 0, 0, 0.4)"
cardRender.setAttribute("id","cardRender")
render.appendChild(cardRender)

let usernameRender=document.createElement('p')
usernameRender.textContent=`@ ${placesArray[i].userName}`
usernameRender.style.fontSize="20px"
usernameRender.style.fontWeight="bolder"
usernameRender.style.paddingTop="20px"
cardRender.appendChild(usernameRender)

let placenameRender=document.createElement('p')
placenameRender.textContent=`# ${placesArray[i].placeName}`
cardRender.appendChild(placenameRender)

let placeimageRender=document.createElement('img')
placeimageRender.setAttribute("src",placesArray[i].placeImage)
placeimageRender.setAttribute("alt","Place image")

placeimageRender.style.marginTop="20px"
placeimageRender.style.borderRadius="10px"
placeimageRender.style.width="350px"
placeimageRender.style.height="300px"
placeimageRender.style.boxShadow="5px 5px 5px 2px rgba(0,0,0,.7)"
cardRender.appendChild(placeimageRender)

let placemessageRender=document.createElement('p')
placemessageRender.textContent=placesArray[i].placeMessage
placemessageRender.style.backgroundColor="aliceblue"
placemessageRender.style.borderRadius="10px"
placemessageRender.style.margin="20px"
placemessageRender.style.height="230px"
placemessageRender.style.padding="10px"
cardRender.appendChild(placemessageRender)

}

}


let saveValues = document.getElementById('form');
saveValues.addEventListener('submit', handler)

function handler(e){
    e.preventDefault();
    let userName = e.target.fName.value;
    let placeName = e.target.pName.value;
    let placeImage = e.target.pImage.value;  
    let placeMessage = e.target.pMessage.value;  
let place =new Place(userName,placeName,placeImage,placeMessage);
storeIntoLocalStorage();
feedbackRender ();
fName.value='';
pName.value='';
pImage.value='';
pMessage.value='';
}

console.log(placesArray);
function storeIntoLocalStorage() {
    let jsonObjArray = JSON.stringify(placesArray);
    window.localStorage.setItem("place", jsonObjArray);
}
function readFromLocalStorage() {
    let jsonArray = window.localStorage.getItem("place");
   

    let objArray = JSON.parse(jsonArray);

    if (objArray == null) {
        console.log("");
    } else {
      
        for(let i = 0 ; i< objArray.length; i++){
            let place1 = new Place(objArray[i].userName , objArray[i].placeName , objArray[i].placeImage,objArray[i].placeMessage );
           
   
        }
    

    }


}

readFromLocalStorage();
feedbackRender ();
let popup = document.getElementById("popup");
    function openPopup(){
        let name =document.getElementById("fName")
        let placeName =document.getElementById("pName")
        let placeImage =document.getElementById("pName")
        let userMessage =document.getElementById("pMessage")
        console.log(name.value);
        if (name.value !=="" && placeName.value !=="" && placeImage.value !=="" && userMessage.value !=="") {
            popup.classList.add("open-popup");
        }
       
      }
      function closePopup(){
        popup.classList.remove("open-popup");
      }    
