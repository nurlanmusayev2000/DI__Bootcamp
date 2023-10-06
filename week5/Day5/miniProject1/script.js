async function getStarApi() {
    let random = Math.floor(Math.random() * 10)
    if (random == 0) {
        random = 1
    }
    console.log(random);
    let apiFetch = await fetch(`https://www.swapi.tech/api/people/${random}`);
    let tojson = await apiFetch.json();
    let gethomeWorld = await fetch(tojson.result.properties.homeworld);
    let tojsonHomeWorld = await gethomeWorld.json();

    if (tojson.message == "ok") {
        let arroffApis = [tojson.result.properties, tojsonHomeWorld.result.properties.name]
        return arroffApis
    } else {
        throw new Error("api is not correct");
    }
}

function activity() {
    let animationActivity = document.querySelector(".animation")
    let elements = document.querySelector(".elements");
    elements.classList.add("active");
    animationActivity.classList.remove("passive");
}

function domElemInstr(name, height, gender, birthyear, homeWorld) {



    setTimeout(() => {

        let animationActivity = document.querySelector(".animation")
        let elements = document.querySelector(".elements");
        animationActivity.classList.add("passive");
        elements.classList.remove("active");

        let fullName = document.getElementById("fullName")
        let heightOfPer = document.querySelector("#height span")
        let genderOfPer = document.querySelector("#gender span")
        let birthyearOfPer = document.querySelector("#birthyear span")
        let homeworldOfPer = document.querySelector("#homeworld span")
        fullName.innerText = name;
        heightOfPer.innerText = height;
        genderOfPer.innerText = gender;
        birthyearOfPer.innerText = birthyear;
        homeworldOfPer.innerText = homeWorld;

    }, 2000)
}

function callRandom() {
    activity();
    getStarApi().then((res) => {
        domElemInstr(res[0].name, res[0].height, res[0].gender, res[0].birth_year, res[1])



    }).catch((err) => {
        console.log(err);
    });
}