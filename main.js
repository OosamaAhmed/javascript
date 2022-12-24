// let arr =['ali','ahmed','mohamed','seed'];
// console.log(arr.join(' ++ '))

// let x= 'ahmed  '
// let y= 'ahmed'
// console.log(x.length)
// console.log(x.trim().length)

// document.write('read','update')

// nested loop
// let cars = ["bmw", "honda", "kia"];
// let model = [2020, 2022, 2018];

// for (let x = 0; x < cars.length; x++) {
//   console.log(" car : " + cars[x]);
//   for (let y = 0; y < model.length; y++) {
//     console.log("model : " + model[y]);
//   }
//   console.log("--------------------------");
// }

// containue & break

// let arr = [1,"1", "honda", "kia", 2, 3, 8, 6, 4];

// for (let i = 0; i < arr.length; i++) {

//   if (arr[i]== 'kia') {
//     break;
//   }
//   console.log(arr[i]);
// }

//while loop
// let my_name= 'ali'
// function name1(  my_name){
//     console.log( "name is : " + my_name )
// }name1(my_name)
// function days(age){
//     let result = age * 365
//   console.log(result)
//     // return result;
// }
// days(24)

//hoisting
// console.log(x)

//  let x = 10
// hello()
// function hello (){
//     console.log("hello")
// }

// let hello = function  (){
//     console.log("hello")
// }

// hello()

// for in

// let  object= {name1:'osama',2:'d',3:'o',4:'k'};
// for (x in object)
// {
//  document.write(x);
//  document.write("<br />");
// }
// document.write ("Exiting from the loop!");

// bom

// let html = document.getElementById("myP").innerHTML;
// document.getElementById("demo").innerHTML ;
// window.innerHeight()
// let myWindow;
// let mytime;
// function openw(){
// myWindow = window.open("", "", "width=400,height=100");
// }
// function closew(){
//     myWindow.close();
// }

// function resizew(){
//     myWindow.resizeBy(500,300)
//     myWindow.focus();
// }

// function myTimeOut(){
// mytime=setTimeout(()=> {
//     alert('osama')
// }, 5000);
// }

// function myTimeOut(){
// mytime=setInterval(()=> {
//     alert('osama')
// }, 1000);
// }

// function clearMyTimeOut(){
//    window.clearInterval(mytime);
// }

// function scrolldown()
// {
//     scrollBy(0,100)
// }

// function scrollup()
// {
//     scrollBy(0,-100)
// }

// let count=0
// let stop;
// function startcount(){
//  stop = setInterval(function() {
//   document.getElementById('txt').value=count ;
//   count ++;
// }, 1000);
//     }

// function stopcount(){
//     clearInterval(stop)
// }

// function fun1(){

//  setTimeout(function(){

// alert('text after 3 sec')

// },3000)
// document.getElementById('txt').value='osama ahmed';

// }

// function geo() {
//   let x = navigator.geolocation.coords.longitude;;
//   console.log(x);
// }

// object

// let ob = {
// fname:'osama',
// lname:'ahmed',
// userEmail :'osama@gmail.com',
// phonenumber : {
//   first : '01066000903',
//   secendnumber : "0123456789"
// },
//  age : 23 ,
//  arr:[1,3,5,6,7,,'kasl']
// }

// console.log(ob.phonenumber.first)

// let obj = {

// }

// obj.name='osama'

// console.log(obj.name)

// this

// let obj ={
//    name:'osama',

//    getName : function(){
//     return this.name
//    }
// }
// console.log(obj.getName())

// let x = this  // in this location this return window
// console.log(x)

// ()=> {

// }

// let x = {
//   name : function(){
//     console.log(this)
//   }
// }
// x.name()

// document.getElementById('test').innerHTML = 'test h1'

// let x = (document.getElementsByClassName("test")[1].style.color = "red");
// // let y = (document.getElementsByTagName("h1")[0].style.color = "green");
// // document.getElementsByTagName("h1")[0].style.color = "green"

// document.querySelector('h1').style.color = "orange" // to return first elemint

// document.querySelectorAll('h1')[2].style.color = "green" // all element

// create element in js//////////////////////////////////////////////

// let x = document.createElement("div");
// let s = document.createElement("h1");
// let image = document.createElement("img");

// let content = document.createTextNode("hello world");
// x.appendChild(content)
// image.src ="image11.jpg"

// x.appendChild(s)
// x.appendChild(image)
// document.body.appendChild(x);

// let names = ['osama', 'ahmed', ' mohamed' , 'kareem', 'david']
// let ages = ['20','22','23','29','15']
// let container = document.createElement("div");
// document.body.appendChild(container);
// container.style.textAlign = "center"

// function myElement(name ,ages) {
//   let card = document.createElement("div");
//   card.style.width = " 200px"
//   let title = document.createElement("h3");
//   let age = document.createElement("p");
//   let images = document.createElement("img");
//   images.style.width = "100%"
// card.style.margin="3px"
// card.style.background="#187"
// card.style.color="white"
// card.style.display="inline-block"

// let head = document.createTextNode(name);
//   let myAge = document.createTextNode(ages)
//   images.src = "image11.jpg";

//   age.appendChild(myAge)
//   title.appendChild(head)

//   card.appendChild(title)
//   card.appendChild(age)
//   card.appendChild(images)

// container.appendChild(card)
// }

// for ( let i = 0 ; i< 5 ; i++)
// {
//     myElement(names[i] , ages[i])
// }

//   api in js

// last used
// fetch ("https://randomuser.me/api/")
// .then(function (respons){
// return respons.json()
// console.log(res pons)

// })
// .then(function (data){
//     console.log(data)
// })

//  modern used

async function get() {
  const response = await fetch("https://retoolapi.dev/4RxTa5/data");
  const data = await response.json();

  // console.log(data[0].name);
  // // document.querySelector("#content h1").innerHTML =data[2].name;
  // document.querySelector("#content img").src = data[2].images
  // document.querySelector("#content p").innerHTML = data[2].paragraph

  // data.map(function getmyData(myData) {
  //   document.querySelector("#content h1").innerHTML += `${myData.name} `;
  //   document.querySelector("#content img").src += `${myData.images}`;
  //   document.querySelector("#content p").innerHTML += `${myData.paragraph} `;
  //   // console.log(myData.name);
  // });

  data.forEach(elem =>  {

    document.querySelector("h1").innerHTML +=elem.name +'<br>';
    document.querySelector("img").src += elem.images
    document.querySelector("p").innerHTML += elem.paragraph
  

  });
}
get();
