function infoAboutMe() {
    console.log("my name is Nurlan .I am 23 . My hobbies are reading , visiting.")
}
// infoAboutMe()


function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)

}
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow")



/* let tip = 1;
let amountOfBil = prompt("Please add the amount of the bill");

function calculateTip() {
    if (!isNaN(amountOfBil)) {
        if (amountOfBil <= 50) {
            return tip = amountOfBil * 20 / 100;

        } else if (amountOfBil > 50 && amountOfBil <= 200) {
            return tip = amountOfBil * 15 / 100;
        } else if (amountOfBil > 200) {
            return tip = amountOfBil * 10 / 100
        }
    } else {
        //      console.log("add a number please")
    }

}
calculateTip();
//console.log(`todays tip is ${tip}$ and the final bill is ${Number(amountOfBil) + Number(tip)} `)
 */
let result = 0;

function isDivisible(a) {
    for (let i = 0; i < 500; i++) {
        if (i % a == 0) {
            //          console.log(i)
            result += i;

        }

    }
    return result
}

//console.log(isDivisible(10))


/* 
Add the stock and prices objects to your js file.

Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

Create a function called myBill() that takes no parameters.

The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

Call the myBill() function.

Bonus: If the item is in stock, decrease the item’s stock by 1
*/


let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

const shoppingList = ["banana", "orange", "apple"];
let fruitPrice = 0;

function myBill() {
    for (fruit in stock) {
        for (myFruit in shoppingList) {
            if (fruit == shoppingList[myFruit] && stock[fruit] > 0) {

                stock[fruit] = stock[fruit] - 1;
                fruitPrice += prices[fruit];


            }
        }
    }
    return fruitPrice;
}


//console.log(myBill())
//console.log(stock)




/* Exercise 5 : What’s In My Wallet ? */
//changeEnough(4.25, [25, 20, 5, 0])
/* let totalcoin = 0;

function changeEnough(itemPrice, amountOfChange) {

    for (coin of amountOfChange) {
        amountOfChange[0] = amountOfChange[0] * 0.25;
        amountOfChange[1] = amountOfChange[1] * 0.10;
        amountOfChange[2] = amountOfChange[2] * 0.05;
        amountOfChange[3] = amountOfChange[3] * 0.01;

        totalcoin += coin;
    }
    if (totalcoin >= itemPrice) {
        return true
    } else {
        return false
    }


}

console.log(changeEnough(14.11, [2, 100, 0, 0])) */


//EXERCISE 6

function hotelCost() {
    let numOfDay = prompt("please add a number of nights");
    let hotelprice;
    if (isNaN(numOfDay)) {
        return alert("Please add a number")
    } else {
        hotelprice = 140 * Number(numOfDay);

    }
    return hotelprice


}



function planeRideCost() {
    let destination = prompt("Please add the destination ");
    let planeCost;
    if (!isNaN(destination) || destination == "" || destination == " ") {
        console.log("This is not a string")
        alert("please add city name")
        planeRideCost()
    } else {
        if (destination == "London") {
            planeCost = 183;
            console.log(`The price is 183$ for london`)
        } else if (destination == "Paris") {
            planeCost = 220;
            console.log(`The price is 220$ for Paris`)
        } else {
            planeCost = 300;
            console.log(`The price is 300$ `)
        }
    }

    return planeCost
}






function rentalCarCost() {
    let dayForCar = prompt("please add how long you want  rent a car");
    let totalForCar;
    if (!isNaN(dayForCar) && dayForCar != " " && dayForCar != "") {
        if (dayForCar <= 10) {
            totalForCar = 40 * dayForCar;
            console.log("total price " + totalForCar + " $")
        } else {
            totalForCar = (40 * dayForCar) - ((40 * dayForCar) * 0.05);
            console.log("you get discount 5% so you will pay " + totalForCar)
        }
    } else {
        alert("please add only number");
        rentalCarCost()
    }

    return totalForCar
}




function totalVacationCost() {
    console.log(`hotel cost for you is ${hotelCost()} , ticket cost for you is ${planeRideCost()} and the car for a rent is ${rentalCarCost()}`)
}

totalVacationCost();