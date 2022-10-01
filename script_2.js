// ----- Set variables ----- //
var inputUsername,
    inputPassword,
    logInBtn,
    errorCode,
    userList,
    tempUserList,
    user,
    defUserList,
    btnCreateAccount;




// ----- Init default users ----- //
initDefaultUsers();
// ----- Log in ----- //

// ----- Create new account ----- //

// ----- Fetch document-stuff ----- //
createUsername = document.querySelector("#createUsername");
createPassword = document.querySelector("#createPassword");
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
    felmeddelande("User exists")
} else {
    userList.push(user);
    localStorage.setItem("users", JSON.stringify(userList));
    userList = JSON.parse(localStorage.getItem("users", ));
    felmeddelande();
}});

//let listKoll = localStorage.getItem("users",)
//console.log(listKoll.length);

function felmeddelande(errorCode){
    const p = document.getElementById("badCred");
    p.style.display="block";
    p.textContent = errorCode;
};

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
    if(tempUserList == ""){
        localStorage.setItem("users", JSON.stringify(defUserList)); //Ladda upp defUserList
    }
    tempUserList = JSON.parse(localStorage.getItem("users", )); //Ladda ner
    userList = tempUserList;
    };
    console.log(userList);