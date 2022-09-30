// ----- INIT VARIABLES ----- //
let nameInput = "";
let pwdInput = "";
let username = "";
let userpwd = "";
let inputUsername = "";
let inputPassword = "";
let verify;
let findpassword;
let pwd;
let userIs;
let userIsLoggedIn;
let p;
let logo;
let loggedInUser;

let whoIs = localStorage.getItem(loggedInUser);
console.log(whoIs);
if(whoIs === "AAA"){
    hideLogin();
    welcomeText(whoIs);
} else {
    showLogin();
}

const btn = document.querySelector("#button");
showLogin()
// ----- LOGIN FUNCTION STARTS HERE ----- //

btn.addEventListener("click", (e) => {
    e.preventDefault()
        nameInput = document.querySelector("#inputUsername").value;
        pwdInput = document.querySelector("#inputPassword").value;

// ----- Check if the user exists ----- //
    theUserList = ["AAA", "12345", "BBB", "54321"];
    let verify = (theUserList.indexOf(nameInput));
    findpassword = (verify+1);
    pwd = theUserList[findpassword];
    
    if(theUserList.includes(nameInput))
    {
        console.log("Användaren finns");
        userIs = true;
    } else {
        console.log("Användaren finns INTE");
        userIs = false;
    }
    
// ----- Login & verify in console ----- //
    if(userIs === true && pwdInput === pwd)
    {
        console.log("Inloggad!")
        userIsLoggedIn = true;
        localStorage.setItem("loggedInUser", nameInput);
    } else {
        console.log("Felaktigt användarnamn eller lösenord");
        userIsLoggedIn = false;   
        console.log(userIsLoggedIn);
        p = document.getElementById("badCred");
        p.textContent = ("Bad credidentials. Please try again!");
        
    }
    console.log(userIsLoggedIn);

    if (userIsLoggedIn === true) {
        hideLogin();
        welcomeText();
    }
});
// ----- LOG OUT ----- //

console.log(userIsLoggedIn);
const logoutBtn = document.querySelector("#logOut");
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault()
if (userIsLoggedIn === true){
    userIsLoggedIn = false;
    console.log(userIsLoggedIn);
    showLogin();
}});


// ----- CREATE ACCOUNT ----- // JOBBA PÅ DENNA ------------------------ LOCAL STORAGE-----------------------------------------//
const createAccountBtn = document.querySelector("#createAccountBtn");
createAccountBtn.addEventListener("click", (e) => {
    e.preventDefault()
    showCreateAccount();

});

// ----- FUNCTIONS ----- //
function hideLogin(){
    
    const form = document.getElementById("loginForm");
    form.style.display = "none";
    

    const logout = document.getElementById("logoutBtn")
    console.log(logout);
    logout.style.display="inline";
    console.log(userIsLoggedIn);
};
function welcomeText(nameInput){
    logo = document.querySelector("h1");
    logo.style.color = ("green");
    p = document.querySelector("#pWelcome");
    p.textContent = ("Välkommen, " + nameInput + "!");
}

function showLogin(){
    const createAccount = document.getElementById("createAccount");
    createAccount.style.display = "none";

    const form = document.querySelector("form");
    form.style.display = "block";
    form.inputUsername.value = "";
    form.inputPassword.value = "";
    p = document.querySelector("p");
    p.textContent = ("Log in hfffere:");
    logo = document.querySelector("h1");
    logo.style.color = ("black");

    const logout = document.getElementById("logoutBtn")
    
    logout.style.display="none";


    console.log(logout);
    
};




function showCreateAccount(){
    hideLogin()
    const createAccount = document.getElementById("createAccount");
    createAccount.style.display = "block";
    logo = document.querySelector("h1");
    logo.style.color = ("yellow");
    logo.style.textShadow = ("3px 3px 3px black");
    p = document.querySelector("p");
    p.textContent = ("Kul att du vill skapa ett konto! Fyll i formuläret nedan, så är du snart igång!");

    //const rtrnToLogin = document.getElementById("backBtn");
    //rtrnToLogin.style.display="block";
    let createUsername = document.querySelector("#createUsername");
    let createPassword = document.getElementById("createPassword");

    let btnCreateAccount = document.getElementById("btnCreateAccount");
    btnCreateAccount.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Knapp för create account");
    console.log(createUsername.value);
    console.log(createPassword.value);
    localStorage.setItem(createUsername.value, createPassword.value);

    //showCreateAccount();

});

    const logout = document.getElementById("logoutBtn");
    logout.style.display="none";
    
    //Buttons//
    
}

const usersArr = [
    {
        userName: "Fredrik",
        password: "12345"
    },
    {
        userName: "Martin",
        password: "12345"
    },
    {
        userName: "Malin",
        password: "12345"
    }
]
localStorage.setItem("users", JSON.stringify(usersArr))
var storedNames = JSON.parse(localStorage.getItem("users"));
console.log(storedNames);
usersArr.push({username: "Evelina", password: "12345"});
console.log(usersArr);
localStorage.setItem("users", JSON.stringify(usersArr))

storedNames = JSON.parse(localStorage.getItem("users"));
console.log(storedNames[3].userName);


//fruits.push("mangos"); //Lägg till item i slutet
/*
var names = [];
names[0] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names));

//...
var storedNames = JSON.parse(localStorage.getItem("names"));
console.log(storedNames);
*/
// Array med objekt
// Varje objekt är en användare
// anvnamn och lösenord

/*
console.log(myArray[1]);


localStorage.setItem("users", myArray);


let myAnswers = localStorage.getItem("users")
console.log(myAnswers[0]);
*/
//JSON.stringify(car)