//console.log("Ööööös");
const nameInput = document.querySelector("#inputUsername")
const pwdInput = document.querySelector("#inputPassword")
let username = "";
let userpwd = "";

const btn = document.querySelector("button");

const myUserList = {
    user : "AAA",
    pwd : "12345"

 };



btn.addEventListener("click", (e) => {
    e.preventDefault();

    if(nameInput.value === myUserList.user && pwdInput.value === myUserList.pwd)
    {
        console.log("Inloggad!")
    } else {
        console.log("Felaktigt användarnamn eller lösenord");
        //console.log(username);
    }
})
console.log(myUserList.user);
console.log(username);


if (username === myUserList.user){
    console.log("Hahahah");
}
    /*
    const username = document.querySelector("inputUsername").value;    
    console.log(username);
    */


// ----- LOGIN BACKBONE ----- //
theUserList = ["AAA", "12345", "BBB", "54321"];
let verify = (theUserList.indexOf("AAA"));
let findpassword = (verify+1)
console.log(theUserList[findpassword]);