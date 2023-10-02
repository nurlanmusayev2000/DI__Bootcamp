const robots = [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

function navSide() {
    let nav = document.querySelector(".nav");
    let navLeft = document.createElement("div");
    navLeft.innerText = "RoboFriends";
    navLeft.classList.add("logoName")
    nav.appendChild(navLeft);
    let navRight = document.createElement("div");
    navRight.classList.add("navSearch")
    nav.appendChild(navRight);
    let searchForm = document.createElement("form");
    let searchInput = document.createElement("input");
    searchInput.placeholder = "Search Robots";
    searchForm.name = "formName";
    searchForm.classList.add("searchForm")
    searchInput.name = "inputName";
    navRight.appendChild(searchForm);
    searchForm.appendChild(searchInput);
};
navSide();
let section = document.querySelector("section")

function mainSide(a) {
    section.innerHTML = "";
    for (let robot of a) {
        let robotCard =
            ` <div class="roboCard">
            <img src=${robot.image} alt="">
            <h1>${robot.name}</h1>
            <p>${robot.email}</p>
       </div>`
        section.innerHTML += robotCard

    }
}

mainSide(robots)
    /* ---------------------------------------- */

let inputValue = [];
let searchInput = document.forms.formName.inputName;


function getInput(event) {

    inputValue = robots.filter((val) => {

        // !!! input value ve target her birini lovercase etdikde daha duzgun netice verir

        return val.name.includes(event.target.value)
    })

    console.log(inputValue);

    mainSide(inputValue)
        // 
}
searchInput.addEventListener("input", getInput);