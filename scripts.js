//  declare global variables

var clickGuess = document.getElementById('guess');
var clickClear = document.getElementById('clear');
var clickReset = document.getElementById('reset');
var userSelection = document.getElementById('user-guess');
var userInput = document.getElementById('num');
var guessDeclaration = document.getElementById('hot-cold');
var interactiveZone = document.getElementById('user-input');
var randomNum = 0;
var clickRandom = document.getElementById('generate-random');
var form = document.querySelector('form');
var levelUp = document.getElementById('level-start');

// functions run on page load

storeRandom (100, 0);
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

function storeRandom (x,y) {
    randomNum = (Math.floor(Math.random()  * (x-y)) + y);
    console.log(randomNum);
    return randomNum;
}

function reset () {
    interactiveZone.style.visibility = 'hidden';
    backgroundRemove ('cold');
    backgroundRemove ('winner-guess');
    storeRandom(100,0);
    levelUp.style.visibility = 'hidden';
    disableButton();
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

function logic (){
            var guessedNumber = parseInt(userInput.value);          
            if (guessedNumber == randomNum) {
                guessDeclaration.innerText = 'BOOM!';
                backgroundRemove ('cold');
                backgroundAdd ('winner-guess');
                levelUp.style.visibility = 'visible';
                levelUp.innerText = 'Start Level 2';
                levelUp.addEventListener('click', levelTwo);
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

function contextCorrect (){
    var el = (isNaN (parseInt(userInput.value)));
    var error = document.getElementById('error')
    var visible = error.style.visibility = 'visible'
    var guessedNumber = parseInt(userInput.value);
    if (userInput.value  == '') {
        visible;
        error.innerText = 'Please insert a number'
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
    }else if (((guessedNumber < 0) || (guessedNumber > 100)) == true) {
        activeButton();
        visible;
        error.innerText = 'Pick a number between 0 and 100';    
    }else { 
        activeButton();
        error.style.visibility = 'hidden';
        console.log('proceed'); 
        activate();
        logic();           
    }
};

// Level two start

function contextCorrectTwo (){
    var el = (isNaN(parseInt(userInput.value)));
    var error = document.getElementById('error')
    var visible = error.style.visibility = 'visible'
    var guessedNumber = parseInt(userInput.value);
    if (userInput.value  == '') {
        visible;
        error.innerText = 'Please insert a number'
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
    }else if (((guessedNumber < -10) || (guessedNumber > 110)) == true) {
        activeButton();
        visible;
        error.innerText = 'Pick a number between -10 and 110';    
    }else { 
        activeButton();
        error.style.visibility = 'hidden';
        console.log('proceed'); 
        activate();
        logicTwo();           
    }
};

function logicTwo (){
            var guessedNumber = parseInt(userInput.value);          
            if (guessedNumber == randomNum) {
                guessDeclaration.innerText = 'BOOM!';
                backgroundRemove ('cold');
                backgroundAdd ('winner-guess');
                levelUp.style.visibility = 'visible';
                levelUp.innerText = 'Start Level 3';
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

function levelTwo (){
                    randomNum = 0;
                    interactiveZone.style.visibility = 'hidden';
                    backgroundRemove ('winner-guess');
                    levelUp.style.visibility = 'hidden';
                    storeRandom(200, 100);
                    console.log(randomNum);
                    contextCorrectTwo ();
                };





