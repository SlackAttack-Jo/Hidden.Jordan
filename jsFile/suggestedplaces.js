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
cardRender.style.backgroundColor="#FFF6BF"
cardRender.style.marginLeft="20px"
cardRender.style.width="400px"
cardRender.style.height="450px"
cardRender.style.textAlign="center"
cardRender.style.marginBottom="20px"
cardRender.style.borderRadius="15px"
cardRender.style.border="1px solid black"
cardRender.style.boxShadow="5px 5px 5px 5px rgba(0.1, 0.1, 0.4, 0.4)"

render.appendChild(cardRender)

let usernameRender=document.createElement('p')
usernameRender.textContent=`@ ${placesArray[i].userName}`
usernameRender.style.fontSize="20px"
usernameRender.style.fontWeight="bolder"
usernameRender.style.paddingTop="20px"
cardRender.appendChild(usernameRender)

let placenameRender=document.createElement('p')
placenameRender.textContent=`# ${placesArray[i].placeName}`
placenameRender.style.fontWeight="bold"
cardRender.appendChild(placenameRender)

let placeimageRender=document.createElement('img')
placeimageRender.setAttribute("src",placesArray[i].placeImage)
placeimageRender.setAttribute("alt","Place image")
placeimageRender.setAttribute("width","100%")
placeimageRender.style.paddingTop="20px"
cardRender.appendChild(placeimageRender)

let placemessageRender=document.createElement('p')
placemessageRender.textContent=placesArray[i].placeMessage
placemessageRender.style.fontWeight="bold"
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