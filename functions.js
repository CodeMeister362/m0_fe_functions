// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting(){
    console.log("Hey, welcome home!");
}

printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function firstName(name){
    console.log(`Hello there ${name}`)
}

firstName("Nate");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function companyX(string, _num1, _num2){
    var range = Math.abs(_num1 - _num2);
    console.log(`Vertafore's pay range is ${range}`)
}

companyX("string", 45000, 80000);

// 4: Write a function that satifies the following interaction pattern:


function checkStock(number, food){
    if (number === 4) {
       console.log(`${food} is stocked`)
      } else if (number >=1 ){
       console.log(`${food} running LOW`)
      } else {
           console.log(`${food} out of stock!`);
      }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
