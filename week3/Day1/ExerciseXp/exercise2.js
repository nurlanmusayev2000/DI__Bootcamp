/* Add the code above, to your HTML file

Using Javascript:
Add a “light blue” background color and some padding to the <div>.
Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
Change the font size of the whole body.

Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div). */

let divEl = document.querySelector("div");
divEl.style.backgroundColor = "lightBlue";
divEl.style.padding = "15px";
let li = document.querySelector("li");
li.style.display = "none";
li.nextElementSibling.style.border = "2px solid";
divEl.parentElement.style.fontSize = "20px"