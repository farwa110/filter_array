const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const nameToDealWith = "firstName";

console.log(student1[nameToDealWith]);
console.log(student1["lastName"]);
console.log(student1.lastName);

// finde det rigite array , for each , query selector
// . notation with bracet notation
// select  html label på mdn

console.log(student1.names.lastName);
console.log(student1["names"].lastName);
console.log(student1["firstName"]["lastName"]);
//its the same above consoles

/* <td>${each.isTandem ? "X": "-"}</td> */
// its a ternary conditional operator which can be used instead of if else statements which are very long and goes code v short .
//used in react
//condition ? exprIfTrue : exprIfFalse (ternary)
