// let a = 10
// let b = 20
// let c  = a*b
// document.write(c)
// let d  = 'fadsfafsa'
// let e  = true

// let a  = 10
// if(a>10){
//     document.write('a is greater then 10')
// }else{
//     document.write('a is smaller then 10')
// }
// // switch case
// let day = 'sunday'
// switch(day){
//     case 'monday':
//         document.write('today is monday')
//     case 'sunday':
//         document.write('today is tuesday')
//         break
//     default:
//         document.write('enter something valid')
        
// }
// for loop 
// for (let i = 0; i < 10; i++) {
//     document.write(i + "<br>")

// }
// while loop 
// let i = 0
// while (i < 11) {
//     document.write(i + "<br>")
//     i++
// }
//! array
// let a  = 10
// let fruits = [1,2,3,4,5,6,'sdfasdf']
// document.write(fruits.length)
// document.write(fruits[0])
// for (var i = 0; i<fruits.length;i++){
//     document.write(fruits[i] + "<br>");
// }
// for of loop 
// for (let fruit of fruits) {
//     document.write(fruit + "<br>");
// }
// for each loop
// fruits.forEach(function(fruit){
//     document.write(fruit + "<br>")
// })

//!objects 
// let obj = {
//     name: 'sdf',
//     age: 20,
//     country:'india'
// }
// // document.write(obj.age)
// // for in loop
// for (let key in obj) {
//     document.write(key + " : " + obj[key] + "<br>")
// }


// function
// let a  = 10
// let b  = 20
// document.write(a+b)

// // function with arguments
// function sum (a,b){
//     return a+b
// }
// document.write(sum(10,20))
// // function without argument
// function sum(){
//     return 10+20
// }
// // document.write(sum())
// dunction without return and argument
// function a(){
//     document.write('hello')
// }
// a()

// immideatly invoked function
// (function (){
//     document.write('hello')
// })()

// arrow function
// let sum = (a,b)=> a+b
// document.write(sum(10,20))
// let sum1 = (a,b) =>{
//     return a+b
// }
// document.write(sum1(10,20))

// let buttons = document.getElementsByClassName('class');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function() {
//     document.write("<br>",'Button clicked!');
//   });
// }


// function in js
// let a = 10
// let b = 20
// document.write(a+b)

// function sum (a,b){
//     return a+b
// }
// document.write(sum(10,20))
// // function without argument
// function sum(){
//     return 10+20
// }
// document.write(sum())
// function without return and argument
// function a(){
//     document.write('hello')
// }
// a()
// (function (){
//     document.write('hello')
// })()
// arrow function
// let sum = (a,b) => a+b
// document.write(sum(10,20))

// let sum1 = (a,b)=>{
//     return a+b
// }
// document.write(sum1(10,20))

//Dom
let classes = document.getElementsByClassName('class')
// adding event
// for (let i = 0; i<classes.length;i++){
//     setTimeout(function(){
//     document.write("<br>",'Button clicked!')
// }, 2000)
// }
// classes.addEventListener('click',function(){
//     document.write("<br>",'Button clicked!')
// })
// classes.setTimeout(function(){
//     document.write("<br>",'Button clicked!')
// },2000)

// inner html
// let classes = document.getElementsByClassName('class')
// classes[0].innerHTML = 'Hello world'
classes[0].innerHTML = 'Hello world'
classes[0].innerHTML = 'Hello'