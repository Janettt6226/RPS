console.log("coucou");

const buttons = document.querySelectorAll("button");
let playerSelection;
// const rock = document.querySelector('#rock');

// rock.addEventListener("click", function() {
//   console.log(rock.value);
// });
buttons.forEach(button =>{
  button.addEventListener('click', function(){
    console.log(this.value);
  })
  playerSelection = this.value;
  return playerSelection;
})
