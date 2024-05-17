//alert("Hi i am aravindh");

// console.log("I am building javascript code")

// Variable Conccortination
// type of variable === var , let and const
let name = "Aravindh";
let msg = "Hi my name is " + name + " i am learning java script";
// var name="Aravindh";
// var msg="Hi my name is "+name+" i am learning java script";
let number1 = 20;
let number2 = 30;
let total = number1 + number2;
alert(msg);
console.log(msg + " total numver values is " + total);

/*
Java script variiable rules 
1.No Javascrip keywords like if , for do,while etc
2.Should not start with number ex--4number is wrong . number4 is corrrect 
3.No space and no -
4.Its case sensitive ex = fullName , FullName the both is different variable name
5.Use meaningful names 
*/

// Javascript const === constant
let name1 = "aravindh";
name1 = "aravindhkumar";
const age = "11-06-2021";
// const name2="aravind"; we should not change the const varible values
// name2="aravi";
console.log(
  "Hi my name is " + name1 + " I am learning javascript & Iborn in " + age + ""
);

/*Javascript data type 
two types of data type availble 
1. Primitive data type ==ex -- string , int boolean , null , undefined data type
2.Reference data type ===ex == array ,object,function
*/
//Primitive Data type
let names = "Aravindh"; //String
let ages = 24; //integer and number
let isyoung = true; //boolean
let trophy = null; //null
let lastname = undefined; //undefien ddata type

//statically typed === string name ="aravindh" ; we should mention what type of variable
//Dynamically typed === name = "aravindh"; not neccessary to mention variable

//Javascript Object
/*
Object always mentioned in {}
ex-- let person = {key:"value"}
object values called two method 
1.dot notation ex == console.log(person.name3);
2.Bracket notation ex ==console.log(person["name3"]);
*/
let person = {
  name3: "aravindh",
  age3: 24,
  isalive: true,
  gender: "Male",
  address: "chennai, tambaram-45",
  sibilings: {
    brother: "Abishek shankar",
    sister: "priya shankar",
  },
};
person.age3 = 25; //object varible values change method
//Dot notation
console.log(person.name3);
console.log(person.age3);
console.log(person.isalive);
console.log(person.gender);
console.log(person.address);
//Bracket notation
console.log(person["name3"]);
console.log(person["age3"]);
console.log(person["isalive"]);
console.log(person["gender"]);
console.log(person["address"]);

//Parent object call method
console.log(person.sibilings.brother);
console.log(person.sibilings.sister);

//Javascript array[]
// {} ==object
// [] ==array
let favcolour = ["red", "green", "blue"];
favcolour[4] = "black";
console.log(favcolour[0]);
console.log(favcolour[1]);
console.log(favcolour[2]);
console.log(favcolour[4]);
console.log(favcolour.length);

//Javascript function
function greetuser(firstname, lastname) {
  // let namefun ="Aravindh";
  let msgfun =
    "Hi i am " + firstname + " " + lastname + " I am learning javascript";
  console.log(msgfun);
}
greetuser("aravindh", "kumar");
greetuser("aravindh", "samy");
greetuser("praksh", "raj");
function add(numberfun1, numberfun2) {
  console.log(numberfun1 + numberfun2);
}
add(40, 50);
add(20, 30);

// Java script Operators
/* var =operator - is called expression (algorithm)
Types of operator
1.Arithmatic operator
2.Comparison operator
3.Assignment operator
4.logical operator
5.Bitwise operator
*/
// Assignment operator
let x = 5;
x++;
// x=x+2;
// x *=5;
// x-=10;
console.log(x);
//Arithmetic operator
let no1 = 5;
let no2 = 20;
console.log("Arithmetic operator");
console.log(no1++);
console.log(no1);
console.log(no1 + no2);
console.log(no1 - no2);
console.log(no1 * no2);

//comparison operator
//lessdhan <=
//Greaterdhan >=
//Loose equality operator ==
// strict equality operator ===
//not equality operator !==
//string comparison ('anbu' > 'aravind')=false
console.log("anbu" > "aravindh");

//ternary operator
console.log("ternary operator");
let ageternary = 15;
let type = ageternary > 18 ? "adult ticket " : "child ticket";
console.log(type);

//logical operator
/*
Logical AND operator (&&) ==return true  if both operator true
Logical OR operator (||) == return true if anyone operator true 
Logical NOT(!)
*/
console.log(true && true); //AND
console.log(true || false); //OR
console.log(!true); //!true =false == !false=true

//logical operator example
let highincome = true;
let cibilscore = false;

// let eligible = highincome && cibilscore ;
let eligible = highincome || cibilscore;
let application = !eligible;
console.log("loan status :" + eligible);
console.log("application status :" + application);

//Bitwise operator
/*
Binary number 8421
1 ==0001
2 ==0010
3 ==0011
4 ==0100
Bitwise OR == |
Bitwise AND -= &
*/
console.log("Bitwise operator");
console.log(1 | 2); // |OR  0001 0010 = anyone true == 0011 = ans = 3
console.log(1 & 2); // & AND 0001 0010 both are true == 0000 =ans = 0

//example
console.log("Binary operator");
const readpermission = 4;
const writepermission = 2;
const executepermision = 1;

let mypermission = 0;

let result = mypermission | writepermission;
let message = result & readpermission ? "YES" : "No";
console.log(message);

/*
Conditional Statements 
If -else and switcase statements
*/
let israning = true;
let isclouding = false;

if (israning & isclouding) {
  console.log("Take umbrella and go outside ");
} else {
  console.log("Normal weather so go outside");
}

//greeting program
// let morning = 1;
// let afternoon = 5;
// let evening = 9;
let time = 22;
if (time < 12) {
  console.log("good morning");
} else if (time < 17) {
  console.log("Good evening");
} else {
  console.log("Good night");
}

//live hour project
console.log("Live time greeting project ");
let hour = new Date().getHours();
// console.log(hour.getHours());
if (hour >= 0 && hour <= 13) {
  console.log("Good morning");
} else if (hour >= 13 && hour <= 17) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

//Switch statements

console.log("Univercity grade projet");
let grade = "H";

switch (grade) {
  case "S":
    console.log("Super Grade");
    break;
  case "A":
  case "B":
    console.log("Excellent ");
    break;
  case "E":
    console.log("Just pass");
    break;
  case "U":
    console.log("Failed");
    break;
  default:
    console.log("Unknown grade");
}

//School mark project
console.log("School mark projct");
let mark = 97;

switch (true) {
  case mark >= 0 && mark <= 25:
    console.log("Just pass");
    break;
  case mark >= 25 && mark <= 50:
    console.log("Justify Pass");
    break;
  case mark >= 50 && mark <= 75:
    console.log("Excellent");
    break;
  case mark >= 75 && mark <= 100:
    console.log("Toppers");
    break;
  default:
    console.log("Unknows");
}

//Mobile buying application
console.log("Mobile buying application");

let money = 60000;
switch (true) {
  case money >= 10000:
    console.log("You buy Iphone");
    break;
  case money >= 5000:
    console.log("You buy Android mobile");
    break;
  case money >= 1000:
    console.log("You buy basic mobile");
    break;
  default:
    console.log("You can't buy any mobile");
}

// Types of loop
/*
1.For loop
2.While loop
3.Do while loop
4.For-in-loop
5.For-of-loop
*/

for (let i = 1; i <= 5; i++) {
  console.log("Number " + i);
}
console.log("add or even program");
for (let j = 1; j <= 10; j++) {
  if (j % 2 == 0) {
    console.log("even number " + j);
  }
}

//For in loop
//Object declare
const persons = {
  namein: "Aravindh",
  agein: 24,
  Genderin: "Male",
};
for (key in persons) {
  // console.log("Key "+key+""+" person "+persons[key]);
  console.log(key + " ", persons[key]);
}

//array declare
let colors = ["red", "green", "pink", "black"];
for (let key in colors) {
  console.log(colors[key]);
}

//for -of-loop
let colorof = ["pink", "blue", "gree", "orange"];
for (let color of colorof) {
  console.log("color " + color);
}

//Object oriented programing

let personobj = {
  name: "Aravindh kumar",
  age: 26,
  isalive: true,
  addresss: {
    city: "Chennal",
    State: "Tamilnadu",
  },
  interest: ["creating", "teaching new things"],
  greetobj: function () {
    let msgobj = "Hi i am " + this.name + " my age is " + this.age + " ";
    console.log(msgobj);
  },
};
console.log(personobj.addresss.State);
console.log(personobj.interest);
console.log(personobj.greetobj());
console.log(personobj.interest);

//Javascript factory function
// 1st method
function createperson() {
  let personfactory = {
    namefun: "Aravindh Raj",
    agefun: 26,
    getterfun: function () {
      let msgfun =
        "Hi i am " + this.namefun + " I am " + this.agefun + " years old";
      console.log(msgfun);
    },
  };
  return personfactory;
}

let aravindh = createperson();
aravindh.getterfun();
// console.log(aravindh);
// personfactory.getterfun();

// 2nd method
function personfun(namees) {
  //camal function ==starts smal letter to capital letter
  return {
    namee: namees,
    // namee1:"Aravindh kumara",
    ageee: 27,
    getterfunction: function () {
      let message =
        "Hi i am " + this.namee + " i am " + this.ageee + " year old";
      console.log(message);
    },
  };
}
let arav = personfun("aravindh dhilip");
arav.getterfunction();
let tharun = personfun("tharunkumar");
tharun.getterfunction();

// Constructor function
function Personname(personnamee) {
  //Pascal function Capital lettter to small letter
  this.personnamees = personnamee;
  this.getterperson = function () {
    console.log("Hi i am " + this.personnamees + "");
  };
}
let persdet = new Personname("Aravindhaaa");
persdet.getterperson();

//Dynamic object

let dynamicobj = {
  dynaname: "Dhilip kumar",
};
console.log(dynamicobj);
dynamicobj.dynamicage = 23;
dynamicobj.dynaicgetter = function () {
  console.log("Welcome to the greeat karikaln magic show");
};
delete dynamicobj.dynamicage;
delete dynamicobj.dynaicgetter;

//Constructor property

let consname = "Priya Anand";
let consage = 25;
let conalive = true;

console.log(consname, consage, conalive);

let consnamee = new String("Priya Anand");
let consagee = new Number(25);
let conalivee = new Boolean(true);

console.log(consnamee, consagee, conalivee);

//Function and objects

// apply and call
function fun(funname, interfun) {
  (this.funame = funname),
    (this.intrestfun = interfun),
    (this.funage = 25),
    console.log(
      "Hi i am " +
        this.funame +
        " I am " +
        this.funage +
        " I am looking" +
        this.intrestfun +
        ""
    );
}
fun.call({}, "Roja", " Android developer");
const functionnames = new fun("POOJA", " Web development");
// console.log(fun.call({},"Roja"));
// let funnames =fun("trisha");
// console.log(funnames);

function applymethod(applyname, applyage, applyinterest) {
  (this.apname = applyname),
    (this.apage = applyage),
    (this.apintrest = applyinterest),
    (this.apptygetter = function () {
      console.log(
        "Hey I am " +
          this.apname +
          "I am " +
          this.apage +
          "I am looking for " +
          this.apintrest +
          ""
      );
    });
}
// applymethod.apply({},["manivel"])
// applymethod.call({},"Manoj","20","Web desighner")
// const appcall = new applymethod("Manoj","20","Web desighner")
// appcall.apptygetter();
// console.log(appcall);
// applymethod.call({},"Manoj","20","Web desighner");
// applymethod.apply({},["Krishna","21","Software engineer"]);

// Primitive type and Reference type

//Primitive type

let a = { value: 10 };
let b = a;
a = 15;
a.value = 20;
// function primitiveexample(){
//   b++;
// }
// primitiveexample(b.value);
// console.log(b);
// Reference type
let cardobj = { values: 5 };

function primitiveexample(card) {
  card.values++;
}
primitiveexample(cardobj);
console.log("availabel card " + cardobj + "");

let user = {
  name: "Prakshraj",
  age: 20,
  getterfind() {
    console.log("Wheather find the name is availble or not");
  },
};
//for-in
for (let key in user) {
  console.log(user[key]); //for-in
}
//for-of and object.keys
for (let entries of Object.keys(user)) {
  console.log(entries);
}
//for-of and object.entries
for (let entry of Object.entries(user)) {
  console.log(entry);
}
//  weather the Find name is there or not
if ("name" in user) {
  console.log("Yes name is there ");
} else {
  console.log("Name is not there");
}

//Cloning javascript objects
console.log("Cloning javascript object");

let users = {
  clonename: "Tiger kumar",
  clonegetter() {
    console.log("Hi this topic name is cloning and name is " + clonename + "");
  },
};
//type 0 and implemment first
let assigntype = Object.assign({ age: 25 }, users);
console.log(assigntype);
// Spread operator (...)
let Spreadoperator = { ...users }; //testing
console.log("Spread operator " + Spreadoperator + "");
// type 1
let another = users;
console.log(another);
// type 2
for (let keyss in users) {
  console.log(users[keyss]);
}

//Math. operators
console.log("Math objects ");
console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(1.9));
console.log(Math.random(100 - 1) + 1);
console.log(Math.max(24, 54, 76, 90));

let marks = [20, 40, 10, 70, 26, 80];
let results = Math.max(...marks);
console.log("Maximum mark " + results + "");

//String object
// 1 proberties availble in string object ex ==.length()
let frondname = "Pushpa";
let backname = "Raj";
let splitname = "Thanga Durai Muruku Mama !";

let fullnames = new String("Kumar");

console.log("frondname length " + frondname.length);
console.log(frondname.concat(" " + backname));
console.log(backname.charAt(1));
console.log(fullnames.includes("Kum"));
console.log(fullnames.startsWith("Ku"));
console.log(frondname.endsWith("pa"));
console.log(backname.indexOf("j"));
console.log(frondname.replace("Pushpa", "Kumar"));
console.log(splitname.split("", 2));
console.log(splitname.substring(6));
console.log(frondname.toLocaleUpperCase());
console.log(splitname.trim());

//Escape notation

console.log("This is escape notation\n examp\tle ");

//Java script template litterals

let tempmsg = `Javascript 
"learning" in tamil`;
console.log(tempmsg);

//Jvascript date object

const date = Date();
const now = new Date();
console.log(date);
console.log(now.getTime());

//Date get object
let [month, dates, year] = new Date().toLocaleDateString("en-IN").split("/");
console.log(month, dates, year);

// JAVA SCRIPT array
//Exicisting arry print
let arrnum = [4, 6, 9, 10];
//Add array
arrnum[4] = 40;
console.log("Total number " + arrnum);
console.log(arrnum[2]);
/*
1 push -- add backside 
2 unshift -- add frond  array 
3 splice --- add between array 
*/
let fruits = ["apple", "orange", "Mange"];
fruits.push("grapes", "lemeon");
fruits.unshift("pineapple", "avagoda");
fruits.splice(3, 0, "watermelon");

console.log(fruits);

// Findind element in javascript array
let items = ["apple", "orange", "mango"];
console.log(items.indexOf("apple"));
console.log(items.lastIndexOf("mango"));
console.log(items.indexOf("mango") !== -1);
console.log(items.includes("orange"));

//Findind element and array in reference type

/*
1 Find = total element print 
2 Findindexof = take only indext position 
*/

let order = [
  { id: 1, items: "android phone", quantity: 3 },
  { id: 2, items: "apple phone", quantity: 5 },
  { id: 3, items: "noraml phone", quantity: 10 },
];
//Find total value
let resultss = order.find(function (details) {
  return details.items === "noraml phone"; // return value store in the varible name of resultss
});
console.log(resultss);

//Find index position value

let findindexvalue = order.findIndex(function (findindex) {
  return findindex.quantity == 5;
});
console.log(findindexvalue);

// Javascript arrow function =>
console.log("Arrow function =>");
let arrowfunction = order.find((arrowobj) => {
  return arrowobj.quantity == 3;
});
console.log(arrowfunction);
// Javascript arrow function in single line
console.log("Single line arrow function");
let singleline = order.find((singleobj) => singleobj.items == "apple phone"); // in arrow function didnot mention "function"
console.log(singleline);

// Removing elements in array
/*
1. Push == pop  // back
   add === remove
2. unshift == shift   // frond
   add === remmove 
3  splice == splice  //between 
   add === remove 
*/

let removearray = [10, 15, 20, 25, 30];
//pop
removearray.pop();
//shift
removearray.shift();
//splice
removearray.splice(1, 1);
console.log(removearray);

// Emptying array in java script
let emptynum = [4, 2, 5, 1, 7];
// Solution 1
// emptynum=[];
// Solution 2
// emptynum.length =0;
// solution 3
//  emptynum.splice(0, emptynum.length);
// solution 4
while (emptynum.length) {
  emptynum.pop();
}
console.log(emptynum);

/// Combining and extracting elements in java script
// combining = concat
// extracting = slice

//Primitive data type
console.log("combining and extracting");
const shopping_card = ["Magiii", "Masla", "vegetables"];
const additioal_card = ["Machbox", "sugar"];
// combine concat
let recipe = shopping_card.concat(additioal_card);
//spread operator
let recip = [...shopping_card, ...additioal_card];
// extracting slice
let addrecipe = recipe.slice(1, 4);
console.log(recipe);
console.log(recip);
console.log(addrecipe);
// Reference data type
const add_veg = [{ itemss: "pottato" }];
const add_fruits = ["apple", "orange", "mango"];
let mixed = add_veg.concat(add_fruits);
add_veg[0].itemss = "tommato";
console.log(mixed);

/// iteratiing and foreach method

const dailyRoutine = ["walkeup", "eating", "sleeping"];

for (let routine of dailyRoutine) {
  console.log(routine);
}
for (let routine2 in dailyRoutine) {
  console.log(routine2, dailyRoutine[routine2]);
}
dailyRoutine.forEach(function (routine3, RoutineIndex) {
  console.log(RoutineIndex, routine3);
});

// Joining and splitting inn java script
// Join
let dailyRoutines = ["Brushing", "Bathing", "studying"];
let daily = dailyRoutines.join(", ");
console.log(daily);
// split
let firstName = "Aravindh Rajesh";
let routiness = firstName.split(" ");
let firstname1 = routiness[0];
let lastname1 = routiness[1];
console.log(routiness);
console.log(firstname1);
console.log(lastname1);
console.log(
  "my first name is " + firstname1 + " and my last name is  " + lastname1 + ""
);

// Sort in javascript array
// dynamic type
let students = [8, 2, 5, 6];
// students.sort();
// students.sort(function(a,b){
//   return b-a;
// });
students.reverse();
console.log(students);
// Reference type
console.log("sort using reference type");
let student = [
  { id: 2, names: "Vimal", rank: 14 },
  { id: 4, names: "aravindh", rank: 1 },
  { id: 5, names: "joshuva", rank: 4 },
];

let rank = student.sort(function (a, b) {
  nameA = a.names.toUpperCase();
  namesB = b.names.toUpperCase();
  if (nameA < namesB) return -1;
  if (nameA > namesB) return 1;
  return 0;
});
console.log(rank);

// primitive =Testing javascript array == every() and some ()

// every == inside array all elements should true ex election [19,24,25]
// some == inside array any one value should true ex election [19,15,20]
//
console.log("primitive testing javascript array");

let age_testing = [20, 10, 28];

let age_result = age_testing.some(function (value, index, array) {
  return value >= 18;
  // console.log(value);
  // console.log(index);
  // console.log(array);
});
console.log(age_result);

// example == all the number is odd or even
let testing_number = [2, 4, 6];

let iseven_or_odd = testing_number.every(function (value) {
  return value % 2 == 0;
});
console.log("is the number is even " + iseven_or_odd);
//
let oddtesting = [5, 7, 9, 4];
let iseven = oddtesting.some(function (value) {
  return value % 2 !== 0;
});
console.log("isthe value is odd " + iseven + "");

// super store example
console.log("SHOOPING PROJECT");
const isdeliverable = [
  { id: 1, items: "apple", isDeliverale: true },
  { id: 1, items: "mango", isDeliverale: true },
  { id: 1, items: "tomatto", isDeliverale: false },
];
let allDeliverable = isdeliverable.every(function (value) {
  return value.isDeliverale == true;
});
let someDeliverable = isdeliverable.some(function (value) {
  return value.isDeliverale == true;
});
console.log("Is allDeliverable " + allDeliverable);
console.log("is some deliverable " + someDeliverable);

/// Filltering in javascript array filtte()

let age_check = [15, 19, 20, 24];
let age_results = age_check.filter(function (value) {
  return value >= 18;
});
console.log("eligible voters " + age_results);

// find add or even  using filtter
let odd_even_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_result = odd_even_no.filter(function (value) {
  return value % 2 !== 0;
});
let odd_result = odd_even_no.filter(function (value) {
  return value % 2 == 0;
});
console.log("even  results " + even_result);
console.log("odd results " + odd_result);
/// Phone price list project filter and find
let mobiles = [
  { id: 1, items: "Android mobile ", cost: "6500" },
  { id: 2, items: "Iphone mobile ", cost: "7500" },
  { id: 3, items: "Basic mobile ", cost: "9500" },
  { id: 4, items: "Windows mobile ", cost: "3500" },
  { id: 5, items: "lava mobile ", cost: "9400" },
  { id: 6, items: "samsung mobile ", cost: "4400" },
];
let afortable = mobiles.filter(function (value) {
  return value.cost < 4000;
});

console.log(afortable);
let mediumlevel = mobiles.filter(function (value) {
  return value.cost > 4000 && value.cost < 7000;
});
let intermediate = mobiles.filter(function (value) {
  return value.cost > 7000 && value.cost < 10000;
});
// find
let find_result = mobiles.find(function (value) {
  return value.cost < 10000;
});
let find_resultindex = mobiles.findIndex(function (value) {
  return value.cost < 10000;
});
console.log("afortable mobile", afortable);
// console.log(`affortable price mobiles ${afortable}`); //+ construcot method not working filter methed
console.log("mediumlevel ", mediumlevel);
console.log("intermediate level ", intermediate);
console.log("Find method result ", find_result);
console.log("Findindex method result ", find_resultindex);

// Javascript map() function
console.log("Map function primitive and reference type");
let map_number = [1, 2, 3, 4, 5];
let mpnumber_result = map_number.map(function (value) {
  return value * 2;
});
console.log(mpnumber_result);
// Refernce type
let map_function = [
  { id: 1, firstname_map: "Aravindh", lastname_map: "Kumar" },
  { id: 2, firstname_map: "Priya", lastname_map: "Dharshan" },
  { id: 3, firstname_map: "Kumar", lastname_map: "durai" },
  { id: 4, firstname_map: "logi", lastname_map: "babu" },
];
let fullname_map = map_function.map(function (value) {
  let array_map = [value.firstname_map, value.lastname_map].join(" ");
  // return {id:value.id,array_map} one method
  let obj = { id: value.id, array_map }; // 2nd method
  return obj;
});
console.log(fullname_map);

///Chaining methods using sort less dhan and sort by tittle and fillter by less dhan 80000  and map (tittle "_₹" cost)
console.log("Chain methods");
let products = [
  { id: 1, items_name: "basic mobile", cost: 5000 },
  { id: 2, items_name: "android mobile", cost: 2000 },
  { id: 3, items_name: "iphones mobile", cost: 15000 },
  { id: 4, items_name: "windows mobile", cost: 4000 },
  { id: 5, items_name: "cphones mobile", cost: 2500 },
];
/// -----method 1 ---- working
// sort by lessdhan
// let sortbyless = products.sort(function (a, b) {
//   return a.cost - b.cost;
// });
// // sort by title
// let sortbyitems = sortbyless.sort(function (a, b) {
//   if (a.items_name < b.items_name) return -1;
//   if (a.items_name > b.items_name) return 1;
//   return 1;
// });
// // filter <8000
// let filteritem = sortbyitems.filter(function (value) {
//   return value.cost < 8000;
// });
// let mapitem = filteritem.map(function (value) {
//   return [value.items_name+"_₹ "+value.cost];
// });
// console.log(mapitem);
// ----method 2 ----
// chain method  -- working
let final = products
  .sort(function (a, b) {
    return a.cost - b.cost;
  })
  .sort(function (a, b) {
    if (a.items_name < b.items_name) return -1;
    if (a.items_name > b.items_name) return 1;
    return 1;
  })
  .filter(function (value) {
    return value.cost < 8000;
  })
  .map(function (value) {
    return [value.items_name + "_₹ " + value.cost];
  });
// sort by title
// let sortbyitems = sortbyless
// // filter <8000
// let filteritem = sortbyitems
// let mapitem = filteritem
console.log(final);
// console.log(filteritem);
// console.log(sortbyitems);
// console.log(sortbyless);

// reduce() in javascript
let donates = [40, 44, 26, 45, 65];
let donation = donates.reduce(function (previousvalue, currentvalue) {
  // console.log("previous " , previousvalue);
  // console.log("current " , currentvalue );
  return previousvalue + currentvalue;
});
console.log(donation);
// shoppind card add
let shooping_card = [
  { id: 1, item: "Dirymilk", cost: 100 },
  { id: 2, item: "Bourbon", cost: 45 },
  { id: 3, item: "Kitkat", cost: 200 },
];

// 1St method
/*let finalstage = shooping_card.reduce(function (accumulate, currentvalue) {
  return accumulate + currentvalue.cost;
}, 0);
console.log("total value si ",finalstage); */
// 2nd method

/* let resulut_reduce = shooping_card.reduce(
  (accumulated, currentvalue) => accumulated + currentvalue.cost,0
);
console.log("total value is " + resulut_reduce); */

// 3rd method
const addcost = (accumulate, currentvalue) => accumulate + currentvalue.cost;
let totalcost = shopping_card.reduce(addcost, 0);
console.log("total cost " + totalcost);
// Function decalaration and expression  and annonyms
// Function declaration
let num1 = 58;
let num2 = 22;

// function addno(){
//   console.log(" Function declaration "+num1+num2);
// }
// addno();
// Function expression and named
/*const addno =function addno(){
  let resu = num1+num2;
  console.log(resu);
}
addno(); */
// Annonyms function with arrow function

let addno = () => {
  let res = num1 + num2;
  console.log("annonyms method " + res);
};
addno();

// Javascript inovoking IIFE(Imediately Invoked Function Expression(IIFE))
// SYNTAX
// (funnction name (){} ());
let loc1 = 40;
let loc2 = 100;
(function name(num1, num2) {
  let valu = num1 + num2;
  console.log("invoking result " + valu);
})(loc1, loc2);

// Java script function arguments
// 1st method
let tiffe = 50;
let lunch = 150;
let pertrol = 102;

function dailtExpensive() {
  let result = tiffe + lunch + pertrol;
  console.log("Javascript function argument " + result);
}
dailtExpensive();
// second method
function dayExpensive(tiffen, lunche, dinner) {
  let result = tiffen + lunche + dinner;
  console.log(`second method of javascript argument , ${result}`);
}
dayExpensive(50, 40, 10);

// rest operator (...) it works only function (...expen)
// old java script
function expensive() {
  console.log("it is a rest operator example (...)");
  let result = [arguments];
  console.log(result);
  // let result =[arguments[2]]
  // console.log("2 nd index value "+result);
}
expensive(10, 20, 30, 40, 50, 60, 70);
// Modern java script
function expenses(...argu) {
  let result = argu;
  console.log("Modern javascript rest operator " + result);
}
expenses(10, 15, 20, 25, 30, 35, 40, 45);

// Java script default parameter
function calculateTax(cost, tax) {
  let totalTax = cost * (tax / 100);
  console.log(
    `Total cost is ₹${cost} \n\n Total tax is ₹${tax}\n\n Total tax amount is ₹${totalTax}`
  );
}
calculateTax(50, 15);

/// Java script getter and settter function

let people = {
  firstName: "Aravindh",
  lastname: "logi",
  // fullname: function(){ old method
  fullname: () => {
    //es6 method
    return `${people.firstName} ${people.lastname}`;
  },
};
console.log("people full name " + people.fullname());

// getter = get vvalues from data
// setter = get values from data
let workers = {
  firstName: "punith",
  lastname: "kumar",
  get fullname() {
    return `${workers.firstName} ${workers.lastname}`;
  },
  set fullname(value) {
    let values = value.split(" ");
    this.firstName = values[0];
    this.lastname = values[1];
  },
};
workers.fullname = "Vijay varma";
// console.log(`getter example ${workers.fullname}`);
console.log(`setter example ${workers.fullname}`);

// Javascript error handling
let personwho = {
  firstName: "Harshan",
  lastname: "kumar",
  get fullname() {
    return `${personwho.firstName} ${personwho.lastname}`;
  },
  set fullname(value) {
    if (typeof value != "String") {
      // const err = new console.error("It is not string");
      const err = new Error("it is not string ");
      // const err = new console.error("it is not string ");
      throw err;
    }
    let values = value.split(" ");
    this.firstName = values[0];
    this.lastname = values[1] ?? "";
  },
};
try {
  personwho.fullname = "vijay kum";
} catch (ex) {
  alert(ex);
  // console.log(ex);
}
// console.log(`getter example ${workers.fullname}`);
console.log(`setter example ${personwho.fullname}`);

// this keyword in java script
const channel = {
  tittle: "Hello java script ",
  sholanguage:"Javascript langauge",
  languages: ["tamil", "english", "malayalm"],
  subscribe() {
    console.log(this);
  },
  showlanguage() {
    console.log(this.languages);
  },
  langunage(){
    this.languages.forEach(
      function(lang){
        // console.log(this.sholanguage,lang); IS not working 
        // console.log(this.video +" "+lang); // its working 
        console.log(this.sholanguage +"-"+lang.toUpperCase());
        
      },
      this ///another method 
     // {video:"Javascript"} one method 
    )
    console.log();
  }
};
// channel.share = function () {
//   console.log("this method ");
// };
// channel.subscribe();
// channel.showlanguage();
channel.langunage();
