
export function setTime(data){
    const time_button = document.getElementById("time_button");
    const panelId = ["arcade","advanced","pro"];
    const price = ["$9/mo","$13/mo","$15/mo","$90/yr","$120/yr","$150/yr"];
    let property;
    if(data.time == "Monthly"){
        for(let i=0;i<3;i++){
            document.getElementById(panelId[i]).children[2].textContent = price[i+3];
            document.getElementById(panelId[i]).children[3].style.display = "block";
        }
        document.getElementById("Monthly").style.color = "hsl(231, 11%, 63%)";
        document.getElementById("Yearly").style.color = "hsl(213, 96%, 18%)";
        property = "57%"
        data.time = "Yearly"

    }else{
        for(let i=0;i<3;i++){
            document.getElementById(panelId[i]).children[2].textContent = price[i];
            document.getElementById(panelId[i]).children[3].style.display = "none";
        }
        document.getElementById("Monthly").style.color = "hsl(213, 96%, 18%)";
        document.getElementById("Yearly").style.color = "hsl(231, 11%, 63%)";
        property = "10%"
        data.time = "Monthly"
    }
    time_button.style.setProperty("--position",property);
}
export function choosePlan(event,data){
    const panelId = ["arcade","advanced","pro"]
    for(let i=0;i<3;i++){
        document.getElementById(panelId[i]).style.background = "";
        document.getElementById(panelId[i]).style.border = "1px solid hsl(231, 11%, 63%)";
    }
    const id = event.currentTarget.id;
    data.plan = id;
    document.getElementById(id).style.background = "hsl(231, 100%, 99%)";
    document.getElementById(id).style.border = "1px solid hsl(213, 96%, 18%)";
    
}


