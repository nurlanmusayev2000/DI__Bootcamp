let numofBottles = prompt("add number to begin counting down bottles.")

let x = 0;
console.log(`${numofBottles} bottles of beer on the wall`);
console.log(`${numofBottles} bottes of the beer`);
for (let i = numofBottles; i > 0; i--) { //99    98  97
    x++; //  1   2     3
    if (i > x) {
        console.log(`take ${x} down, pass it around`); // 1  2   3
        i -= x; //98   96       

        console.log(`${i} bottles of beer on the wall`); // 98  96
        console.log(`${i} bottles of beer on the wall`); // 98   96
        console.log(`${i} bottes of the beer`); //  98      96
        i++;
    } else {
        console.log("No more bottles of beer on the wall, no more bottles of beer.")
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall...")
        i = 0;
    }
}