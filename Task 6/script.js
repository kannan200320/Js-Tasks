// Task 1: Employee Bonus Calculator

let employees = [
    {
        name: "Kannan",
        salary: 50000,
        experience: 1
    },
    {
        name: "Kris",
        salary: 60000,
        experience: 2
    },
    {
        name: "Gokul",
        salary: 50000,
        experience: 6
    }
];

for (let employee of employees) {

    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = employee.salary * 20 / 100;
    } 
    else if (employee.experience >= 2) {
        bonus = employee.salary * 10 / 100;
    } 
    else {
        bonus = employee.salary * 5 / 100;
    }

    let finalSalary = employee.salary + bonus;
    console.log("Final Salary:", finalSalary);
    
}

// Task 2: College Admission System

let students=[
    {
        name:"kannan",
        age:"21",
        percentage:82
    },

     {
        name:"siva",
        age:"22",
        percentage:72
    },

     {
        name:"basha",
        age:"23",
        percentage:62
    }
]

for(student of students){
    if(student.age>=17 ){
        if(student.percentage>=60){
        console.log("Admission Approved.")
    }
}
    else{
        console.log("Admission Rejected.")
    }
}

// Task 3: Food Delivery Menu
function foodMenu(choice) {
    switch (choice) {
        case 1:
            console.log("Order Confirmed : Pizza");
            break;
        case 2:
            console.log("Order Confirmed : Burger");
            break;
        case 3:
            console.log("Order Confirmed : Shawarma");
            break;
        case 4:
            console.log("Order Confirmed : Fried Rice");
            break;

        default:
            console.log("Invalid Menu Selection");
    }
}
foodMenu(1);


// Task 4: Attendance Tracker
let students = [
    "Kannan",
    "Swathi",
    "Vicky",
    "Jaanu",
    "Rahul",
    "Priya",
    "Arun",
    "Meena",
    "Siva",
    "Keerthi"
];
console.log("Student List:");
for (let student of students) {
    console.log(student);
}
console.log("Total Students:", students.length);

// Task 5: E-Commerce Cart

let cart = [
  { product: "Mobile", price: 15000 },
  { product: "Headset", price: 2000 },
  { product: "Charger", price: 1000 }
];
console.log("Products in Cart:");
for (let item of cart) {
  console.log(item.product);
}
let total = 0;
for (let item of cart) {
  total += item.price;
}
console.log("Total Cart Value:" +total);
let expensiveProduct = cart[0];

for (let item of cart) {
  if (item.price > expensiveProduct.price) {
    expensiveProduct = item;
  }
}
console.log("Most Expensive Product:", expensiveProduct.product);
console.log("Price:", expensiveProduct.price);

// Task 6: Bank Account Management
let balance = 10000;
function deposit(amount) {
    balance = balance + amount;
    console.log("Deposited:" + amount);
    console.log("Current Balance:" + balance);
}

function withdraw(amount) {
    if (amount <= balance) {
        balance = balance - amount;
        console.log("Withdraw:" + amount);
        console.log("remaining balance:" + balance);
    } else {
        console.log("Insufficient balance");
    }
}
function checkBalance() {
    console.log("remaining Balance:" + balance);
}

checkBalance();      
deposit(5000);      
withdraw(3000);      
checkBalance();    


// Task 7: Movie Ticket Booking
let age = 25;
let ticketPrice;

if (age < 5) {
    ticketPrice = 0;
    console.log("Free Ticket");
}
else if (age >= 5 && age < 18) {
    ticketPrice = 100;
    console.log("Ticket Price:" + ticketPrice);
}
else if (age >= 18 && age <= 60) {
    ticketPrice = 200;
    console.log("Ticket Price:" + ticketPrice);
}
else {
    ticketPrice = 120;
    console.log("Ticket Price:" + ticketPrice);
}

// Task 8: Online Shopping Discount

let purchaseAmount = 4500;
let discount = 0;
let finalAmount = 0;

if (purchaseAmount > 5000) {
    discount = purchaseAmount * 0.20;
} else if (purchaseAmount > 3000) {
    discount = purchaseAmount * 0.10;
} else if (purchaseAmount > 1000) {
    discount = purchaseAmount * 0.05;
} else {
    discount = 0;
}
finalAmount = purchaseAmount - discount;

console.log("Original Amount:"+ purchaseAmount);
console.log("Discount:"+ discount);
console.log("Final Amount:" + finalAmount);


// Task 9: Food Inventory System

let product= ["Rice","Oil","Sugar","Milk","Egg"]

console.log(product.push("salt","butter"))
console.log(product.shift())
console.log(product.pop())
console.log(product.includes("Milk"))
console.log(product)

// Task 10: Hospital Patient Management
let Patientdetails=[
    {
        patientName:"kris",
        age:23,
        disease:"None",
        doctor:"ravi",
    }
]

for(detail in Patientdetails){
    console.log(detail)
}
let{patientName,age,disease,doctor}= Patientdetails
console.log("Patient Name:",detail.patientName + "Patient Age:",detail.age + "Disease:",detail.disease + "Doctor:", detail.doctor)


// Task 11: Amazon Order Tracker
function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}

placeOrder(sendSMS);


// Task 12: Cashback Offer Generator
function cashbackOffers() {
  yield "10% Cashback";
  yield "20% Cashback";
  yield "Free Delivery";
  yield "Buy 1 Get 1";
}

let offer = cashbackOffers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);


// Task 13: Employee Database
let employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 30000 },
  { id: 3, name: "John", salary: 40000 }
];

console.log("Employee Names:");
for (let emp of employees) {
  console.log(emp.name);
}
let totalSalary = 0;

for (let emp of employees) {
  totalSalary += emp.salary;
}

console.log("Total Salary Expense:" + totalSalary);

let highest = employees[0];
for (let emp of employees) {
  if (emp.salary > highest.salary) {
    highest = emp;
  }
}
console.log("Highest Salary Employee:");
console.log(highest.name + " -" + highest.salary);

// Task 14: Railway Reservation system
let totalSeats = 50;

function bookSeats(seats) {
  if (seats <= totalSeats) {
    totalSeats = totalSeats - seats;
    console.log(seats + " seats booked successfully");
    console.log("Available Seats: " + totalSeats);
  } else {
    console.log("Booking Rejected! Not enough seats available");
  }
}

bookSeats(15);
bookSeats(20);
bookSeats(18);

// Task 15: Mobile Store Billing System
let products = {
  Mobile: 15000,
  Laptop: 50000,
  Headphone: 2000,
  Smartwatch: 5000
};

let selectedProducts = ["Mobile", "Headphone", "Smartwatch"];
let total = 0;
console.log("Selected Products:");

for (let item of selectedProducts) {
  console.log(item + " - " + products[item]);
  total += products[item];
}

let gst = total * 18 / 100;
let finalBill = total + gst;

console.log("Total Amount: " + total);
console.log("GST (18%): " + gst);
console.log("Final Bill: " + finalBill);
