//Retrieve the form and console.log it.
let form = document.forms[0];
console.log(form)
    //Retrieve the inputs by their id and console.log them.
let formById = document.forms[0].fname;
console.log(formById)
//Retrieve the inputs by their name attribute and console.log them.
let formByName = document.forms[0].firstname;
console.log("🚀 ~ file: exercise.js:9 ~ formByName:", formByName)

/* When the user submits the form (ie. submit event listener)
use event.preventDefault(), why ?
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form. */
let ul = document.querySelector(".usersAnswer")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstnameInp = form.querySelector("#fname").value;
    let lastnameInp = form.querySelector("#lname").value;
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    li1.innerText = firstnameInp;
    li2.innerText = lastnameInp;
    ul.appendChild(li1);
    ul.appendChild(li2);


})