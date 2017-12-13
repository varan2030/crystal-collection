var state = {
  guessNumber: null,
  totalNumber: 0,
  wins: 0,
  losses: 0,
  crystalValues: []
}

init();

function init() {
  state.guessNumber = getRandomArbitrary(19, 120);
  state.totalNumber = 0;  
  state.crystalValues = getRandomCrystalValues();
  resetClass();
  changeCrystalColor();
  updateScreen();
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomCrystalValues() {
  var values = [];
  for (i=0; i < 4; i++){
    values.push(getRandomArbitrary(1, 12));
  }
  return values;
}

// Process user guess
function processGuess(crystalPosition){
    addGuess(crystalPosition);
    checkWinOrLose();
    updateScreen(); 
}

function addGuess(crystalPosition){
    state.totalNumber = state.totalNumber + state.crystalValues[crystalPosition];   
}

function updateScreen() {
    $(".guessNumber").html(state.guessNumber);
    $(".totalNumber").html(state.totalNumber);
    $(".wins").html(state.wins);
    $(".losses").html(state.losses);
}

function checkWinOrLose(){
    if (state.guessNumber === state.totalNumber) {
        state.wins++;
        init();
    } else if (state.guessNumber < state.totalNumber) {
        state.losses++;
        init();
    }
} 

function resetClass(){
    $('img').removeClass();
}

function changeCrystalColor(){
    var randomCrystalColor = ["crystal1", "crystal2", "crystal3", "crystal4", "crystal5", "crystal6"];
    $("img").each(function(){
        $(this).addClass(randomCrystalColor.splice(~~(Math.random()*randomCrystalColor.length),1)[0] + " crystal");
    });
   
}

