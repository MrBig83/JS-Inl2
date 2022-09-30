let pwdInput = "",
    userExists,
    userIsLoggedIn,
    loggedInUser,
    hittat,
    nameInput;
checkIsUserLoggedIn();


//buildLoginForm();
/*
getCredidentials();
checkUserExist();
login();
createWelcomePage();
showLogout();
logOut();*/



function checkIsUserLoggedIn(){
    loggedInUser = localStorage.getItem("loggedInUser", );
    console.log(loggedInUser);
    if (loggedInUser != ""){
        console.log("Inloggad");
        //Användaren är inloggad ========= 
    nameInput = loggedInUser; 
        showLogout();
    } else {
        //Användaren är INTE inloggad
        console.log("INTE inloggad");
        buildLoginForm();
}};

function buildLoginForm(){
    let p = document.getElementById("pWelcome");
    p.textContent = "Välkommen! Logga in nedan";

    let loginForm = document.getElementById("loginForm");
    loginForm.style.display="block";
};

function getCredidentials(){
    const btn = document.querySelector("#button");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        nameInput = document.querySelector("#inputUsername").value;
        pwdInput = document.querySelector("#inputPassword").value;
        console.log(nameInput);
        checkUserExist()
    })
};

function checkUserExist(){
    // ----- Does the user exist? ----- //
    hittat = localStorage.getItem(nameInput);
    console.log(hittat);
    if(hittat != null){
      console.log("Användaren finns");
      userExists = true;
    } else {
        console.log("Användaren finns inte");
        userExists = false;
    }
};


function login(){
    if(hittat === pwdInput){
        loggedInUser = nameInput;
        userIsLoggedIn = true; //Kanske onödig när vi har loggedInUser? 
        console.log("Inloggningen lyckades");
        createWelcomePage();
} else {
    let badCred = document.getElementById("badCred")
    badCred.textContent = "Användarnamn eller lösenord är fel";
}};

function createWelcomePage(){
    let p = document.getElementById("pWelcome");
    p.textContent = `Välkommen, ${nameInput}`;

    let loginForm = document.getElementById("loginForm");
    loginForm.style.display="none";
    

    
    localStorage.setItem("loggedInUser", nameInput);
};
function showLogout(){
    const logoutBtn = document.getElementById(".logoutBtn");
    logoutBtn.style.display="block";
    
    
};

function logOut(){
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
    
        localStorage.setItem("loggedInUser", "");
        
})};