let randomChoice;
    let computerChoiceText;
function assignRandomChoice(){
    randomChoice = Math.floor(Math.random()*3 + 1);
}
function computeComputerChoice(){
      if(randomChoice===1){
computerChoiceText = '👊 Rock';
    }
else if(randomChoice===2){
computerChoiceText = '✋paper';
    }
else if(randomChoice===3){
computerChoiceText = '✌️Scissors';
    }
}
function onrock(){
    assignRandomChoice();
  computeComputerChoice();

    let result;
if(computerChoiceText=='👊 Rock'){
    result = 'Tie';
}
else if(computerChoiceText=='✋paper'){
    result = 'I won';
}
else{
    result = 'You won';
}
   document.querySelector('#result').innerHTML = `You chose 👊 Rock.<br>
   I chose ${computerChoiceText}.<br>
And the result is:${result}`;

}
function onpaper(){
        assignRandomChoice();
    computeComputerChoice();
 
    let result;
if(computerChoiceText=='👊 Rock'){
    result = 'You won';
}
else if(computerChoiceText=='✋paper'){
    result = 'Tie';
}
else{
    result = 'I won';
}
   document.querySelector('#result').innerHTML = `You chose ✋paper .<br>
   I chose ${computerChoiceText}.<br>
And the result is:${result}`;

}
function onscissors(){
     assignRandomChoice();
   computeComputerChoice();
    let result;
if(computerChoiceText=='👊 Rock'){
    result = 'I won';
}
else if(computerChoiceText=='✋paper'){
    result = 'YOu won';
}
else{
    result = 'Tie';
}
   document.querySelector('#result').innerHTML = `You chose ✌️Scissors .<br>
   I chose ${computerChoiceText}.<br>
And the result is:${result}`;  
}