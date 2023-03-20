import arcadeImg from "../assets/images/icon-arcade.svg"
import advancedImg from "../assets/images/icon-advanced.svg"
import proImg from "../assets/images/icon-pro.svg"

function generatePanel(number,primaryData) {
    const panel = document.getElementById("panel");
    panel.innerHTML = "";


    switch (number) {
        case 1: {
            let data = {
                labelfor: ["name", "email", "phone"],
                laberlText: ["Name", "Email", "Phone"],
                spanId: ["invalid_name", "invalid_email", "invalid_phone"],
                inputname: ["name_input", "email_input", "phone_input"],
                inputplaceholder: ["e.g Adam Troszczyński", "e.g Test@mywork.pl", "e.g  +1 235 524 524"],
                inputvalues: [primaryData.name,primaryData.email,primaryData.phone]
            }
            let messageData = {
                h1: "Personal info",
                h2: "Please provide your name, email adress, and phone number."
            }
            setMessage(messageData);
            panel1(data);
            break;
        }
        case 2: {
            let data = {
                id: ["arcade","advanced","pro"],
                imgsrc:  [arcadeImg,advancedImg,proImg],
                h3: ["Arcade","Advanced","Pro"],
                h4: ["$9/mo","$12/mo","$15/mo","$90/yr","$120/yr","$150/yr"],
                h5: "2 months free"
            }
            let messageData = {
                h1: "Select your plan",
                h2: "You have the option of monthly or yearly biling."
            }
            setMessage(messageData);
            panel2(data,primaryData);

            
        }
    }

}


function panel2(data,primaryData){
    const plans = document.createElement("div");
    plans.className = "plans";
    for(let i=0;i<3;i++){
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const h5 = document.createElement("h5");
        div.id = data.id[i];
        div.className = "plan";
        if(primaryData.plan == data.id[i]) {
            div.style.background = "hsl(231, 100%, 99%)"
            div.style.border = "1px solid hsl(213, 96%, 18%)"
        }
        img.src = data.imgsrc[i];
        h3.textContent = data.h3[i];
        if(primaryData.time == "Yearly") h4.textContent = data.h4[i+3];
        else h4.textContent = data.h4[i];
        h5.textContent = data.h5;
        if(primaryData.time == "Monthly"){
            h5.style.display = "none";
        }
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(h5);
        plans.appendChild(div);
    }
    panel.appendChild(plans);
    const time = document.createElement("div");
    time.className = "time";
    const h2_1 = document.createElement("h2");
    const h2_2 = document.createElement("h2");
    const button = document.createElement("button");
    h2_1.id = "Monthly";
    h2_1.textContent = "Monthly";
    h2_2.id = "Yearly";
    h2_2.textContent = "Yearly";
    button.id = "time_button";
    console.log(primaryData.time);
    time.appendChild(h2_1);
    time.appendChild(button);
    if(primaryData.time == "Yearly") button.style.setProperty("--position","57%");
    time.appendChild(h2_2);

    panel.appendChild(time);


}



function setMessage(messageData){
            const message = document.createElement("div");
            const h1 = document.createElement("h1");
            const h2 = document.createElement("h2");
            message.className ="message";
            h1.textContent = messageData.h1;
            h2.textContent = messageData.h2;
            message.appendChild(h1);
            message.appendChild(h2);
            panel.appendChild(message);
}

function panel1(data) {
    const form = document.createElement("form");
    for (let i = 0; i < 3; i++) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        const span = document.createElement("span");
        label.htmlFor = data.labelfor[i];
        label.textContent = data.laberlText[i];
        span.id = data.spanId[i];
        span.className = "invalid";
        span.style = "display: none;"
        span.textContent = "This field is required";
        input.type = "text";
        input.className = "input_form";
        input.name = data.inputname[i];
        input.placeholder = data.inputplaceholder[i];
        input.value = data.inputvalues[i];

        form.appendChild(label);
        form.appendChild(span);
        form.appendChild(input);
        panel.appendChild(form);
    }
}


export default generatePanel;