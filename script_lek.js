let nameInput ="";
let pwdInput = "";
const btn = document.querySelector("#button");

btn.addEventListener("click", function() {
    nameInput = document.querySelector("#inputUsername").value;
    pwdInput = document.querySelector("#inputPassword").value;
    //e.preventDefault(); Oklart behov i denna applikation.
    //console.log("Button clicked!");
    
    
    console.log(nameInput);
    console.log(pwdInput);
});
