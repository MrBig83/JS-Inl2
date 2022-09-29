// ----- INIT VARIABLES ----- //
let nameInput = "";
let pwdInput = "";
let username = "";
let userpwd = "";
let verify;
let findpassword;
let pwd;
let userIs;
let userIsLoggedIn;
let p;
let logo;


const btn = document.querySelector("#button");

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
}
showLogin()
});
// ----- CREATE ACCOUNT ----- // JOBBA PÅ DENNA ------------------------ LOCAL STORAGE-----------------------------------------//
const createAccountBtn = document.querySelector("#createAccountBtn");
createAccountBtn.addEventListener("click", (e) => {
    e.preventDefault()
    showCreateAccount();

});

// ----- FUNCTIONS ----- //
function hideLogin(){
    
    const form = document.querySelector("form");
    form.style.display = "none";
    

    const logout = document.getElementById("logoutBtn")
    console.log(logout);
    logout.style.display="inline";
    console.log(userIsLoggedIn);
};
function welcomeText(){
    logo = document.querySelector("h1");
    logo.style.color = ("green");
    p = document.querySelector("p");
    p.textContent = ("Välkommen, " + nameInput + "!");
}

function showLogin(){
    const form = document.querySelector("form");
    form.style.display = "block";
    form.inputUsername.value = "";
    form.inputPassword.value = "";
    p = document.querySelector("p");
    p.textContent = ("Log in here:");
    logo = document.querySelector("h1");
    logo.style.color = ("black");

    const logout = document.getElementById("logoutBtn")
    console.log(logout);
    logout.style.display="none";
    console.log(userIsLoggedIn);
};




function showCreateAccount(){
    hideLogin()
    const createAccountForm = document.createElement("form");
    createAccountForm.appendChild.innerHTML = "<input type=text>"; 
    logo = document.querySelector("h1");
    logo.style.color = ("yellow");
    logo.style.textShadow = ("3px 3px 3px black");
    p = document.querySelector("p");
    p.textContent = ("Kul att du vill skapa ett konto! Fyll i formuläret nedan, så är du snart igång!");
    const logout = document.getElementById("logoutBtn")
    console.log(logout);
    logout.style.display="none"

}
