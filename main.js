console.log("That's real smooth Shrek");

let display =document.getElementById('display')

 let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
  button.addEventListener('click', (e) => {
  switch(e.target.innertext){
    default:
      
      display.innertext += e.target.innertext;
  }
  });
});
