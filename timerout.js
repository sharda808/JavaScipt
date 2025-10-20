(() => {
    let counter = 0;
    let increment = (head) => console.log(head,++counter);

   console.log('start'); 
increment('first');
let response = setTimeout (()=> increment('timer'), 5000);
console.log('response',response);
 setTimeout(() => {clearTimeout(response)}, 1000);
let intervalid = setInterval(() => increment('interval'),2000);
setTimeout(()=>{clearInterval(intervalid)},10000);
console.log('end');
})();