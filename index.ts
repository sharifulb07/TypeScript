

// enum

enum WeatherConditions{
    Sunny,
    Cloudy,
    Rainy,
    Snowy    
}


console.log(WeatherConditions.Cloudy)
console.log(WeatherConditions.Sunny)
console.log(WeatherConditions.Rainy)
console.log(WeatherConditions.Snowy)



// const products:(string |number)[]=['Hello World',45]
// const products1:(string |number)[]=[45, 'This is headline number']

// console.log(products)
// console.log(products1)





// let myTuple:[string, number]=['Shariful Islam', 35]
// console.log(myTuple[0])
// console.log(myTuple[1])

// literal value

// let isTrue:true;
// isTrue=true; //valid
// isTrue=false; invalid

// console.log(isTrue)

// let nums: 1|2|3;
// nums=1 //valid
// console.log(nums);
// nums=4 //invalid
// console.log(nums)

// let color: 'red'| 'blue'| 'green'
// color='red' // valid
// color='orange' // invalid

// console.log(color)

// type UserInfo={
//     first:string,
//     last:string,
//     age:number
// }

// type Accounts={
//     email:string,
//     password:string
// }

// const user:UserInfo | Accounts={
//     email:"Shariful@gmail.com",
//     password:'sharif',
//     first:'This is shariful islam'
// }

// console.log(user)

// type connection
// type Person={
//     name:string,
//     age:number
// }

// type Employee={
//     id:number,
//     title:string
// }

// type personandemployee=Person & Employee;

// const PersonalInfo:personandemployee={
//     name:'shariful',
//     age:34,
//     id:3,
//     title:"Fullstack Developer"

// }

// console.log(PersonalInfo)

// optional properties

// type User={
//     name:string,
//     age?:number,
//     location:string
// }

// const PrintUserInfo=(user:User)=>{
//     return `My is ${user.name}, I'm ${user.age} years old, I'm from ${user.location}`
// }

// console.log(PrintUserInfo({name:"Shariful",  location:"khulna"}))

// type User={
//     name:string,
//     age:number,
//     location:string
// }

// const PrintUserInfo=(user:User)=>{
//     return `My is ${user.name}, I'm ${user.age} years old, I'm from ${user.location}`
// }

// console.log(PrintUserInfo({name:"Shariful", age:35, location:"khulna"}))

// Object as a function

// Object in js

// const person:{firstName:string, lastName:string, age:number}={
//     firstName:'Sharif',
//     lastName:"Hasan",
//     age:45
// }
// console.log(person)

// array

// const items:string[]=[];
// items.push("Item no one")
// items.push("Item no two")
// console.log(items)
// items.push(121)

// const numbers:number[]=[1,2,3,4,5,6];
// console.log(numbers)
// const names:Array<string>=["Bob", "John", "Adiyat"];
// console.log(names)

// console.log('hello world')
// let x:never;

// function neverReturns(msg:string):never{
//     while(true){}
// }

// x=neverReturns('sharif')

// function throwError(msg:string):never{
//     throw new Error(msg)
// }

// throwError("something went wrong");

// void

// function printMessage(message:string):void{
//     console.log(`This is ${message}`)
// }

// printMessage("My name is shariful islam")

// const double2=(x:number):number=>x*x;

// console.log(double2(5))

// function double(num:number):number{
//     return num*num;
// }

// let res=double(4)
// console.log(res)
