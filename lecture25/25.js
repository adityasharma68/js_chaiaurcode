//Here we discuss about how does Js excecute code..? in this lecture imp ques for INTERVIEW.

//JAVASCRIPT EXCECUTION CONTEXT
// {} > Global Excecution Context.

// There many types of Execution Context:
// Global Execution Context
// Function/Functional execution context
// Eval execution context

//here is the basic code

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(1, 2);

console.log(result1);
console.log(result2);

// how it execute in the js.
// step1: GEC

// step2: memory phase, val1 > undefined
//                      val2 > undefined
//                      addNum > defination
//                      result1 > undefined
//                      result2 > undefined

// step3: Execution phase, val1 << 10
//                         val2 << 5
//                         addNum >> [new variable environment + execution thread]>> in this environment when the work is complete then it deleted from the memory, and then make new variable again.
//                                      ^                       ^
//                                      ^                       ^
//                                MEMORY PHASE           EXECUTION CONTEXT
//                              val1 > undefined            num1 >> 10
//                              val2 > undefined            num2 >> 5
//                              total > undefined           total >> 15
