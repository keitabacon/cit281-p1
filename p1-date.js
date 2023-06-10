/*
    CIT 281 Project 1
    Name: Keita Bacon
*/
//console.log(new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date()))

const dOW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today =  new Date();
const getDay = today.getDay();

console.log(dOW[getDay]);
