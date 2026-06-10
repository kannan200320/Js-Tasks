//Task 1: Employee Salary Calculator Scenario

let basicSalary = 25000;
let HRA = 25000 * (20/100)
let Bonus = 25000 * (10/100)
let Tax = (basicSalary+ HRA + Bonus) * (5/100)
let finalSalary = basicSalary+ HRA + Bonus - Tax

console.log("Basic Salary : ",basicSalary)
console.log("HRA : " , HRA)
console.log("Bonus : ", Bonus );
console.log("Tax : " , Tax)
console.log("Final Salary : ", finalSalary)


// Task 2: Student Grade System
// Scenario


let mark = prompt("Enter your mark : ");

if (mark >= 90 && mark <= 100) {
    console.log("A+");
} else if (mark >= 80 && mark < 90) {
    console.log("A");
} else if (mark >= 70 && mark < 80) {
    console.log("B");
} else if (mark >= 60 && mark < 70) {
    console.log("C");
} else if (mark < 60) {
    console.log("Fail");
} else {
    console.log("Invalid mark");
}

// Task 3: Login Authentication System
// Scenario

let data = {
    name:"admin",
    password:"12345"
}

let name = prompt("Enter your name : ")
let password = prompt("Enter your password : ")

if(name == data.name && password == data.password){
    console.log("Hi " , name , " welcome back");   
}
else if(name!= data.name){
    console.log("Invalid Username");
    
}

else if(password!= data.password){
    console.log("Invalid Password");
    
}

// Task 4: ATM Withdrawal Machine
// Scenario

let balance = 5000
let amount = prompt("Enter your amount : ")

if(amount > balance){
    console.log("Insufficient Balance");
    console.log("Balance Amount : " , balance);
    
}
else{
    console.log("Withdrawal Success");
    console.log("Balance amount : " , balance - amount)
}


// Task 5: E-Commerce Discount System
// Scenario


let purchase = 12000;
let discount = 0;

if (purchase >= 10000) {
    discount = purchase * 0.20;
} else if (purchase >= 5000) {
    discount = purchase * 0.10;
} else if (purchase >= 2000) {
    discount = purchase * 0.05;
} else {
    discount = 0;
}

let finalAmount = purchase - discount;

console.log("Original Amount: ₹" + purchase);
console.log("Discount: ₹" + discount);
console.log("Final Amount: ₹" + finalAmount);


// Task 6: Traffic Fine Checker
// Scenario

let helmet = "No";
let license = "No";
let fine = 0;

if (helmet === "No" && license === "No") {
    fine = 3000;
} else if (helmet === "No") {
    fine = 1000;
} else if (license === "No") {
    fine = 2000;
} else {
    fine = 0;
}

console.log("Total Fine: ₹" + fine);

// Task 7: Employee Attendance Tracker
// Scenario

let attendance = ["P", "P", "A", "P", "A", "P", "P"];
let present = 0;
let absent = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        present++;
    } else {
        absent++;
    }
}

console.log("Present Days : " + present);
console.log("Absent Days : " + absent);

// Task 8: Product Inventory Management
// Scenario

let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + " : " + product[key]);
}

// Task 9: Cab Fare Calculator
// Scenario

let distance = 12;
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
} else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
} else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}

console.log("Total Fare : ₹" + fare);

// Task 10: Mini Employee Management System (Real Company Task)
// Requirements


let employees = [
    {id: 1, name: "Rahul", salary: 25000},
    {id: 2, name: "Kiran", salary: 30000},
    {id: 3, name: "Navi", salary: 40000}
];

let highest = employees[0];
let lowest = employees[0];
let totalSalary = 0;

console.log("--- All Employees ---");
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name + " - Salary: " + employees[i].salary);
    
    // Total Salary
    totalSalary = totalSalary + employees[i].salary;
    

    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }
    

    if (employees[i].salary < lowest.salary) {
        lowest = employees[i];
    }
}

console.log("Highest Salary: " + highest.name + " (" + highest.salary + ")");
console.log("Lowest Salary: " + lowest.name + " (" + lowest.salary + ")");
console.log("Total Employees: " + employees.length);
console.log("Total Salary Expenditure: " + totalSalary);


// Extra tasks
//Task 1: Age Category Finder

let age  = prompt("Enter your age ")

if(age <= 12){
    console.log("Child")
}
else if(age <= 19 && age >= 13){
    console.log("Teenager")
}
else if(age <= 59 && age >= 20){
    console.log("Adult")
}
else{
    console.log("Senior Citizen")
}

//Task 2: Salary Hike Calculator

let currentSalary = prompt("Enter your current salary ")

if(currentSalary > 50000){
    console.log("current salary is ", currentSalary)
    console.log("Hike is 5%")
    console.log("New salary is ", currentSalary * 1.05)
}
if(currentSalary < 50000 && currentSalary>=20000){
    console.log("current salary is ", currentSalary)
    console.log("Hike is 10%")
    console.log("New salary is ", currentSalary * 1.1)
}

if(currentSalary<20000){
    console.log("current salary is ", currentSalary)
    console.log("Hike is 20%")
    console.log("New salary is ", currentSalary * 1.2)
}

// Task 3: Electricity Department

let units = prompt("Enter the number of units consumed")

if(units <= 100){
    console.log("Bill is ₹", units * 5)
}
else if(units <= 200){
    console.log("Bill is ₹", units * 7)
}
else{
    console.log("Bill is ₹", units * 10)
}

// Task 4: Simple ATM

let balance = 10000
let withdrawal = prompt("Enter the amount to withdraw")
if(withdrawal <= balance){
    console.log("Withdrawal Successful")
    console.log("Remaining Balance is ₹", balance - withdrawal)
}
else{
    console.log("Insufficient Funds")
}

// Task 5: Login Validation

const data = {
    username: "admin",
    password: "12345"
}

let name = prompt("Enter your username")
let password = prompt("Enter your password")

if(name == data.username && password == data.password){
    console.log("Login Successful")
}
else{
    console.log("Login Failed")
}

// Task 6: Mobile Recharge Offer

let amount = prompt("Enter the amount to recharge")

if(amount >= 499){
    console.log("Netflix Offer")
}
else if(amount >= 299){
    console.log("2GB Extra Data")
}
else{
    console.log("No Offer")
}

// Task 7: Traffic Signal System

let color = prompt("Enter the color of traffic signal")
switch(color){
    case "red":
        console.log("Stop")
        break
    case "yellow":
        console.log("Ready")
        break
    case "green":
        console.log("Go")
        break
    default:
        console.log("Invalid Color")
}

// Task 8: Employee Attendance

let workingDays = prompt("Enter the number of working days")
let presentDays = prompt("Enter the number of present days")

if (presentDays / workingDays >= 0.75) {
    console.log("Eligible for salary")
} else {
    console.log("Not Eligible")
}

// Task 9: Bus Ticket Booking

let tickets = prompt("Enter the number of tickets")
let totalAmount = tickets * 500
let gst = totalAmount * 0.05
let finalAmount = totalAmount + gst
console.log("Total Amount is ₹", totalAmount)

// Task 10: Restaurant Bill

let foodCost = prompt("Enter the food cost")
let discount = 0
if (foodCost > 2000) {
    discount = foodCost * 0.1
}
let finalBill = foodCost - discount
console.log("Final Bill is ₹", finalBill)

// Task 11: Police Recruitment

let age = prompt("Enter your age")
let height = prompt("Enter your height")
let weight = prompt("Enter your weight")

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("You are eligible for police recruitment")
        } else {
            console.log("You are not eligible for police recruitment due to low weight")
        }
    } else {
        console.log("You are not eligible for police recruitment due to low height")
    }
} else {
    console.log("You are not eligible for police recruitment due to low age")
}

// Task 12: Student Result

let subject1 = prompt("Enter the marks of subject 1")
let subject2 = prompt("Enter the marks of subject 2")
let subject3 = prompt("Enter the marks of subject 3")
let subject4 = prompt("Enter the marks of subject 4")
let subject5 = prompt("Enter the marks of subject 5")

let total = subject1 + subject2 + subject3 + subject4 + subject5
let percentage = (total / 500) * 100

if (percentage >= 90) {
    console.log("A+")
}
else if (percentage >= 80) {
    console.log("A")
}
else if (percentage >= 70) {
    console.log("B")
}
else if (percentage >= 60) {
    console.log("C")
}
else {
    console.log("Fail")
}

// Task 13: Employee Shift Finder

let time = prompt("Enter the time")
if (time >= 6 && time < 14) {
    console.log("Morning Shift")
}
else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift")
}
else {
    console.log("Night Shift")
}

// Task 14: Loan Eligibility

let age = prompt("Enter your age")
let salary = prompt("Enter your salary")
let experience = prompt("Enter your experience")

if (age >= 21 && salary >= 25000 && experience >= 2) {
    console.log("Eligible")
}
else {
    console.log("Not Eligible")
}

// Task 15: Cab Fare Calculator

let distance = prompt("Enter the distance")
let totalFare = 0
if (distance <= 5) {
    totalFare = distance * 20
}
else {
    totalFare = 5 * 20 + (distance - 5) * 15
}
console.log("Total Fare is ₹", totalFare)

// Task 16: Multiplication Table Generator

let num = prompt("Enter a number")
for (let i = 1; i <= 10; i++) {
    console.log(num, "x", i, "=", num * i)
}

// Task 17: Password Checker

let password = prompt("Enter your password")
if (password.length < 6) {
    console.log("Weak")
}
else if (password.length >= 6 && password.length <= 10) {
    console.log("Medium")
}
else {
    console.log("Strong")
}

// Task 18: Company Bonus System

let experience = prompt("Enter your experience")
let salary = prompt("Enter your salary")
let bonus = 0
if (experience <= 2) {
    bonus = salary * 0.05
}
else if (experience <= 5) {
    bonus = salary * 0.1
}
else {
    bonus = salary * 0.2
}
console.log("Bonus is ₹", bonus)

// Task 19: Countdown Timer

let count = 10
while (count >= 1) {
    console.log(count)
    count--
}
console.log("Happy New Year")

// Task 20: Interview Selection System

let degree = prompt("Enter your degree")
let communication = prompt("Enter your communication")
let technicalScore = prompt("Enter your technical score")

if (degree == "Yes") {
    if(communication == "Good"){
        if(technicalScore >= 70){
            console.log("Selected for Interview")
        }
        else{
            console.log("Technical Score too low")
        }
    }
    else{
        console.log("Communication not good")
    }
}
else{
    console.log("Degree not completed")
}