const firstWords=["kim","ping","moon","DXV","dim","pong","silo","xixl","zing","soom"];
const  secondWords =["molly","ster","hoxy","inator","tron","saurus","zilla","max","matic","scope"];

const randomNumber1 = Math.floor(Math.random() * firstWords.length);
const randomNumber2 = Math.floor(Math.random() * secondWords.length);






const startupName=  firstWords[randomNumber1] +' '+ secondWords[randomNumber2];
let nameLength = startupName.length;
console.log(`The startup : "${startupName}",contains ${nameLength} characters` )