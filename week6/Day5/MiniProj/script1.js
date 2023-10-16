let container = document.querySelector('.container')
let getValue = localStorage.getItem('values');
let fromLocalStorage = JSON.parse(getValue);

function createElement() {
    let element;
    let elements = fromLocalStorage.map((val) => {

        let dateconfStart = new Date(val.startDate)
        let dateconfEnd = new Date(val.endDate)
        if (dateconfEnd < new Date()) {
            element =
                ` <p onclick="displayDescription()" class = "name ${val.checking}">Name:${val.name}</p>
                <p class="taskDescription active">Description: ${val.description} </p>    
<p>Starting date: ${dateconfStart} </p>
<p>${dateconfEnd.getDate() - dateconfStart.getDate() } days letf to complete the task</p>`

        } else {
            element =
                ` <p onclick="displayDescription() class = "name ${val.checking}" >Name:${val.name}</p>
                <p>Description: ${val.description} </p>    
            <p>Starting date: ${dateconfStart} </p>
            <p>${dateconfEnd.getDate() - new Date().getDate()  } days letf to complete the task</p>`

        }

        container.innerHTML += element
        isComplete();


    })

    return elements

}





createElement();

function isComplete() {
    let check = document.querySelector('.name').classList.contains("on");
    if (check) {
        document.querySelector('.name').style.backgroundColor = "green"
    } else {
        document.querySelector('.name').style.backgroundColor = "red"
    }
}

function displayDescription() {
    document.querySelector('.taskDescription').classList.toggle('active')
}