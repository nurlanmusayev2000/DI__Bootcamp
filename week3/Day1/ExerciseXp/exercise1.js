/* Using Javascript:
Retrieve the div and console.log it
Change the name “Pete” to “Richard”.
Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
Change each first name of the two <ul>'s to your name. (Hint : use a loop)

Bonus - Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>. */

let divel = document.querySelector("div");
let ul1 = document.querySelector("ul");
let nameChange = ul1.lastElementChild;
nameChange.textContent = "Richard";
let ul2 = document.querySelector(".list").nextElementSibling; /* !!! queryselectorall isledib indexle de sece bilersen */
let secondLi = ul2.firstElementChild.nextElementSibling;
secondLi.remove();
let uls = document.querySelectorAll("ul");
for (ul of uls) {
    var result = ul.firstElementChild.textContent = "Nurlan"
    ul.classList.add("student_list");
}

for (let i = 0; i < uls.length; i++) { /* !!! for loop unnecessary? */
    uls[0].classList.add("university", "attendance")
}