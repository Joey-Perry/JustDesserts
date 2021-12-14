const newDate = new Date();
// console.log(newDate);
const year = newDate.getFullYear();
let month = newDate.getMonth();
// console.log(month);
const day = newDate.getDate();
let newMonth = 0;
if (month < 10){
    newMonth = `0${month + 1}`;
} else {
  newMonth = month + 1;
}
const myDate = `${year}-${newMonth}-${day + 2}`;
// console.log(myDate);
const inputDate = document.getElementById('deliveryDate');
inputDate.min = myDate;
// console.log(inputDate);