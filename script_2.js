// ----- Set variables ----- //
var inputUsername="",
    inputPassword,
    logInBtn,
    userList,
    user;
    

// ----- Fetch document-stuff ----- //
inputUsername = document.querySelector("#inputUsername");
inputPassword = document.querySelector("#inputPassword");


// ----- Push new user ----- //
logInBtn = document.querySelector("#logInBtn");
logInBtn.addEventListener("click", (e) => {
    e.preventDefault()

    console.log(inputUsername.value);
    console.log(inputPassword.value);
    userList.push(new User(inputUsername.value, inputPassword.value));


});

// ----- Initialize login ----- //

// ----- Check credidentials ----- //

userList = [

];
const person1 = new User("Fredrik", "12345");
userList.push(person1);

function User(userName, password) {
    this.userName = userName;
    this.password = password;
}
    


console.log(userList)
console.log(userList.length);



//userList.push("userName: Test")
/*
for(let user of userList) {
    console.log(user.userName);
};
*/

// program to append an object to an array

