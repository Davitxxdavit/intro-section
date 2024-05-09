



function dropDown(){
    const toggleList1 = document.getElementById("toggleList1");
    const img = document.getElementById("dropDownIMG");
    toggleList1.classList.toggle("displayNone");
    if (toggleList1.classList.contains("displayNone")){
        img.src = "./images/icon-arrow-down.svg"
    } else {
        img.src = "./images/icon-arrow-up.svg"
    };
}


function dropDown2(){
    const toggleList2 = document.getElementById("toggleList2");
    const img2 = document.getElementById("dropDownIMG2");
    toggleList2.classList.toggle("displayNone");
    if (toggleList2.classList.contains("displayNone")){
        img2.src = "./images/icon-arrow-down.svg"
    } else {
        img2.src = "./images/icon-arrow-up.svg"
    };
}


function burger(){
    const burger = document.getElementById("mobile-nav");
    const myBody = document.body;
    burger.style.display = "flex"
    myBody.style.backgroundColor = "rgba(111, 111, 111, 0.42)"
}


function closeBurger(){
    const close = document.getElementById("closeMenu");
    const burger = document.getElementById("mobile-nav");
    burger.style.display = "none"
    const myBody = document.body;
    myBody.style.backgroundColor = "rgba(250,250,250,255)"
}


function dropDown3(){
    const toggleList1 = document.getElementById("toggleList3");
    const img = document.getElementById("dropDownIMG3");
    toggleList1.classList.toggle("displayNone");
    if (toggleList1.classList.contains("displayNone")){
        img.src = "./images/icon-arrow-down.svg"
    } else {
        img.src = "./images/icon-arrow-up.svg"
    };
}


function dropDown4(){
    const toggleList1 = document.getElementById("toggleList4");
    const img = document.getElementById("dropDownIMG4");
    toggleList1.classList.toggle("displayNone");
    if (toggleList1.classList.contains("displayNone")){
        img.src = "./images/icon-arrow-down.svg"
    } else {
        img.src = "./images/icon-arrow-up.svg"
    };
}