//Task 1: Student Result Checker

let mark = 75;

if(mark >= 90) {
    console.log("Grade A")   
}
else if (mark >= 75){
    console.log("Grade B")  
}
else if (mark >= 60){
    console.log("Grade c")  
}

else if(mark>=35){
    console.log("Pass")
}

else{
    console.log("Fail")
}

//Task 2: Employee Bonus Calculator

let salary = 25000

let bonus = salary *(10/100)

let finalSalary = salary + bonus

console.log("Original salary : " , salary)
console.log("Bonus : " , bonus)
console.log("Final salary : " , finalSalary)


//Task 3: User Login Validation

let email = "admin@gmail.com"
let password = "12345"

if(email == "admin@gmail.com" && password == "12345"){
    console.log("Login Success")
}

else{
    console.log("Login failed")
}

// Task 4: Product Discount Calculator

let price = 1000;

let finalAmount = price > 1000 ? price-(price*20/100):price

console.log("Final price : " , finalAmount)

//Task 5: Array Product Management
let products = ["Laptop","Mobile","Mouse","Keyboard"];
console.log(products[0])
console.log(products[3])
console.log(products.length)

// Task 6: Employee Object

let employee = {
 name:"Naveen",
 department:"Development",
 salary:30000
}
console.log(employee)
console.log(employee.name)
console.log(employee.salary)

// Task 7: E-Commerce Cart Total

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let Total=shirt+pant+shoe
let discount=Total*(10/100)
console.log("final amount", Total-discount)


// Task 8: Age Eligibility Checker

let age = 19;
if(age>=18){
    console.log("Eligible for Voting")
}
else{
    console.log("Not Eligible")
}

// Task 9: Increment Decrement Practice

let a=10;

console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);


// Task 10: Mini Employee Attendance System

let isPresent = true;
let completedTask = true;

if(isPresent == true && completedTask == true){
    console.log("Eligible for salary")
}
else{
    console.log("Not Eligible")
}

// Employee Management Console App

let employee = {
 id:101,
 name:"John",
 department:"Development",
 salary:35000,
 experience:2
}

let Bonus=3500

console.log("Employee ID :",employee.id)
console.log("Employee Name:",employee.name)
console.log("Department : ",employee.department)
console.log("Salary : ",employee.salary)
console.log("Experience : ",employee.experience)
console.log("Bonus : ",Bonus)
console.log("Final salary : ", employee.salary + Bonus)
console.log("Performance Status : Good")