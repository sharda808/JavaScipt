console.log("Hi sharda");
const obj = {
    name: "KGCoding",
    greet:function() {
        console.log(this.name);
    }
};
obj.greet();
let container = document.getElementById('container')
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
function handleClick() {
    console.log(this);
    this.style.color = 'white';
    this.style.backgroundColor = 'red';
}
container.addEventListener('click', handleClick);
  

button1.addEventListener('click',handleClick); 
button2.addEventListener('click',handleClick); 
button3.addEventListener('click',handleClick); 
