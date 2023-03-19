
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



        }
    }

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