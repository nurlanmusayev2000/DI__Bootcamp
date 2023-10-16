let form = document.forms.doList;
let name = form.name;
let startDate = form.startDate;
let endDate = form.endDate;
let description = form.description;
let checking = form.checking;
let submit = form.submit;
let formValueArray = []
let fromLocalStorage;
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    let formValue = Object.fromEntries(formData);
    formValueArray.push(formValue);
    let json = JSON.stringify(formValueArray);
    localStorage.setItem('values', json);

    name.value = "";
    description.value = "";
    checking.value = ""
})