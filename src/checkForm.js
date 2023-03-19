
function checkForm(){
    const nameInput = document.getElementsByTagName("input")[0];
    const emailInput = document.getElementsByTagName("input")[1];
    const phoneInput = document.getElementsByTagName("input")[2];
    let result = true;
    
    if(nameInput.value == ""){
        document.getElementById("invalid_name").style.display = "block";
        nameInput.className = "input_form_invalid";
        result = false;
    }else {
        nameInput.className = "input_form";
        document.getElementById("invalid_name").style.display = "none";
    }
    if(emailInput.value == ""){
        document.getElementById("invalid_email").style.display = "block";
        emailInput.className = "input_form_invalid"
        result = false;
    }else {
        emailInput.className = "input_form"
        document.getElementById("invalid_email").style.display = "none";
    }
    if(phoneInput.value == ""){
        document.getElementById("invalid_phone").style.display = "block";
        phoneInput.className = "input_form_invalid"
        result = false;
    }else {
        phoneInput.className = "input_form"
        document.getElementById("invalid_phone").style.display = "none";
    }
    return result;
}



export default checkForm;