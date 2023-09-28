/* ------1------*/ //[bread , carrot , potato , chicken , apple,orane , ]
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
//console.log(result);

/* ------2------*/
const country = "USA";
//console.log([...country]); //[u,s,a]

/* ------Bonus------ */
let newArray = [...[, , ]];
//console.log(newArray);


/* Using the map() method, push into a new array the firstname of the user and a welcome message.*/
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];
let newArr = users.map((val) => {
    return " welcome " + val['firstName']
})

//console.log(newArr);


/* 2. Using the filter() method, create a new array, containing only the Full Stack Residents. */

const newArr2 = users.filter((val) => {
        return val['role'] == 'Full Stack Resident'
    })
    //onsole.log(newArr2);


/* Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents. */
let lastNameOfUs = users.map((val) => {
    return { lastName: val['lastName'], role: val['role'] }
})

const fullStacks = lastNameOfUs.filter((val) => {
        return val['role'] == 'Full Stack Resident'
    })
    //console.log(fullStacks);

    // !!! birinci filter edib daha sonra map etsek daha elverisli olar


/* Use the reduce() method to combine all of these into a single string. */
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const singleStr = epic.reduce((acc, val) => {
    let withSpace = ` ${val} `
    return acc + withSpace
})

//console.log(singleStr);

const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];


/* Using the filter() method, create a new array, containing the students that passed the course. */
let passedStud = students.filter((val) => {
        return val['isPassed'] == true
    })
    //console.log(passedStud);

/* Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…) */

let sent = [];
passedStud.forEach(element => {
    sent.push(`Good Job ${element['name']} you passed the course in ${element['course']}`)
});

console.log(sent);

// !!! elave olaraq spread edib yaya bilersen cumle kimi olmasi ucun