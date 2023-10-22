/* let element = document.querySelector('button');
element.addEventListener('click', async() => {
    const trial = await fetch("http://localhost:3010/app/question/0");
    let result = await trial.json()
    console.log(result);
}) */


let forms = async() => {
    let logForm = document.forms.logIn;


    logForm.addEventListener('submit', async(e) => {
        e.preventDefault();

        let getForm = new FormData(logForm);
        let entry = Object.fromEntries(getForm)
        const username = entry.username;
        const email = entry.email;

        const postDatas = await fetch('http://localhost:3010/app/starting', {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email }),
        })
        console.log(username, email);
        window.open('\game.html', '_self')
    })




}

forms()