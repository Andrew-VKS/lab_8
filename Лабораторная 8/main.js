function validateUserName() {
    let userName = document.getElementById("userName").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;
    
    if (regex.test(userName)) {
        document.getElementById("userName").style.backgroundColor="green";
        document.getElementById("userNameCheck").innerHTML = "";
        checkData();
        return true;
    }
    else {
        document.getElementById("userName").style.backgroundColor="red";
        document.getElementById("userNameCheck").innerHTML = "Введите имя"
        return false;
    }
    }
function validateGender() {
    let userName = document.getElementById("Gender").value;
    let regex = /^[F,M\s]$/;  
        
    if (regex.test(userName)) {
        document.getElementById("userGender").style.backgroundColor="green";
        document.getElementById("userGenderCheck").innerHTML = "";
        checkData();
        return true;
        }
    else {
        document.getElementById("userGender").style.backgroundColor="red";
        document.getElementById("userGenderCheck").innerHTML = "Введите пол"
        return false;
        }
    }
    
    function validateEmail() {
    let phoneNumber = document.getElementById("phoneEmail").value;
    let regex = !/\S+@\S+\.\S+/.test(email);

    if (regex.test(phoneNumber)) {
        document.getElementById("phoneEmail").style.backgroundColor="green";
        document.getElementById("phoneEmailCheck").innerHTML = "";
        checkData();
        return true;
    }
    else {
        document.getElementById("phoneEmail").style.backgroundColor="red";
        document.getElementById("phoneEmailCheck").innerHTML = "Введите адрес электронной почты"
        return false;
    }
    }
    
    function validateQuantity() {
    let quantity = document.getElementById("quantity").value;
    let min = 1;
    let max = 1000;
    
    if (quantity < min) {
        document.getElementById("quantity").style.backgroundColor="red";
        document.getElementById("quantityCheck").innerHTML = "Число должно быть больше 1";
        return false;
    }
    else if (quantity > max){
        document.getElementById("quantity").style.backgroundColor="red";
        document.getElementById("quantityCheck").innerHTML = "Число должно быть меньше 1000";
        return false;
    }
    else {
        document.getElementById("quantity").style.backgroundColor="red";
        document.getElementById("quantityCheck").innerHTML = "";
        checkData();
        return true;
    }
    }
    
    function checkData() {
    let p1 = document.getElementById("quantityCheck").value;
    let p2 = document.getElementById("userNameCheck").value;
    let p3 = document.getElementById("userGenderCheck").value;
    let p4 = document.getElementById("phoneEmailCheck").value;
    let p5 = document.getElementById("date").value;
    let p6 = document.getElementById("quantity").value;
    let p7 = document.getElementById("userName").value;
    let p8 = document.getElementById("Gender").value;
    let p9 = document.getElementById("phoneNumber").value;
    
    if (p1 != "" && p2 != "" && p3 != "" && p4 != "" && p5 != "" && p6 != "" && p7 != "" && p8 != "" && p9 != "") {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").style.backgroundColor = "#FFD429";
        return true;
    }
    }
    
    function submitForm() {
    document.getElementById("submitCheck").innerHTML = "Application sent";
    return true;
    }
    
    
    
    
    
    