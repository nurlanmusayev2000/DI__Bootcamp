import person from "./data.js";
let a = 0;
let ages = person.map((val, ind) => {
    a += val.age
    if (ind == person.length - 1) {
        console.log(a / (person.length - 1));
    }
})