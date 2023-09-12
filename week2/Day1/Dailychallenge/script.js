//TASK 1

//Remove Banana from the array.
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
console.log(fruits);
//Sort the array in alphabetical order.
let abc = fruits.sort();
console.log(abc)

//Add “Kiwi” to the end of the array.
abc.push("Kiwi");
console.log(fruits);
//Remove “Apples” from the array. Don’t use the same method as in part 1.
delete fruits[0];
fruits.splice(0, 1)
console.log(fruits);
//Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
fruits.reverse();
console.log(fruits)


//TASK 2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits);
//Access and then console.log “Oranges”.
console.log(moreFruits[1][1][0])