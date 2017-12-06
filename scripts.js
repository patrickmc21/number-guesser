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

// functions run on page load

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
    console.log(randomNum);
    return randomNum;
}

function reset () {
    interactiveZone.style.visibility = 'hidden';
    max = 100
    min = 1
    backgroundRemove ('cold');
    backgroundRemove ('winner-guess');
    storeRandom();
    error.innerText = '';
    levelUp.style.visibility = 'hidden';
    guessDeclaration.visibility = 'hidden';
    clickGuess.addEventListener('click', contextCorrect);
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
                userInput.value = '';
                guessDeclaration.innerText = 'BOOM!';
                backgroundRemove ('cold');
                backgroundAdd ('winner-guess');
                levelUp.style.visibility = 'visible';
                levelUp.innerText = 'Start Level 2';
                levelUp.addEventListener('click', 
                    function(event){
                        event.preventDefault()
                    });    
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

// Level two start

function contextCorrectTwo (){
    var el = (isNaN(parseInt(userInput.value)));
    var error = document.getElementById('error')
    var visible = error.style.visibility = 'visible'
    var guessedNumber = parseInt(userInput.value);
    if (userInput.value  == '') {
        visible;
        error.innerText = 'Please insert a number between ' + min + ' and ' + max;
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
        error.innerText = 'Pick a number between ' 
        + min + ' and ' + max;    
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
            console.log(randomNum + ' random');
            console.log(guessedNumber + ' user input');
        };

function levelTwo (){
    max = 200
    min = 101
    randomNum = 0;
    console.log(randomNum + ' one');
    storeRandom();
    console.log(randomNum + ' two');
    // function(event){
    //     event.preventDefault();
    // };
    // randomNum = 0;
    clickGuess.addEventListener('click', contextCorrectTwo);
    clear ();
    interactiveZone.style.visibility = 'hidden';
    backgroundRemove ('winner-guess');
    levelUp.style.visibility = 'hidden';
    // storeRandom(200, 100);
    // console.log(randomNum);
    contextCorrectTwo ();
};





