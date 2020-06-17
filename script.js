'use strict';

let arrayDay = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let arrayMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августф', 'сентября', 'октября', 'ноября', 'декабря'];
let arrayHours = ['час', 'часа', 'часов'];
let arrayMinutes = ['минута', 'минуты', 'минут'];
let arraySeconds = ['секунда', 'секунды', 'секунд'];
let dateA = document.querySelector('.date-a');
let dateB = document.querySelector('.date-b');

setInterval(function () {
  let date = new Date();
  let day = date.getDay();
  let dateNumber = date.getDate();
  let dayWeek = arrayDay[day - 1];
  let month = date.getMonth();
  let dateMonth = arrayMonth[month];
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  dayWeek = dayWeek[0].toUpperCase() + dayWeek.slice(1);

  dateA.innerHTML = 'Сегодня ' + dayWeek + ', ' + dateNumber + ' ' + dateMonth + ' ' + year + ' года, '
    + hours + ' ' + formatDate(hours, arrayHours) + ' ' +
    +minutes + ' ' + formatDate(minutes, arrayMinutes) + ' ' +
    +seconds + ' ' + formatDate(seconds, arraySeconds);

  dateB.innerHTML = dateNumber + '.' + formatNumber(month + 1) + '.' + year
    + ' - ' + formatNumber(hours) + ':' + formatNumber(minutes) + ':' + formatNumber(seconds);
}, 1000);

//a
function formatDate(num, arr) {
  let num1 = num % 10;

  if (num > 10 && num < 20) return arr[2];
  if (num1 > 1 && num1 < 5) return arr[1];
  if (num1 === 1) return arr[0];
  return arr[2];
}

//б
function formatNumber(num) {
  if (num < 10) return '0' + num;
  return num;
}