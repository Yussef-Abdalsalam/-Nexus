var yourName = document.getElementById("yourName")
var yourEmail = document.getElementById("yourEmail")
var yourPassword = document.getElementById("yourPassword")
var enterYourEmail = document.getElementById("enterYourEmail")
var enterPassword = document.getElementById("enterPassword")
var pRegex = document.getElementById("pRegex")
var p1Regex = document.getElementById("p1Regex")
var DataGroup = JSON.parse(localStorage.getItem("DataGroup"))
var productList;


if (localStorage.getItem("DataGroup")) {
    productList = JSON.parse(localStorage.getItem("DataGroup"))
} else {
    productList = [];
}

function dataGroup() {
    var Group = {
        name: yourName.value,
        Email: yourEmail.value,
        Password: yourPassword.value,
    }
    productList = Group;
    regexAccount()
    tesst()
    saveLocalStorage()
}

var cartoona = "";
function testLocalStorage() {
    p1Regex.innerHTML = cartoona;
    if (DataGroup.Email == enterYourEmail.value && DataGroup.Password == enterPassword.value) {
            console.log("yussef");
        // window.href="../../index.html";
        window.location.href = "../index.html"; // هذا سيعمل إذا كان مشروعك في جذر الموقع

        
        return true
        
    } else {
        cartoona = `
        <p class="pRegex1">All inputs is required</p>`
        return false
    }
}

var cartoonaa = "";
function tesst() {
    pRegex.innerHTML = cartoonaa;
    if (DataGroup.Email == yourEmail.value) {
        cartoonaa = `
        <p class="pRegex1">email already exists</p>`
        return true
    } else {
        cartoonaa = `
        <p class="pRegex2">Success</p> `
        return false
    }
}


function saveLocalStorage() {
    localStorage.setItem("DataGroup", JSON.stringify(productList))
}

var cartoon = "";
function regexAccount() {
    pRegex.innerHTML = cartoon;
    var regex = /^[A-Za-z]{3,20}$/;
    if (regex.test(yourName.value)) {
        cartoon = `
        <p class="pRegex2">Success</p> `
        saveLocalStorage()
        return true
    } else {
        cartoon = `
        <p class="pRegex1">All inputs is required</p>`
        return false
    }
}