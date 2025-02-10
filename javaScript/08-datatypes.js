//primitive - in this type the datatype send a copy in parameters not a actual value so when you change the datatype it cant effect  on original value


let number= 100;
let bigInt = 10000000000n;
let Str ="parthiv"
let loggedIn = false
let value = null;
let value1 = undefined;
let id = Symbol('123')
let id1 = Symbol('123')

console.log(number,bigInt,Str,loggedIn,value,value1,id,id1)
 console.log(id===id1);

//non-primitive(refrenced)-> in this type the datatype send a address of the variable and it effect on original value

let arr1= ["parthiv","Thadani"]

let object ={
    name : "Parthiv",
    age : "22"
}

const myFunction = function(){
    console.log("hello world")
}

// console.log(arr1,object)
console.log(typeof(id) )


//++++++++++++++++++++++++++++++++++++++++++++ Memory-Allocation +++++++++++++++++++++++++++++++++++++++++++++++++++++++\

// there are two types of memory allocation 1) stack(primitive) 2)heap (non-primitive)

//1)stack :Example

let myYtName="parthiv"

let changeYtname=myYtName
changeYtname ="Pdking"

console.log(myYtName,changeYtname)

//2)heap : Example

let userOne = {
    name : "Parthiv",
    email : "thadani@gmail.com"
}

let userTwo = userOne

userTwo.email =  "parthiv@gmail.com"

console.log (userOne.email , userTwo.email)