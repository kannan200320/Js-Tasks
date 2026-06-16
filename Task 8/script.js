// Task 1: Employee Salary Management

let employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 50000 },
  { id: 3, name: "John", salary: 75000 }
];

let highSalary = employees.filter(emp => emp.salary > 40000);
console.log(highSalary);
let first = employees.find(emp => emp.salary > 60000);
console.log(first);
let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(total);
let names = employees.map(emp => emp.name);
console.log(names);

// Task 2: College Admission Form

function checkAdmission(name, age, percentage) {
  if (age >= 18 && percentage >= 60) {
    console.log(name + " Admission Approved");
  } else {
    console.log(name + " Admission Rejected");
  }
}
checkAdmission("Rahul", 19, 75);

//Task 3: E-Commerce Cart
let cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];
let totalBill = 0;
for (let item of cart) {
  totalBill += item.price * item.qty;
}
console.log(totalBill);
let expensive = cart[0];
for (let item of cart) {
  if (item.price > expensive.price) {
    expensive = item;
  }
}
console.log(expensive);

for (let item of cart) {
  console.log(item.product);
}

// Task 4: Traffic Fine System

let signal = "red";
switch (signal) {
  case "red":
    console.log("Stop Fine Rs.500");
    break;

  case "yellow":
    console.log("Wait Fine Rs.200");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}

//Task 5: Student Result Processing
let students = [
  { name: "A", mark: 95 },
  { name: "B", mark: 45 },
  { name: "C", mark: 80 },
  { name: "D", mark: 30 }
];

let passed = students.filter(student => student.mark>=50);
console.log(passed);

let failed = students.filter(student => student.mark<50);
console.log(failed);

let grades = students.map(student => {
if (student.mark >= 90) {
    return "A";
} else if (student.mark >= 75) {
    return "B";
} else if (student.mark >= 50) {
    return "C";
} else {
    return "Fail";
  }
});
console.log(grades);

// Task 6: Online Food Delivery
function placeOrder(customerName,...items){
    console.log(customerName);
    console.log(items);
    console.log(items.length)
}
placeOrder("Kannan","Burger","pizza","Juice")


//Task 7: Bank Account System

let balance = 10000;
function deposit(amount) {
  balance = balance + amount;
  console.log(balance);
}
function withdraw(amount) {
  balance = balance - amount;
  console.log(balance);
}
function checkBalance() {
  console.log(balance);
}
deposit(5000);
withdraw(2000);
checkBalance();

// Task 8: Movie Ticket Booking

let seats = [];
function bookSeat(seat) {
  if (seats.includes(seat)) {
    console.log("Already Booked");
  } else {
    seats.push(seat);
    console.log("Booked");
  }
}
bookSeat("A1");
bookSeat("A2");
bookSeat("A1");
console.log(seats);

//Task 9: User Login Validation
let username = "Kannan";
let password = "password123";
let email = "kannan@gmail.com";
if (
  !username.includes(" ") &&
  password.length >= 8 &&
  email.includes("@")
) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

// Task 10 - Product API
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => console.log(item.title));

    let costly = data.filter(item => item.price > 1000);
    console.log(costly);

    console.log(data.length);
  });

// Task 11: Birthday Day Finder
let day = prompt("Enter Day");
let month = prompt("Enter Month");
let year = prompt("Enter Year");

let birth = new Date(year, month - 1, day);

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
console.log("Day:", birth.getDate());
console.log("Month:", birth.getMonth() + 1);
console.log("Year:", birth.getFullYear());
console.log("Weekday:", weekdays[birth.getDay()]);

// Task 12: Netflix Subscription System
let plan = "Standard";

let result =
  plan == "Mobile"
    ? "1 Screen"
    : plan == "Basic"
    ? "HD"
    : plan == "Standard"
    ? "2 Screens"
    : plan == "Premium"
    ? "4 Screens"
    : "Invalid";

console.log(result);

//Task 13: Hospital Patient Management

let patients = [
  { id: 1, name: "Ram", critical: true },
  { id: 2, name: "Sam", critical: false },
  { id: 3, name: "John", critical: true }
];
let Criticalptients= patients.filter(Patienttype => Patienttype.critical)
console.log(Criticalptients)

let patient=patients.find(patient=> patient.id==2)
console.log(patient)

console.log(patients.length);


//Task 14: Inventory Management System
let product = {
  name: "Rice",
  price: 100,
  quantity: 5
};

let { name, price, quantity } = product;
console.log(name);
console.log(price);
console.log(quantity);

// Task 15: WhatsApp Group Management
let group = ["Rahul", "John"];
group.push("Kavin");
group.pop();
group.shift();
group.unshift("David");
group.splice(1, 0, "Sam");
console.log(group);


