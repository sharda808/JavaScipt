  function generateComputerChoice() {
        let randomNUmber = Math.random() * 3;
        if(randomNumber >0 && randomNumber <=1){
            return 'Bat';
        }
        else if(randomNumber>1 && randomNumber <=2){
            return 'Ball';
        }
            else{
                return 'Stump'
            }
        }
      function getResult(userMove, computerMove){
        if(userMove==='Bat'){
      if(computerMove === 'Ball'){
        return 'user won.';
      } 
       else if(computerMove==='Bat'){
        return `it is a Tie`;
       }  
       else if(computerMove==='Stump'){
        return 'computer has won';
       } 
    }
          else if(userMove==='Ball'){
      if(computerMove === 'Ball'){
        return `it is a tie`;
      } 
       else if(computerMove==='Bat'){
        return 'computer has won';
       }  
       else if(computerMove==='Stump'){
        return 'user has won';
       }
        }
        else{
           
      if(computerMove === 'Ball'){
        return 'computer has won.';
      } 
       else if(computerMove==='Bat'){
        return 'user won';
       }  
       else if(computerMove==='Stump'){
        return `It is a tie`;
       }
        }
      }
      function showResult(userMove,computerMove,result){
        alert(`You have chosen ${UserMove}. computer choice is $
            {computerMove} and ${result}`);
      }