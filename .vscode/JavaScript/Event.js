console.log('I am inside');
let clickHandler = () => {
  console.log('Button clicked');
}
let buttonClickHandler = () => {
  for(let i=0; i<5; i++) {
    console.log(i);
  }
}
let button = document.getElementById('myButton');

// button.onclick = buttonClickHandler;
// button.onclick = clickHandler;
// button.addEventListener('click', clickHandler);
button.addEventListener('click',buttonClickHandler);
button.removeEventListener('click',clickHandler);
button.removeEventListener('click', buttonClickHandler);
