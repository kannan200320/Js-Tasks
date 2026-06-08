// Task 1: Employee Salary Calculator
let basicSalary = 25000;
let hra = (20 / 100) * basicSalary;
let bonus = (10 / 100) * basicSalary;
let totalSalaryBeforeTax = basicSalary + hra + bonus;
let tax = (5 / 100) * totalSalaryBeforeTax;
let finalSalary = totalSalaryBeforeTax - tax;
console.log("Basic Salary : " + basicSalary);
console.log("HRA : " + hra);
console.log("Bonus : " + bonus);
console.log("Tax : " + tax);
console.log("Final Salary : " + finalSalary);

// Task 2: Student Grade System
let marks = 85;

if (marks >= 90 && marks <= 100) {
    console.log("A+");
} else if (marks >= 80 && marks < 89) {
    console.log("A");
} else if (marks >= 70 && marks < 79) {
    console.log("B");
} else if (marks >= 60 && marks < 69) {
    console.log("C");
} else {
    console.log("Fail");
}

// Task 3: Login Authentication System
let username = "admin";
let password = "12345";

let enteredUser = "admin";
let enteredPass = "12345";
if (enteredUser === username) {
    if (enteredPass === password) {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Username");
}

// Task 4: ATM Withdrawal Machine
let balance = 5000;
let withdrawalAmount = 2000;

if (withdrawalAmount > balance) {
    console.log("Insufficient Balance");
} else {
    balance = balance - withdrawalAmount;
    console.log("Withdrawal Success");
    console.log("Remaining Balance: " + balance);
}

// Task 5: E-Commerce Discount System
let purchaseAmount = 7500;
let discountPercentage = 0;

if (purchaseAmount >= 10000) {
    discountPercentage = 20;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 10;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}
let discountAmount = (discountPercentage / 100) * purchaseAmount;
let finalAmount = purchaseAmount - discountAmount;
console.log("Original Amount: " + purchaseAmount);
console.log("Discount: " + discountAmount);
console.log("Final Amount: " + finalAmount);

// Task 6: Traffic Fine Checker
let hasHelmet = false;
let hasLicense = false;

if (hasHelmet === false && hasLicense === false) {
    console.log("₹3000 Fine");
} else if (hasHelmet === false) {
    console.log("₹1000 Fine");
} else if (hasLicense === false) {
    console.log("₹2000 Fine");
} else {
    console.log("No Fine");
}
// Task 7: Employee Attendance Tracker
let attendance = ["P", "P", "A", "P", "A", "P", "P"];
let presentDays = 0;
let absentDays = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        presentDays++;
    } else if (attendance[i] === "A") {
        absentDays++;
    }
}
console.log("Present Days : " + presentDays);
console.log("Absent Days : " + absentDays);

// Task 8: Product Inventory Management
let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};
for (let key in product) {
    console.log(key + " : " + product[key]);
}

// Task 9: Cab Fare Calculator
let distance = 12;
let totalFare = 0;

if (distance <= 5) {
    totalFare = distance * 20;
} else if (distance <= 10) {
    totalFare = (5 * 20) + ((distance - 5) * 15);
} else {
    totalFare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}
console.log("Total Fare : ₹" + totalFare);

// Task 10: Mini Employee Management System
let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];
let totalEmployees = employees.length;
let totalExpenditure = 0;
let highestSalaryEmp = employees[0];
let lowestSalaryEmp = employees[0];

console.log("All Employees:");
for (let i = 0; i < employees.length; i++) {
    let emp = employees[i];
    console.log("ID: " + emp.id + ", Name: " + emp.name + ", Salary: " + emp.salary);
    totalExpenditure = totalExpenditure + emp.salary;
    
    if (emp.salary > highestSalaryEmp.salary) {
        highestSalaryEmp = emp;
    }
    if (emp.salary < lowestSalaryEmp.salary) {
        lowestSalaryEmp = emp;
    }
}
console.log("Highest Salary Employee: " + highestSalaryEmp.name + " (" + highestSalaryEmp.salary + ")");
console.log("Lowest Salary Employee: " + lowestSalaryEmp.name + " (" + lowestSalaryEmp.salary + ")");
console.log("Total Employees: " + totalEmployees);
console.log("Total Salary Expenditure: " + totalExpenditure);