// Chapter 1 alerts

// question no 1 % 2

alert("Error! plzz enter a valid password")
console.log("Error! plzz enter a valid password");



// question no 3

alert("Welcome to JS land...\nHappy coding!")
console.log("Welcome to JS land...<br>Happy coding!");


// question no 4

alert("Welcome to JS land...")
console.log("Welcome to JS land...");

alert("Happy coding!")
console.log("Happy coding!");


// question no 5

alert("Hello I run JS through my web browser's console")
console.log("Hello I run JS through my web browser's console");


// chapter no 2 variable

// question no 1

var userName = ("jOHN DOE")
console.log("jOHN DOE");

// question no 2
var name = ("Tasbeeha");
console.log(name);

// question no 3 ( a, b, c)

var message; 
message = "Hello World"
alert("Hello World")
console.log(message);

// question no 4

var studentName = ( "John Doe");
var studentAge = ("15 years old");
var studentCourse = ("certified mobile appplication development");

alert(studentName);
console.log ( "John Doe")
alert(studentAge);
console.log ("15 years old")
alert(studentCourse);
console.log ("certified mobile appplication development")

// question no 5

var food = ("Pizza \n Pizz \n Piz \n Pi \n p")
console.log(food);

// question no 6

var email = ("tasbeehakhan05@gmail.com")
console.log("My email email Address : " + email);

// question no 7

var book = ("A smarter way to learn Java Script")
alert(book)
console.log(book);


// question no 8

document.write("Yah! I can write html content throung Javascript!");

// question no 9

var stores = "▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬"
alert(stores)
document.write("<br>▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬");


// chapter no 3 variable for Strings

// question no 1

var age = ("I'm 19 year old")
alert(age)
console.log(age)

// question no 2

var visits = 14
alert("You have visited this site" + visits + "times");

// question no 3

var birth = 2005
document.write("<br><br>My birth year is" + birth)
document.write("<br> Data type of my declared variable is number")

// question no 4


document.write("<br><br><b>John David</b> ordered <b>5 T-Shirts</b>  product  On XYZ clothing store");


// chapter no 3 LEGAL & Illegal

// question no 1

var num1;
var num2;
var num3;

// question no 2

// 5 legal names 


var userName;
var _total;
var num2;
var first_name;
var $price;

// 5 illegal names 

// var 2user;
// var my-name;
// var user name;
// var 123;
// var var;

// question no 3 (a b c d e )

document.write("<br><br>Rules for naming JS variables")
document.write("<br><br>Variables name can only contain numbers, $ and _. for example : $my_1stVariable </br> Variable must begin with a letter, $ or _. for eg: $name, _name or name.</br> Variable names are case sensitive.</br> Variable names should not be JS keywords")



// chapter no 5 Maths Expression

// question no 1

let sum = 3 + 5;
document.write("<br><br>Sum of 3 and 5 is" + sum);

// question no 2

let sum1 = 3 - 5;
document.write("<br>subtract of 3 and 5 is" + sum1);


let sum2 = 3 * 5;
document.write("<br>multiply of 3 and 5 is" + sum2);


let sum3 = 3 % 5;
document.write("<br>modulus of 3 and 5 is" + sum3);

let sum4 = 3 / 5;
document.write("<br>divide of 3 and 5 is" + sum4);

// question no 3

var number;
document.write("<br><br>value after variable declaration is Undefined")

number = 5;
document.write("<br>Initial Value : " + " " + number)
number++
document.write("<br>Value after increment is : " + " " + number)
number = number + 7;
document.write("<br>Value after addition is :" + " " + number)
--number
document.write("<br>Value after decrement is :" + " " + number)

number = number % 5;
document.write("<br>The reminder is:" + " " + number)

// question no 4

var ticket = 600;
ticket = ticket * 5;
document.write("<br><br>Total cost to buy 5 tickets to a movie is " + ticket + "PKR")


// question no 5


document.write("<br><br> 4*1=4", "<br> 4*2=8", "<br> 4*3=12", "<br> 4*4=16", "<br> 4*5=20", "<br> 4*6=24", "<br> 4*7=28", "<br> 4*8=32", "<br> 4*9=36", "<br> 4*10=40");


// question no 6(a b c d)


var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write("<br><br>" + celsius + "°C is " + fahrenheit + "°F");

var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
document.write("<br>" + fahrenheit2 + "°F is " + celsius2 + "°C");



// question no 7

var item1 = 650
document.write("<br><br>Price of item 1 is " + item1);
var item1quatinty = 3
document.write("<br>Quantity of item 1 is " + item1quatinty);


var item2 = 100
document.write("<br>Price of item 2 is " + item2);
var item1quatinty2 = 7
document.write("<br>Quantity of item 2 is " + item1quatinty2);

var charges = 100
document.write("<br>Shipping Charges: " + charges);

document.write("<br>Total cost of your order is 2750");


// question no 8

document.write("<br><br><b>Mark Sheet</b>");

var marks = (980)
document.write("<br>Total Marks" + marks)
var obtained = (804)
document.write("<br>Obtained Marks" + obtained)

var percentage = (obtained / marks) * 100;

document.write("<br> Percentage: " + percentage + "%");

// question no 9
document.write("<br><br><b>Currency In PKR</b>");

var usd = 10
var saudi = 25
var pkr = (usd * 104.80) + (saudi * 28)
document.write("<br>Total Currency in PKR: " + pkr);

// question no 10

var dig = 5;
dig = 5 + 5 * 10 / 2;
document.write("<br><br>The value of 5 after some operations is : " + dig)

// question no 11

document.write("<br><br><b>Age Calculator</b>");

var curye = (2025)
document.write("<br>Current year" + curye);

var birye = (2005)
document.write("<br>birth year" + birye);

var nowage = (curye - birye)
document.write("<br>My current age" + nowage)

// question no 12



document.write("<br><br><b>The Geometrize</b>");

var radius = 20;
document.write("<br>Radius of a circle: " + radius);
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<br>The circumference is: " + circumference);
document.write("<br>The area is: " + area);

// question no 13

document.write("<br><br><b>The Lifetime Supply Calculator</b>");

var snack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;

var yearsRemaining = maxAge - currentAge;
var totalNeeded = yearsRemaining * 365 * amountPerDay;

document.write("<br>Favourite Snack: " + snack);
document.write("<br>Current age: " + currentAge);
document.write("<br>Estimated Maximum Age: " + maxAge);
document.write("<br>Amount of snacks per day: " + amountPerDay);
document.write("<br>You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + ".");



// chapter no 6,7,8,9 Maths Expression

// question no 1

var a = 10;

document.write("<br><br><b>Result:</b>");
document.write("The value of a is: " + a + "<br>");
document.write("..........................................<br><br>");

document.write("<br>The value of ++a is: " + (++a));
document.write("<br><br>Now the value of a is: " + a);

document.write("<br>The value of a++ is: " + (a++));
document.write("<br><br>Now the value of a is: " + a);

document.write("<br>The value of --a is: " + (--a));
document.write("<br><br>Now the value of a is: " + a);

document.write("<br>The value of a-- is: " + (a--));
document.write("<br><br>Now the value of a is: " + a);

// question no 2

var a = 2
var b = 1

var result = --a - --b + ++b + b--;

document.write("<br><br>a is " + a);
document.write("<br>b is " + b);
document.write("<br>result is " + result);


// question no 3 , 4 , 5 , 6 ( a b c d e)


var subject1 = prompt("Enter first subject name:");
  var subject2 = prompt("Enter second subject name:");
  var subject3 = prompt("Enter third subject name:");

  var totalMarksPerSubject = 100;

  var obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
  var obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
  var obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

  var totalMarks = totalMarksPerSubject * 3;
  var totalObtained = obtained1 + obtained2 + obtained3;
  var percentage = (totalObtained / totalMarks) * 100;

  document.write("<table border='1' cellpadding='5'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td><td>" + ((obtained1 / 100) * 100).toFixed(0) + "%</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td><td>" + ((obtained2 / 100) * 100).toFixed(0) + "%</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td><td>" + ((obtained3 / 100) * 100).toFixed(0) + "%</td></tr>");
  document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(0) + "%</th></tr>");
  document.write("</table>");

// chapter no 10 User Input & Conditional Statement

// question no 1

var city = prompt("Enter city name:");
alert("Welcome to city of lights");

// question no 2

var gender = prompt("Enter your gender (male/female):").toLowerCase();

if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma'am");
} else {
  document.write("Good Morning");
}

// question no 3

var color = prompt("Enter traffic signal color (Red, Yellow, Green):").toLowerCase();

if (color === "red") {
  alert("Must Stop");
} else if (color === "yellow") {
  alert("Ready to move");
} else if (color === "green") {
  alert("Move now");
}

// question no 4

var fuel = prompt("Enter remaining fuel in liters:");
if (fuel < "0.25") 
    {
  alert("Please refill the fuel in your car");
}



// question no 5


var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 5) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
  alert(" condition 1 is true");
}else if(c === 13) {
  alert(" condition 2 is true");
}else if(++c< 14){
     alert(" condition 3 is true");
}else if(c=== 14){
     alert(" condition 4 is true");
}else 
    alert("conditions are invalid");


    var marterialCost = 20000;
    var laborCost = 2000;
    var totalCost = marterialCost + laborCost;

    if(totalCost === laborCost + marterialCost){
        alert("The cost equals");
    };



// question no 6

var num = prompt("Enter a number:");
if (num % 2 === 0) {
  alert(num + " is an even number");
} else {
  alert(num + " is an odd number");
}

// question no 7
var num = prompt("Enter a number:");
if (num % 3 === 0) {
  alert(num + " is divisible by 3");
}



// question no 8



var temp = prompt("Enter temperature:");

if (temp > 40) {
  alert("It is too hot outside.");
} else if (temp > 30) {
  alert("The Weather today is Normal.");
} else if (temp > 20) {
  alert("Today's Weather is cool.");
} else if (temp > 10) {
  alert("OMG! Today's weather is so Cool.");
} else {
    alert("temperature not found!")
}

