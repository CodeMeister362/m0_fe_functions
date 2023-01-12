// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();
// For example 1 I've added a ; after the parentheseis of the console.log and after the call parenthesis becasuse it's best practice. 



// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//For example 2 I have indented line 22 and 23 and brought the last curly bracket inline under function so it's easy to read/see the code block. 


function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();

//For example 3 I've completed the word function that wasn't typed fully. 

//  EX 4:
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}`)
  }

average(4, 5);
//For example 4 I've brought the curly bracket back up to line 44. Indented line 45. Took away space on line 46. Deleted the . before the last parenthesis on the console.log. I've also called the funtion with 4 and 5 in order to get it to carry out its instructions.