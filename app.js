



function dropDown(){
    const toggleList1 = document.getElementById("toggleList1");
    const img = document.getElementById("dropDownIMG");
    
    toggleList1.classList.toggle("displayNone")
    
    if (toggleList1.classList.contains("displayNone")){
        img.src = "./images/icon-arrow-down.svg"
    } else {
        img.src = "./images/icon-arrow-up.svg"
    }


}


function dropDown2(){
    const toggleList2 = document.getElementById("toggleList2");
    const img2 = document.getElementById("dropDownIMG2");

    toggleList2.classList.toggle("displayNone")
    if (toggleList2.classList.contains("displayNone")){
        img2.src = "./images/icon-arrow-down.svg"
    } else {
        img2.src = "./images/icon-arrow-up.svg"
    }

}