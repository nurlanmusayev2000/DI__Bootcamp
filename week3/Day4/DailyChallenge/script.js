const tasks = [];
const getForm = document.forms.listForm
const getInput = document.forms.listForm.list;
const getListTasks = document.querySelector(".listTasks");
let counter = 0;



getForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (getInput.value.length != 0) {
        tasks.push(getInput.value);


        getListTasks.innerHTML += `
            <form >
            <i class="cancelBtn fa-regular fa-rectangle-xmark" onclick="cancelBtn(event)"></i>
            <input type="checkbox">
            <input type="text" value = "${tasks[counter]}">
            </form>
           
            `
        counter++
        getInput.value = ""

    } else {
        alert("pleade don't add empty input")
    }




})