import checkForm from "./checkForm.js"
import generatePanel from "./generatePanel.js";

let data = {
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    time: "Monthly",
}

const steps = document.getElementsByClassName("number");
const nextStepButton = document.getElementById("nextStep");
const backStepButton = document.getElementById("backStep");
const time_button = document.getElementById("time_button");


let actMoment = 1;
function setRightPage(actMoment) {
resetColor();
    switch (actMoment) {
        case 1: {
            setColor("info_step")
            //generatePanel(1,data);
            break;
        }
        case 2: {
            setColor("plan_step")
            generatePanel(2);
            break;
        }
        case 3: {
            setColor("addon_step")
            break;
        }
        case 4: {
            setColor("summary_step")
            break;
        }
    }
}
function setColor(id) {
    let item = document.getElementById(id);
    item.style.background = "hsl(206, 94%, 87%)";
    item.style.color = "hsl(213, 96%, 18%)";
}
function resetColor(){
    for(let el of steps){
        el.style.background = "";
        el.style.color = "white";
    }
}


function nextPage(){
    if(actMoment == 1){
        if(!checkForm())return;
        data.name = document.getElementsByClassName("input_form")[0].value;
        data.email = document.getElementsByClassName("input_form")[1].value;
        data.phone = document.getElementsByClassName("input_form")[2].value;
    }
    
    actMoment++;
    if(actMoment > 1){
        backStepButton.style.display = "block";
    }
    setRightPage(actMoment);
    if(actMoment == 4){
        nextStepButton.style.display = "none";
    }
}
function backStep(){
    actMoment--;
    if(actMoment < 4){
        nextStepButton.style.display = "block";
    }
    setRightPage(actMoment);
    if(actMoment == 1){
        backStepButton.style.display = "none";
    }
}
function SetTime(){
    let property;
    if(data.time == "Monthly"){
        property = "57%"
        data.time = "Yearly"
    }else{
        property = "10%"
        data.time = "Monthly"
    }
    time_button.style.setProperty("--position",property);
}








document.addEventListener("DOMContentLoaded",setRightPage(actMoment));
nextStepButton.addEventListener("click",nextPage);
backStepButton.addEventListener("click",backStep);
time_button.addEventListener("click",SetTime);