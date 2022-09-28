// ----- INIT VARIABLES ----- //
let nameInput = "";
let pwdInput = "";
let username = "";
let userpwd = "";
let verify;
let findpassword;
let pwd;
let userIs;
let userIsLoggedIn = false;

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
    }
});

