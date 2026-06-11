// Task 1: Student Management System
let students = [
    { id: 1, name: "Kannan", department: "IT", mark: 95 },
    { id: 2, name: "swathi", department: "CSE", mark: 82 },
    { id: 3, name: "jaanu", department: "ECE", mark: 76 },
    { id: 4, name: "vicky", department: "EEE", mark: 48 },
    { id: 5, name: "rahul", department: "MECH", mark: 67 }
];

function  Studentnames(){
for(let student of students){
    console.log("Students Names:",student.name)
}
}

function Totalmarks(){
let Totalmarks=0;
for(let student of students){
    Totalmarks+=student.mark
}
    console.log("Total marks:",Totalmarks)
}


function scoredabove80(){
    for(let student of students){
        if(student.mark>80){
            console.log("students who scored above 80:",student.name)
        }
}
}
function displaygrade(){
    for(let student of students){
     if(student.mark>=90){
        console.log("A grade")
    }
    else if(student.mark>=75){
        console.log("B grade")
    }
     else if(student.mark>=50){
        console.log("C grade")
    }
    else{
    console.log("Fail");
}
    }
}
function studentdetails(){
    for(let student of students){
        console.log("ID:", student.id, "Name:", student.name, "Dept:", student.department, "Mark:", student.mark);
}
}
Studentnames();
Totalmarks();
scoredabove80();
displaygrade();
studentdetails()



// Task 2: Employee Payroll System

const employees = [
  { id: 101, name: 'Rishi', salary: 45000, department: 'IT' },
  { id: 102, name: 'Priya', salary: 28000, department: 'HR' },
  { id: 103, name: 'Sarath', salary: 55000, department: 'Finance' },
  { id: 104, name: 'Sneha', salary: 32000, department: 'Marketing' }
]

console.log('--- 1.Employee Names ---')
for (let i = 0; i < employees.length; i++) {
  console.log(employees[i].name)
}

let totalSalary = 0
for (let i = 0; i < employees.length; i++) {
  totalSalary += employees[i].salary
}
console.log('\n--- 2.Total Company Salary Expense ---')
console.log('\nTotal Company Salary Expense: ₹' + totalSalary)

console.log('\n--- 3.Employees earning above ₹30,000 ---')
for (let i = 0; i < employees.length; i++) {
  if (employees[i].salary > 30000) {
    console.log(employees[i].name + ' (₹' + employees[i].salary + ')')
  }
}

console.log('\n--- 4.Department Descriptions ---')
for (let i = 0; i < employees.length; i++) {
  let deptInfo = ''
  switch (employees[i].department) {
    case 'IT':
      deptInfo = 'Handles software, networks, and technical support.'
      break
    case 'HR':
      deptInfo = 'Manages recruitment, payroll, and employee welfare.'
      break
    case 'Finance':
      deptInfo = 'Manages company budgets, accounts, and investments.'
      break
    case 'Marketing':
      deptInfo = 'Handles advertising, branding, and social media.'
      break
    default:
      deptInfo = 'General company department.'
  }
  console.log(
    employees[i].name +
      ' belongs to ' +
      employees[i].department +
      ': ' +
      deptInfo
  )
}

function generatePayrollReport (employeeList, callback) {
  console.log('\n--- 4.Starting Payroll Report Generation ---')
  for (let i = 0; i < employeeList.length; i++) {
    callback(employeeList[i])
  }
}

function printPayslip (employee) {
  console.log(
    'PAYSLIP GENERATED: ID ' +
      employee.id +
      ' | Name: ' +
      employee.name +
      ' | Processed Salary: ₹' +
      employee.salary
  )
}

generatePayrollReport(employees, printPayslip)

// Task 3: Online Food Order System

const foodMenu = [
  {
    id: 1,
    foodName: 'Paneer Butter Masala',
    price: 250,
    category: 'North Indian'
  },
  {
    id: 2,
    foodName: 'Masala Dosa',
    price: 120,
    category: 'South Indian'
  },
  { id: 3, foodName: 'Veg Hakka Noodles', price: 180, category: 'Chinese' },
  { id: 4, foodName: 'Chocolate Sizzler', price: 220, category: 'Dessert' }
]

console.log('--- 1.Food Menu Items ---')
for (let food of foodMenu) {
  console.log(food.foodName)
}

let totalMenuValue = 0
for (let food of foodMenu) {
  totalMenuValue += food.price
}
console.log('\nTotal Menu Value: ₹' + totalMenuValue)

console.log('\n--- 3.Premium Food Items (Above ₹200) ---')
for (let food of foodMenu) {
  if (food.price > 200) {
    console.log(food.foodName + ' - ₹' + food.price)
  }
}

console.log('\n--- 4.Category Descriptions ---')
for (let food of foodMenu) {
  let description = ''
  switch (food.category) {
    case 'North Indian':
      description = 'Rich, creamy curries served with flatbreads.'
      break
    case 'South Indian':
      description = 'Light, fermented rice-based dishes served with sambar.'
      break
    case 'Chinese':
      description = 'Wok-tossed noodles and stir-fried starters.'
      break
    case 'Dessert':
      description = 'Sweet treats to end your meal perfectly.'
      break
    default:
      description = 'Delicious food options.'
  }
  console.log(food.category + ': ' + description)
}

function placeOrder (foodItem, quantity, callback) {
  let totalCost = foodItem.price * quantity
  callback(foodItem.foodName, totalCost)
}

function orderConfirmation (name, cost) {
  console.log('\n--- 5.Order Confirmed! ---')
  console.log(
    'Thank you for ordering ' + name + '. Your total bill is ₹' + cost + '.'
  )
}

placeOrder(foodMenu[0], 2, orderConfirmation)

// Task 4: Movie Ticket Booking System

const movies = [
  {
    movieName: 'Baahubali',
    ticketPrice: 200,
    availableSeats: 50,
    language: 'Tamil'
  },
  {
    movieName: 'Jawan',
    ticketPrice: 250,
    availableSeats: 0,
    language: 'Hindi'
  },
  {
    movieName: 'Kantara',
    ticketPrice: 180,
    availableSeats: 15,
    language: 'Kannada'
  },
  {
    movieName: 'Manjummel Boys',
    ticketPrice: 150,
    availableSeats: 8,
    language: 'Malayalam'
  }
]

console.log('--- 1.Currently Showing ---')
for (let movie of movies) {
  console.log(movie.movieName)
}

console.log('--- 2.Calculate total available seats. ---')
let totalSeats = 0
for (let movie of movies) {
  totalSeats += movie.availableSeats
}
console.log('\nTotal Available Seats Across All Movies: ' + totalSeats)

console.log('\n--- 3.Booking Availability Status ---')
for (let movie of movies) {
  if (movie.availableSeats > 0) {
    console.log(
      movie.movieName +
        ': Tickets Available (' +
        movie.availableSeats +
        ' left)'
    )
  } else {
    console.log(movie.movieName + ': HOUSEFULL')
  }
}

console.log('\n--- 4.Language Guide ---')
for (let movie of movies) {
  let region = ''
  switch (movie.language) {
    case 'Hindi':
      region = 'Bollywood Cinema'
      break
    case 'Telugu':
      region = 'Tollywood Cinema'
      break
    case 'Kannada':
      region = 'Sandalwood Cinema'
      break
    case 'Malayalam':
      region = 'Mollywood Cinema'
      break
    default:
      region = 'Indian Regional Cinema'
  }
  console.log(
    movie.movieName + ' is a ' + movie.language + ' movie (' + region + ')'
  )
}

function bookTicket (movie, requestedSeats, callback) {
  if (movie.availableSeats >= requestedSeats) {
    movie.availableSeats -= requestedSeats 
    let amountPaid = movie.ticketPrice * requestedSeats
    callback(true, movie.movieName, requestedSeats, amountPaid)
  } else {
    callback(false, movie.movieName, requestedSeats, 0)
  }
}

function showBookingResult (isSuccess, movieName, seats, cost) {
  console.log('\n--- 5.Ticket Processing System ---')
  if (isSuccess) {
    console.log(
      'SUCCESS! Booked ' +
        seats +
        " seats for '" +
        movieName +
        "'. Paid: ₹" +
        cost
    )
  } else {
    console.log(
      "FAILED! Sorry, not enough seats available for '" + movieName + "'."
    )
  }
}

bookTicket(movies[2], 3, showBookingResult)

bookTicket(movies[1], 2, showBookingResult)



// Task 5: Hospital Patient Records

const patientData = [
  {
    "patientId": "1",
    "patientName": "Arun Kumar",
    "age": 45,
    "disease": "Hypertension"
  },
  {
    "patientId": "2",
    "patientName": "Meena Selvam",
    "age": 32,
    "disease": "Type 2 Diabetes"
  },
  {
    "patientId": "3",
    "patientName": "Karthik Subramaniam",
    "age": 58,
    "disease": "Asthma"
  },
  {
    "patientId": "4",
    "patientName": "Anitha Rajendran",
    "age": 29,
    "disease": "Anemia"
  },
  {
    "patientId": "5",
    "patientName": "Vijay Baskaran",
    "age": 63,
    "disease": "Type 2 Diabetes"
  }
]

function allPatientsName(){
  for(let i = 0 ; i < patientData.length ; i++){
    console.log("Patient Name : " , patientData[i].patientName);
    
  }
}
console.log(`------------1.Name of Patients------------`)
allPatientsName()

console.log(`------------2.No of Patients------------`)
console.log("Total No.of Patient is : ",patientData.length )



function patientAbove60(){
  for(let i = 0 ; i < patientData.length ; i++){
    if(patientData[i].age>60){
      console.log(patientData[i].patientName)
    }
    
  }
}
console.log(`------------3.Patients above age 60------------`)
patientAbove60()


function assignDepartment(){
  for(let i = 0 ; i < patientData.length ; i++){
    switch(patientData[i].disease){
      case "Hypertension":
        console.log(patientData[i].patientName , " need to go Cardiology Deportment")
        break;
      case "Type 2 Diabetes":
        console.log(patientData[i].patientName , " need to go Endocrinology Deportment")
        break;
        case "Asthma":
        console.log(patientData[i].patientName , " need to go Pulmonology Deportment")
        break;
        case "Anemia":
        console.log(patientData[i].patientName , " need to go Hematology Deportment")
        break;
    }
      
  }
}

console.log(`------------4.Assign Department for Patients------------`)
assignDepartment()

console.log(`------------5.Confirm appointment------------`)
function confirmAppointment(name, department) {
  return "Appointment Confirmed: " + name + " is scheduled for the " + department + " department.";
}


function processPatientAppointment(patient, callback) {
  let department = "";


  switch (patient.disease) {
    case "Hypertension":
      department = "Cardiology";
      break;
    case "Type 2 Diabetes":
      department = "Endocrinology";
      break;
    case "Asthma":
      department = "Pulmonology";
      break;
    case "Anemia":
      department = "Hematology";
      break;
    default:
      department = "General Medicine";
  }


  let message = callback(patient.patientName, department);
  console.log(message);
}


for (let i = 0; i < patientData.length; i++) {
  processPatientAppointment(patientData[i], confirmAppointment);
}





// Task 6: Library Management System

let books = [
    { bookId: 1, bookName: "Js", author: "kans", price: 800 },
    { bookId: 2, bookName: "golang", author: "levis", price: 100 },
    { bookId: 3, bookName: "node", author: "chin", price: 600 }
];
function displayBooks() {
    for (let book of books) {
        console.log(book.bookName);
    }
}
function totalBookValue() {
    let total = 0;
    for (let book of books) {
        total += book.price;
    }
    console.log("Total Book Value:", total);
}
function booksAbove500() {
    for (let book of books) {
        if (book.price > 500) {
            console.log(book.bookName);
        }
    }
}
function bookCategory(category) {
    switch (category) {
        case "frontend programming":
            console.log("Its a js programming book");
            break;
        case "server programming":
            console.log("Its a golang programming book");
            break;
        case "backend programming":
            console.log("Its a node programming book");
            break;
        default:
            console.log("Other category");
    }
}
function issueBook(bookName) {
    console.log(bookName + " issued successfully");
}

displayBooks();
totalBookValue();
booksAbove500();
bookCategory("server programming");
issueBook("Js");

// Task 7: E-Commerce Product Dashboard

let products = [
    {
        productId: 1,
        productName: "Laptop",
        price: 50000,
        stock: 5
    },
    {
        productId: 2,
        productName: "Mouse",
        price: 800,
        stock: 20
    },
    {
        productId: 3,
        productName: "Keyboard",
        price: 1500,
        stock: 8
    }
];

function displayProducts() {
    for (let product of products) {
        console.log(product.productName);
    }
}

function inventoryValue() {
    let total = 0;
    for (let product of products) {
        total += product.price * product.stock;
    }
    console.log("Inventory Value:", total);
}

function lowStock() {
    for (let product of products) {
        if (product.stock < 10) {
            console.log(product.productName);
        }
    }
}

function stockStatus() {
    for (let product of products) {
        if (product.stock < 10) {
            console.log(product.productName + " : Low Stock");
        } else {
            console.log(product.productName + " : In Stock");
        }
    }
}

function productReport() {
    console.log("Product Report Generated");
}

function generateReport(callback) {
    console.log("Generating Product Report...");
    callback();
}

displayProducts();
inventoryValue();
lowStock();
stockStatus();
generateReport(productReport);

// Task 8: College Admission System

let applicants = [
    {
        name: "kannan",
        age: 23,
        percentage: 80,
        department: "IT"
    },
    {
        name: "gokul",
        age: 23,
        percentage: 61,
        department: "CSE"
    },
    {
        name: "kris",
        age: 24,
        percentage: 72,
        department: "CSE"
    }
];

function displayApplicants() {
    for (let applicant of applicants) {
        console.log(applicant.name);
    }
}

function checkEligibility() {
    let count = 0;
    for (let applicant of applicants) {
        if (applicant.age >= 18 && applicant.percentage >= 60) {
            console.log(applicant.name + " is Eligible");
            count++;
        } else {
            console.log(applicant.name + " is Not Eligible");
        }
    }
    console.log("Total Eligible Students:", count);
}

function departmentName(department) {
    switch (department) {
        case "IT":
            console.log("IT Department");
            break;
        case "CSE":
            console.log("CSE Department");
            break;
        default:
            console.log("Other Department");
    }
}

function admissionResult() {
    console.log("Admission Result Generated");
}

function generateAdmission(callback) {
    console.log("Generating Admission...");
    callback();
}

displayApplicants();
checkEligibility();
departmentName("CSE");
generateAdmission(admissionResult);

// Task 9: Bus Reservation System

let passengers = [
    {
        passengerId: 1,
        name: "kannan",
        seatNumber: 2,
        ticketPrice: 110
    },
    {
        passengerId: 2,
        name: "rishi",
        seatNumber: 4,
        ticketPrice: 110
    },
    {
        passengerId: 3,
        name: "kris",
        seatNumber: 7,
        ticketPrice: 110
    }
];

function passengerNames() {
    for (let passenger of passengers) {
        console.log(passenger.name);
    }
}

function totalCollection() {
    let total = 0;
    for (let passenger of passengers) {
        total += passenger.ticketPrice;
    }
    console.log("Total Collection:", total);
}

function occupiedSeats() {
    for (let passenger of passengers) {
        console.log("Seat:", passenger.seatNumber);
    }
}

function busType(type) {
    switch (type) {
        case "AC":
            console.log("AC Bus");
            break;
        case "Non-AC":
            console.log("Non-AC Bus");
            break;
        case "Sleeper":
            console.log("Sleeper Bus");
            break;
        default:
            console.log("Unknown Bus");
    }
}

function ticketConfirmation() {
    console.log("Ticket Confirmed");
}

function generateTicket(callback) {
    console.log("Generating Ticket...");
    callback();
}

passengerNames();
totalCollection();
occupiedSeats();
busType("AC");
generateTicket(ticketConfirmation);

// Task 10: Mobile Store Management

let mobiles = [
    {
        brand: "Samsung",
        model: "Galaxy A54",
        price: 25000,
        stock: 10
    },
    {
        brand: "Apple",
        model: "iPhone 15",
        price: 75000,
        stock: 5
    },
    {
        brand: "Redmi",
        model: "Note 13",
        price: 18000,
        stock: 8
    }
];

function displayMobiles() {
    for (let mobile of mobiles) {
        console.log(mobile.model);
    }
}

function totalStockValue() {
    let total = 0;
    for (let mobile of mobiles) {
        total += mobile.price * mobile.stock;
    }
    console.log("Total Stock Value:", total);
}

function mobilesAbove20000() {
    for (let mobile of mobiles) {
        if (mobile.price > 20000) {
            console.log(mobile.model + " - " + mobile.price);
        }
    }
}

function brandCategory(brand) {
    switch (brand) {
        case "Samsung":
            console.log("Samsung - Android Brand");
            break;
        case "Apple":
            console.log("Apple - iOS Brand");
            break;
        case "Redmi":
            console.log("Redmi - Budget Brand");
            break;
        default:
            console.log("Other Brand");
    }
}

function salesReport() {
    console.log("Sales Report Generated Successfully");
}

function generateSalesReport(callback) {
    console.log("Generating Sales Report...");
    callback();
}

displayMobiles();
totalStockValue();
mobilesAbove20000();
brandCategory("Apple");
generateSalesReport(salesReport);
