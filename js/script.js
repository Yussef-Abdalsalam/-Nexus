
let BoxJs = document.getElementById("BoxJs");
let naame = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let Add_cart = document.getElementById("Add_cart");
let contct_flex = document.getElementById("contct-flex");
let Shopping = document.getElementById("Shopping");
let Verification = document.getElementById("Verification");
let AddList = document.getElementById("Add-List");
let list = document.getElementById("list");
let itemContenr = document.getElementById("itemContenr");
let OnDletUl11 = document.getElementById("OnDletUl11");
let valuee = document.getElementById("valuee");
let btns = document.getElementById("btns");
let homeContent = document.getElementById("home-content");
let Home = document.getElementById("Home");
let userName = document.getElementById("userName");
var DataGroup = JSON.parse(localStorage.getItem("DataGroup"))
let cart = 3;
let namee = ``;
let age = 0;
let statust = Boolean;
let Birth = "";
let cartoon = ``;
hedar()


function OnAddList() {
    let valu = valuee.value;
    cartoon += `<div>${valu} <button id="OnDletUl11" onclick="OnDletUl()" style="color: #fff; background-color: red;" ><i class="fas fa-times"></i></button></div>`;
    AddList.innerHTML = cartoon;
    document.getElementById("valuee").value = "";
}

function hedar() {
    userName.innerHTML = `<i class="fa-solid fa-user"></i> ${DataGroup.name}`;
}

function OnAddUl1() {
    cart = cart + 1;
    cartoon = `<div class="contenr">
                <div class="contenr-p">
                    <div class=""><i class="fa-solid fa-star"></i></div>
                    <h3>New Feature ${cart}</h3>
                    <p>Optimized for performance with instant load times and smooth animations.</p>
                </div>
            </div>`;
    itemContenr.innerHTML += cartoon;
}

function OnAddbtn() {

    cartoon = `<button class="btn1"><i class="fas fa-rocket"></i> Explore Features</button>`;
    btns.innerHTML += cartoon;
}

function OnDletbtn() {
    let listdlet = btns.lastElementChild;
    listdlet.remove();
}

function OnDletUl1() {
    let listdlet = itemContenr.lastElementChild;
    listdlet.remove();
}

function OnDletUl() {

    if (itemContenr.style.display == "none") {
        itemContenr.style.display = "flex";
        document.getElementById("slash").style.display = "block";
        document.getElementById("fa-eye").style.display = "none";

    } else {
        itemContenr.style.display = "none";
        document.getElementById("slash").style.display = "none";
        document.getElementById("fa-eye").style.display = "block";
    }
}

function OnDletUlp() {
    let itemContenrp = document.getElementById("pp")
    if (itemContenrp.style.display == "none") {
        itemContenrp.style.display = "block";
        document.getElementById("fa-eye-slashp").style.display = "block";
        document.getElementById("fa-eyep").style.display = "none";
    } else {
        itemContenrp.style.display = "none";
        document.getElementById("fa-eye-slashp").style.display = "none";
        document.getElementById("fa-eyep").style.display = "block";
    }
}

function Onclk() {
    if (itemContenr.style.transform == "scale(1.1)") {
        itemContenr.style.transform = "scale(1)";
    } else {
        itemContenr.style.transform = "scale(1.1)";
    }
}

function Onclkbtn() {
    if (homeContent.style.transform == "scale(1.1)") {
        homeContent.style.transform = "scale(1)";
    } else {
        homeContent.style.transform = "scale(1.1)";
    }
}

function Onclkbakrocnd() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    Home.style.background = `${color}`;

}

function OnAddList() {
    let valu = naame.value;
    let valuEmail = email.value;
    let valuMessage = message.value;
    cartoon += `            <div class="contenr Impact">
                <div class="contenr-p contenr-p22 ">
                    <h3>${valu}</h3>
                    <div>${valuEmail}</div>
                    <p>${valuMessage}</p>
                </div>
            </div>`;
    Add_cart.innerHTML = cartoon;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}