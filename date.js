const newDate = new Date();
const year = newDate.getFullYear();
let month = newDate.getMonth();
const day = newDate.getDate();
if (month < 10){
    month = `0${month + 1}`;
} else {
  month + 1;
}
const myDate = `${year}-${month}-${day + 2}`;
const inputDate = document.getElementById('deliveryDate');
inputDate.min = myDate;
// console.log(inputDate);