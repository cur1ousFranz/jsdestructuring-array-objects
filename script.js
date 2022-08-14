/**
 * Using destructuring in an array of objects
 * and passed it to a function with destructuring parameter
 */ 
const userArr = [
    {
        first : 'John',
        age : '23',
        attribute : {
            tall : "5'7",
            weight : '55kg',
        }
    },
    {
        first : 'Doe',
        age : '21',
        attribute : {
            tall : "6'7",
            weight : '60kg',
        }
    }
]

function printUser({first, age, attribute: {tall, weight}}){
    return `${first}, ${age}years old, and has a tall of ${tall} and weight of ${weight}`;
}
userArr.forEach(user => console.log(printUser(user)))

/**
 * Using destructuring to simple array and assigned to
 * variables, and using with spread operator
 * 
 * Destructuring objects should be closed by square brackets
 */
const numArr = [10, 20, 30, 40, 50];

const [a, b, c, ...rest] = numArr;
console.log(rest);

/**
 * Using destructuring to simple object
 * and assigned to variables, and using with spread operator
 * 
 * Destructuring objects should be closed by curly braces
 */

const fruitObj = {
    apple : 'Red',
    grapes : 'Violet',
    mango : 'Yellow',
    guava : 'Green',
    orange : 'Orange',
}

const {apple, grapes, ...fruits} = fruitObj;
console.log(fruits);

