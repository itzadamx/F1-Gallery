"use strict"; 

var photoOrderArray = window.opener.photoOrder;
var selectPhoto = photoOrderArray[2];
var figFilename = "images/IMG_0" + selectPhoto + ".jpg";

function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; 
   createEventListener();
}

function closeWin() {
   window.close();
}

function AddFav() {
        window.opener.list();
}

function createEventListener() {
    var closeWindow = document.getElementsByTagName("p")[0];
    if (closeWindow.addEventListener) {
        closeWindow.addEventListener("click", closeWin, false);

    } else if (closeWindow.attachEvent) {
        closeWindow.attachEvent("onclick", closeWin);
    }

    var addFav = document.getElementsByTagName("p")[1];
    if (addFav.addEventListener) {
        addFav.addEventListener("click", call, false);

    } else if (addFav.attachEvent) {
        addFav.attachEvent("onclick", call);
    }
}
function call() {
    AddFav();
    closeWin();
}

window.onload = pageSetup;