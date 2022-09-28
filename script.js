//console.log("Ööööös");
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


/*
const myUserList = {
    user : "AAA",
    pwd : "12345"

 };
*/


// ---- TEST CABIN ---- //

//console.log(theUserList.indexOf(nameInput));
//console.log(nameInput.value);
console.log(nameInput);
console.log(pwdInput);
console.log(findpassword);
console.log(verify);
console.log(document.querySelector("#inputUsername").value);




// ---- TEST CABIN ENDS ---- //

btn.addEventListener("click", (e) => {
    e.preventDefault()

    nameInput = document.querySelector("#inputUsername").value;
    pwdInput = document.querySelector("#inputPassword").value;
    console.log(nameInput);
    console.log(pwdInput);

    theUserList = ["AAA", "12345", "BBB", "54321"];
    let verify = (theUserList.indexOf(nameInput));
    findpassword = (verify+1);
    console.log(theUserList[findpassword]);
    
    pwd = theUserList[findpassword];
    console.log(pwd);
    

    


    if(theUserList.includes(nameInput))
    {
        console.log("Användaren finns");
        userIs = true;
    } else {
        console.log("Användaren finns INTE");
        userIs = false;
        
    }
    console.log(userIs);
    

    if(userIs === true && pwdInput === pwd)
    {
        console.log("Inloggad!")
        userIsLoggedIn = true;

    } else {
        console.log("Felaktigt användarnamn eller lösenord");
        userIsLoggedIn = false;
        
        console.log(nameInput);
        console.log(pwdInput);
        console.log(userIsLoggedIn);
    }


});

console.log(nameInput);

    /*
    const username = document.querySelector("inputUsername").value;    
    console.log(username);
    */

//console.log(theUserList.includes(nameInput));
