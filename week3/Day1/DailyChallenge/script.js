let classes = ["mars", "jupiter", "earth", "venus", "mercury", "saturn", "neptune"];
let div;
let sectionEl = document.querySelector(".listPlanets");
let planets = [{ namePlanet: "Mars", moon: 5 }, { namePlanet: "Jupiter", moon: 3 }, { namePlanet: "Earth", moon: 2 }, { namePlanet: "Venus", moon: 2 }, { namePlanet: "Mercury", moon: 6 }, { namePlanet: "Saturn", moon: 1 }, { namePlanet: "Neptune", moon: 3 }];
let j = 0;
for (var i = 0; i < classes.length; i++) {
    div = document.createElement("div");
    div.classList.add("planet");
    div.classList.add(classes[i]);
    sectionEl.appendChild(div);
    let childEl;
    j = i;
    console.log(planets[j].moon)
    for (let y = 0; y < planets[j].moon; y++) {
        console.log("salam")
        childEl = document.createElement("div");
        childEl.classList.add("moon");
        div.appendChild(childEl)
    }


}