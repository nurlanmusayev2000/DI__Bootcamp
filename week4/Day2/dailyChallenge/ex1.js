let client = 'John';

const groceries = {
  fruits: ['pear', 'apple', 'banana'],
  vegetables: ['tomatoes', 'cucumber', 'salad'],
  totalPrice: '20$',
  other: {
    paid: true,
    meansOfPayment: ['cash', 'creditCard'],
  },
};

/* Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method. */
let displayGroceries = () => {
  groceries.fruits.forEach((element) => {
    console.log(element);
  });
};

//displayGroceries()

/* 
Create another arrow function named cloneGroceries.
In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
*/
/* 
In the function, create a variable named shopping that is equal to the groceries variable.
Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
*/

let cloneGroceries = () => {
  let user = client;
  let shopping = groceries;

  //   !!! groceries variable-in value-su array oldugu ucun object reference olunur.
  // !!! bu zaman shopping array-in value-su hemin deyerin ramda yerlesdiyi yer yazilir
  // !!! her iki variable eyni obyekti gosterir
  // !!! shopping uzerinde edilen deyisiklikler eyni 1  ortaq deyer oldugu ucun her iki variable gosterecek

  shopping.totalPrice = '35$';
  shopping.other.paid = false;
  console.log(shopping);
  console.log(groceries);
};
cloneGroceries();
