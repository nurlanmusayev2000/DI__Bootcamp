const menu = [{
            type: "starter",
            name: "Houmous with Pita"
        },
        {
            type: "starter",
            name: "Vegetable Soup with Houmous peas"
        },
        {
            type: "dessert",
            name: "Chocolate Cake"
        }
    ]
    /* 
 1. Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
 2.Using an array method, check if all the elements in the array are starters.
 Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.
  */
let result;
menu.forEach(element => element.type == "dessert" ? result = true : false);
//console.log(result);

result = menu.every((e) => {
    e.type == "starter"
});
//console.log(result);

result = menu.some((e) => { e.type == "main course" });
if (!result) {
    let maincourse = {
        type: "main course",
        name: "Steak"
    };
    menu.push(maincourse)
}
//console.log(menu);