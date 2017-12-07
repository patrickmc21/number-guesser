//  declare global variables

var max = 100
var min = 1
var clickGuess = document.getElementById('guess');
var clickClear = document.getElementById('clear');
var clickReset = document.getElementById('reset');
var userSelection = document.getElementById('user-guess');
var userInput = document.getElementById('num');
var guessDeclaration = document.getElementById('hot-cold');
var interactiveZone = document.getElementById('user-input');
var error = document.getElementById('error')
var randomNum = 0;
var clickRandom = document.getElementById('generate-random');
var form = document.querySelector('form');
var levelUp = document.getElementById('level-start');
var maxLevel = document.getElementById('final-level');
var userMin = document.getElementById('min');
var userMax = document.getElementById('max');
var levelCounter = 1
var currentLevel = 'Level ' + levelCounter;
var playground = document.querySelector('h2');

// functions run on page load

console.log(currentLevel);
storeRandom ();
disableButton();

// event listeners

num.addEventListener('keyup', function(){
    clickClear.disabled = false;
})

clickGuess.addEventListener('click', function(event){
    event.preventDefault()
});    
clickGuess.addEventListener('click', contextCorrect);
clickClear.addEventListener('click', clear);
clickReset.addEventListener('click', reset);

// functions

function backgroundAdd (x){
    form.classList.add(x);
};

function backgroundRemove (x){
    form.classList.remove(x);
};

function activeButton (){
    var activeClear = clickClear.disabled = false;
    var activeReset = clickReset.disabled = false;
};

function storeRandom () {
    randomNum = (Math.floor(Math.random()  * (max-min)) + min);
    console.log(randomNum + ' randomtake');
    return randomNum;
}

function reset () {
    interactiveZone.style.visibility = 'hidden';
    maxLevel.style.visibility = 'hidden';
    levelCounter = 1
    currentLevel = 'level ' + levelCounter;
    console.log(currentLevel);
    max = 100
    min = 1
    backgroundRemove ('cold');
    backgroundRemove ('winner-guess');
    storeRandom();
    error.innerText = '';
    levelUp.style.visibility = 'hidden';
    guessDeclaration.visibility = 'hidden';
    disableButton();
    levelUp.removeEventListener('click', levelTwo);
    levelUp.removeEventListener('click',levelThree);
    levelUp.removeEventListener('click',levelFour);
    levelUp.removeEventListener('click',finalLevel);
    playground.classList.remove('last-level');
    playground.innerText = '';
}

function clear (){
    userInput.value = '';
    clickClear.disabled = true;
    backgroundRemove ('cold');   
};

function disableButton (){        
if (userInput.value == '') {
    clickClear.disabled = true;
    clickReset.disabled = true;
};
}

function activate (){
            userSelection.innerText = userInput.value;
            interactiveZone.style.visibility = 'visible';
        };
function contextCorrect (){
    var el = (isNaN (parseInt(userInput.value)));
    // var error = document.getElementById('error')
    var visible = error.style.visibility = 'visible'
    var guessedNumber = parseInt(userInput.value);
    if (userInput.value  == '') {
        visible;
        error.innerText = 'Please insert a number';
    }else if (el) {   
        visible;
        error.innerText = userInput.value + ' is not a number';
        activeButton();
        console.log('true not a num');
    }else if (!guessedNumber % 1 !== 0) {
        console.log(guessedNumber % 1);
        activeButton ();
        visible;
        error.innerText = userInput.value + ' is not a whole number';   
    }else if (((guessedNumber < min) || (guessedNumber > max)) == true) {
        activeButton();
        visible;
        error.innerText = 'Pick a number between ' + min + ' and ' + max;    
    }else { 
        activeButton();
        error.style.visibility = 'hidden';
        console.log('proceed'); 
        activate();
        logic();           
    }
};

function logic (){
            var guessedNumber = parseInt(userInput.value);          
            if (guessedNumber == randomNum) {
                userInput.value = '';
                levelCounter = levelCounter + 1
                console.log(levelCounter + ' lc')
                currentLevel = 'level ' + levelCounter;
                guessDeclaration.innerText = 'BOOM!';
                backgroundRemove ('cold');
                backgroundAdd ('winner-guess');
                levelUp.style.visibility = 'visible';
                levelUp.innerText = 'Proceed to ' + currentLevel;
                levelUp.addEventListener('click', 
                    function(event){
                        event.preventDefault()
                    });    
                if (levelCounter === 2) {
                    levelUp.addEventListener('click', levelTwo);
                }else if (levelCounter === 3) {
                    levelUp.addEventListener('click', levelThree);
                }else if (levelCounter === 4) {
                    levelUp.addEventListener('click', levelFour);
                }else  if (levelCounter === 5) {
                    levelUp.addEventListener('click', finalLevel);
                }else {
                    levelUp.style.visibility = 'hidden';
                }
            }else if (guessedNumber > randomNum) {
                guessDeclaration.innerText = 'Your guess is too high';
                backgroundAdd ('cold');
            }else if (guessedNumber < randomNum) {
                guessDeclaration.innerText = 'Your guess is too low';
                backgroundAdd ('cold');
            }else {
                console.log('fail');
            }
            console.log(randomNum + ' rando');
            console.log(guessedNumber + ' user input');
        };

// Level two start

function levelTwo (){
    playground.classList.add('last-level');
    playground.innerText = 'Level 2';
    console.log(currentLevel);
    max = 200
    min = 1
    randomNum = 0;
    console.log(randomNum + ' one');
    storeRandom();
    console.log(randomNum + ' two');
    clear ();
    interactiveZone.style.visibility = 'hidden';
    backgroundRemove ('winner-guess');
    levelUp.style.visibility = 'hidden';
};

// Level Three

function levelThree (){
    playground.classList.add('last-level');
    playground.innerText = 'Level 3';
    console.log(currentLevel);
    max = 300
    min = 1
    randomNum = 0;
    console.log(randomNum + ' one');
    storeRandom();
    console.log(randomNum + ' two');
    clear ();
    interactiveZone.style.visibility = 'hidden';
    backgroundRemove ('winner-guess');
    levelUp.style.visibility = 'hidden';
};

function levelFour (){
    playground.classList.add('last-level');
    playground.innerText = 'Level 4';
    console.log(currentLevel);
    max = 400
    min = 1
    randomNum = 0;
    console.log(randomNum + ' one');
    storeRandom();
    console.log(randomNum + ' two');
    clear ();
    interactiveZone.style.visibility = 'hidden';
    backgroundRemove ('winner-guess');
    levelUp.style.visibility = 'hidden';
};

function finalLevel (){
    playground.classList.add('last-level');
    playground.innerText = 'Playground';
    maxLevel.style.visibility = 'visible';
    max = 0
    min = 0
    userMin.value = 0;
    userMax.value = 0;
    console.log (currentLevel); 
    randomNum = 0;
    console.log(randomNum + ' level 3 init');
    maxLevel.addEventListener('input', function(){
        max = parseInt(userMax.value);
        min = parseInt(userMin.value);
        storeRandom();
    })
    console.log(randomNum + ' level 3 rando');
    clear ();
    clickClear.addEventListener('click', function (){
        backgroundRemove('winner-guess');
        interactiveZone.style.visibility = 'hidden';
    });
    interactiveZone.style.visibility = 'hidden';
    backgroundRemove ('winner-guess');
    levelUp.style.visibility = 'hidden';
};

