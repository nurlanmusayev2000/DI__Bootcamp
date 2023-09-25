import { cityArrDatas } from "./data.js";
let leftIcon = document.querySelector("#opencity");
let cityArr = [{
        nameOfCity: "Baku",
        releatedLink: "cities.html"
    },
    {
        nameOfCity: "Shusha",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Qakh",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Lerik",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Astara",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Lenkeran",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Ismayilli",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Gence",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Jabrayil",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Kalbacar",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Quba",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Qusar",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Qebele",
        releatedLink: "cities.html"
    }, {
        nameOfCity: "Sheki",
        releatedLink: "cities.html"
    }
];

function openCities() {
    if (leftIcon.className == "fa-solid fa-caret-left") {
        leftIcon.className = "fa-solid fa-sort-down";


    } else {
        leftIcon.className = "fa-solid fa-caret-left"
    }
}

document.getElementById("opencity").addEventListener("click", openCities)

console.log(cityArrDatas()[0].cityName)