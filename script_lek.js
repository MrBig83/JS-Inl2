let nameInput ="",
    pwdInput = "",
    userExists,
    userIsLoggedIn,
    loggedInUser;

loggedInUser = localStorage.getItem("loggedInUser", );
console.log(loggedInUser);
if (loggedInUser != ""){
  //Användaren är inloggad ========= GOTO - finns det? =======
  nameInput = loggedInUser; 
} else {
    //Användaren är INTE inloggad
}




const btn = document.querySelector("#button");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    nameInput = document.querySelector("#inputUsername").value;
    pwdInput = document.querySelector("#inputPassword").value;
    //e.preventDefault(); Oklart behov i denna applikation.
    //console.log("Button clicked!");

    // ----- Does the user exist? ----- //
    let hittat = localStorage.getItem(nameInput);
    console.log(hittat);
    if(hittat !== null){
      console.log("Användaren finns");
      userExists = true;
    } else {
        console.log("Användaren finns inte");
        userExists = false;
    }
    
    if(hittat === pwdInput){

            userIsLoggedIn = true;
            console.log("Inloggningen lyckades");

            let p = document.getElementById("pWelcome");
            p.textContent = `Välkommen, ${nameInput}`;

            let loginForm = document.getElementById("loginForm");
            loginForm.style.display="none";
            
            let logoutBtn = document.getElementById("logoutBtn")
            logoutBtn.style.display = "block";  
            
            localStorage.setItem("loggedInUser", nameInput);
        

    } else {

        let badCred = document.getElementById("badCred")
        badCred.textContent = "Användarnamn eller lösenord är fel";
    }
    /*
    console.log(userExists);
    console.log(nameInput);
    console.log(pwdInput);
    console.log(userIsLoggedIn);
    */

});

if(userIsLoggedIn === true){

}
const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.setItem("loggedInUser", "");
    location.reload();
});
