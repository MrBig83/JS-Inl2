// ----- Set variables ----- //
var inputUsername,
    inputPassword,
    logInBtn,
    errorCode,
    userList,
    tempUserList,
    user,
    defUserList,
    pWelcome,
    loggedInUser,
    loginForm,
    logoutBtn,
    errormsg,
    btnCreateAccount;
    
    inputUsername = document.querySelector("#inputUsername");
    inputPassword = document.querySelector("#inputPassword");
    const pBadCred = document.getElementById("badCred");

// ----- Anyone home? ----- //
loggedInUser =  localStorage.getItem("loggedInUser", )
console.log(loggedInUser);
if(loggedInUser != ""){

    pWelcome = document.querySelector("#pWelcome");
    pWelcome.innerText=("Välkommen tillbaka, " + loggedInUser +"!");
    showLogout();
} else {
    loginForm = document.getElementById("loginForm");
    loginForm.style.display="block";
    inputUsername.value="";
    inputPassword.value="";
}



// ----- Init default users ----- //
initDefaultUsers();
// ----- Is the user logged in? ----- //

// ----- Log in ----- //

// ----- Create new account ----- //
createAccount();


// ----- Log in ----- // 

logInBtn = document.querySelector("#logInBtn"); 
logInBtn.addEventListener("click", (e) => {
    e.preventDefault()   

/*    user ={ //Kan jag ta bort denna? 
    userName: inputUsername.value,
    password: inputPassword.value
    } */

let obj = userList.find(o => o.userName === inputUsername.value)

    if(obj != undefined){
        console.log("Namnet finns - fortsätter med inloggning...");
    

       // Använd for OF istället. 

       //Från v42 tills kursen är slut blir det Mån-Tis-Fredag. 
        /*
        userList.forEach((user) => { //ForEach börjar här
        user.userName;
        user.password;
        */


        for (let x of userList) {
            
          



        
        if(inputUsername.value === x.userName && inputPassword.value === x.password){
            console.log("Rätt lösenord!"); //Ta bort denna sen. 

            logInUser(inputUsername.value);

          return  
            
            
        } 
        } 

        felmeddelande("Felaktigt användarnamn eller lösenord. Försök igen.");
            




    } else {
        //console.log("Användarnamnet finns inte");
        felmeddelande("Användarnamnet finns inte. Försök igen.")
    }
});
createAccountBtn = document.querySelector("#createAccountBtn");
createAccountBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showCreateAccount()
})
felmeddelande();

// ----- FUNCTIONS ----- //
function initDefaultUsers(){
    defUserList = [
        {
            userName: "Fredrik",
            password: "12345"
        },
        {
            userName: "Martin",
            password: "555"
        }, 
        {
            userName: "Josefine",
            password: "112233"
        }, 
];
    tempUserList = (localStorage.getItem("users", ));
    if(tempUserList == undefined){
        localStorage.setItem("users", JSON.stringify(defUserList)); //Ladda upp defUserList
    }
    tempUserList = JSON.parse(localStorage.getItem("users", )); //Ladda ner
    userList = tempUserList;
    felmeddelande();
};
function showLogout(){
    
    logoutBtn = document.querySelector("#logoutBtn");
    loginForm = document.querySelector("#loginForm");
    logoutBtn.style.display="block";
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault() 
        
        localStorage.setItem("loggedInUser", "" );
        loginForm.style.display="block";
        logoutBtn.style.display="none";
        pWelcome.innerText="Välkommen! Logga in nedan:"
    })
    felmeddelande();
}
function showCreateAccount(){
    loginForm = document.querySelector("#loginForm")
    loginForm.style.display="none";
    createAccount = document.querySelector("#createAccount")
    createAccount.style.display="block";
    pWelcome = document.querySelector("#pWelcome");
    pWelcome.innerText = "Kul att du vill joina! Du kan skapa ett konto nedan: "
    felmeddelande();
} 



function logInUser(username){
    loginForm = document.getElementById("loginForm");
    loginForm.style.display="none";

    pBadCred.style.display="block";
    console.log(pBadCred.style.display);
    
    pWelcome = document.getElementById("pWelcome");
    pWelcome.innerText=("Välkommen, " + username +"!");
    localStorage.setItem("loggedInUser", username);
    inputUsername.value="";
    inputPassword.value="";
    showLogout();
    felmeddelande();
    

}


function createAccount(){
    createUsername = document.querySelector("#createUsername");
    createPassword = document.querySelector("#createPassword");
    backBtn = document.querySelector("#backBtn");
    btnCreateAccount = document.querySelector("#btnCreateAccount"); 
    btnCreateAccount.addEventListener("click", (e) => {
        e.preventDefault()   
    user ={
        userName: createUsername.value,
        password: createPassword.value
    }
    let obj = userList.find(o => o.userName === createUsername.value);
    console.log(obj); //För felsökning
    if(obj != undefined){
        felmeddelande("Användarnamnet är upptaget. Prova med ett annat användarnamn");
    } else {
        userList.push(user);
        localStorage.setItem("users", JSON.stringify(userList));
        userList = JSON.parse(localStorage.getItem("users", ));
        felmeddelande();
        console.log(userList); //För kontroll i utv-arbete. 
        felmeddelande("Kontot " + createUsername.value + " skapades.");
        createUsername.value=("");
        createPassword.value=("");
        

    }
    });
    backBtn.addEventListener("click", (e) => {
        e.preventDefault()   
        showLogin()   
    })
};

function showLogin(){
    createAccount = document.querySelector("#createAccount")
    createAccount.style.display="none";
    loginForm = document.querySelector("#loginForm")
    loginForm.style.display="block";
    pWelcome.innerText="Välkommen! Logga in nedan:"
    inputUsername.value="";
    inputPassword.value="";
    felmeddelande();
}



function felmeddelande(errorCode){
    pBadCred.style.display="block";
    pBadCred.textContent = errorCode;
};


console.log(userList); // Enbart för kontroll i utv.arbete.