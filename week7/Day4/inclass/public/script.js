function sendData() {
    let user = document.getElementById('user').value;
    let userdata = {
        user,
    }
    fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('root').innerHTML = `${data.message}`
        })
        .catch(err => {
            console.log(err);
        })
}

function getData() {
    fetch('http://localhost:3000/show')
        .then(res => res.json())
        .then(data => {
            showUsers(data);
        })
}

function showUsers(data) {
    let root = document.getElementById('root');
    root.innerHTML = "";
    data.forEach(item => {
        let div = document.createElement('div');
        div.innerText = item.username;
        root.appendChild(div)
    })
}

function findData() {
    let user = document.getElementById('user').value;
    let userdata = {
        user,
    }
    fetch('http://localhost:3000/find', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('root').innerHTML = `${data.message}`
        })
        .catch(err => {
            console.log(err);
        })
}