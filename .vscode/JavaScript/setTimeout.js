 ( () => {
  let increment = () => console.log(++counter);
console.log('Start');
let counter =0;
increment();

let response = setTimeout(increment, 5000);
console.log('response', response);
setTimeout(() => {clearTimeout(response)},1000);
let intervalId = setInterval(() => increment('interval'),1000);
setTimeout(() => {clearInterval(intervalId)},10000)
console.log('End');
})()
