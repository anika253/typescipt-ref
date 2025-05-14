let x = 1; //type interferencing ..is is plain js
console.log(x);

let y: number = 1; // it is typescipt code
console.log(y); // specify its type

//index.js m only js only here

/*let z: number = 1;
z = "harkirat";
console.log(z);*/

function greet(firstname: any) {
  console.log("hello" + firstname);
}
let s: number = 1;
console.log(s);

greet("anika");
// never use any not a good practice btw here

// write a function that calcualtes sum of 2 numbers in input and returns the sum here

function sum(a: number, b: number) {
  return a + b;
}
let ans = sum(1, 2);
console.log(ans);

// return true if age is greater than 18 else false here in this funciton

function age(a: number) {
  if (a > 18) {
    return true;
  } else {
    return false;
  }
}
// this function is getting its return type on its own the type is only of the parameters u r passing to this function here !
//typescript compiler is smart enough to infer that thing here

// create a function that takes another function as an input ands runs it after 1 sec

//npx tsc --b (gives index.js )
function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}

function log() {
  console.log("hello");
}
delayedCall(log);

let sumy = (a: number, b: number) => {
  return a + b;
};

//donnt push js file to github
// npx tsc -b to buils the typescipt file and create a corr js gile

// changing the tsconfig.json file to add rootDir , outDir

// interfaces and types
// how to define object as an arguement ?
function greet2(user: { name: string; age: number }) {
  console.log("hello" + user.name);
}
greet({
  name: "anika",
  age: 21,
});

// alternative here-->custom type here
// create a function isLegal that returns a false or true depending on legalAge
interface userType {
  // no = in interface here
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}
function isLegal(user: userType) {
  if (user.age > 18) return true;
  else return false;
}
// type or interfaces

type stringOrnumber = string | number;
function sum5(a: stringOrnumber, b: stringOrnumber) {}

interface manager {
  name: string;
  age: number;
}
interface Employee {
  name: string;
  department: string;
}
type TeamLead = manager | Employee; // should have name , age , deptt all 3 of them...
let t: TeamLead = {
  name: "hark",
  age: 21,
  department: "HR",
};
function greet5(name: string): string {
  return "Hello" + name;
}
// ts ->a strong typed language

function isEven(num: number): boolean {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// interface to define custom types here .
interface User {
  name: string;
  age: number;
  address?: {
    // making address an optional field here

    city?: string;
    country?: string;
    pincode: number;
  };
}
let user = {
  name: "harkirat",
  age: 21,
  address: {
    city: "Chandigarh",
    country: "India",
    pincode: 569655,
  },
};

let user2 = {
  name: "anika",
  age: 21,
};
function isLegalll(user: User): boolean {
  return user.age >= 18;
}
const answer = isLegalll(user);
// how to make address optional ?
console.log(user2.age);

interface people {
  name: string;
  age: number;
  //greet: () => string;
}
const person: people = {
  name: "hark",
  age: 21,
  greet: () => {
    return "hi";
  },
};

// class in cpp = interface in typescript here

// interface is a typescript phenomenon classes can also implement the interfaces

class Manager implements people {
  name: string;
  age: number;
  number: string; // extra thing of ur age
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.number = "3435657";
  }
}
// creating an object of class manager;
let userrr = new Manager("John", 30);
console.log(userrr.age);

// interface ko tum further classes m use kr skte ho but not the same with types here.

//abstract classes ::

abstract class User5 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract greet(): string;
  hello() {
    console.log("hi there");
    // u can define default functions hello here like this in abstract class here
  }
}

// diff bw interfaces and abstract class?
/*
both very similar to each other but 


*/
class Employee2 extends User5 {
  // uses extends not implements here
  name: string;
  constructor(name: string) {
    super(name);
    this.name = name;
  }
  greet() {
    return "hi" + this.name;
  }
}
interface userr {
  name: string;
  age: number;
}

// TYPES
type Userr = {
  name: string;
  age: number;
};
// interace m no = ..but it in types
// types let u do unions and intersections
type A = {
  a: string;
};
type B = {
  b: number;
};
type C = A & B;
type D = A | B;

type Employeee = {
  name: string;
  startDate: string;
};
type Managerr = {
  name: string;
  department: string;
};
type teamLead = Employeee & Managerr;

let t1: teamLead = {
  name: "ANIKA",
  startDate: "01-02-2005",
  department: " head software MICROSOFT ",
};

type GoodUSER = {
  name: string;
  gift: string;
};
type BadUser = {
  name: string;
  ip: string;
};
type user = GoodUSER | BadUser;
// properties from A or B or both here;
// create 2 types user and admin
//create a function that takes either a user or admin
// as an input and returns a string "welcome ,[name]";
interface Admin {
  name: string;
  permission: string;
}
interface User {
  namne: string;
  permissions: str;
}
