// Assignment 1 | COMP1073 Client-Side JavaScript


// create arrays for each word type
const firstNounArray = ['The Turkey', 'Mom', 'Dad', 'The dog', 'My Teacher', 'The Elephant', 'The Cat'];
const verbArray = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
const adjectiveArray = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const secondNounArray = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const placeArray = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// create variables for each button
const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');
const btnFour = document.querySelector('#btnFour');
const btnFive = document.querySelector('#btnFive');
const btnRandom = document.querySelector('#randomBtn');
const btnReset = document.querySelector('#resetBtn');
const sentenceArray = ['', '', '', '', ''];

// add event listeners to each button
btnOne.addEventListener('click', function() {
	sentenceArray[0] = firstNounArray[randomNum()];
	showSentence();
});

btnTwo.addEventListener('click', function() {
	sentenceArray[1] = verbArray[randomNum()];
	showSentence();
});

btnThree.addEventListener('click', function() {
	sentenceArray[2] = adjectiveArray[randomNum()];
	showSentence();
});

btnFour.addEventListener('click', function() {
	sentenceArray[3] = secondNounArray[randomNum()];
	showSentence();
});

btnFive.addEventListener('click', function() {
	sentenceArray[4] = placeArray[randomNum()];
	showSentence();
});

btnRandom.addEventListener('click', function() {
	//generate a random value for every array
	sentenceArray[0] = firstNounArray[randomNum()];
	sentenceArray[1] = verbArray[randomNum()];
	sentenceArray[2] = adjectiveArray[randomNum()];
	sentenceArray[3] = secondNounArray[randomNum()];
	sentenceArray[4] = placeArray[randomNum()];
	showSentence();
});

btnReset.addEventListener('click', function() {
	sentenceArray.fill('');
	showSentence();
});

// function to generate a random number
function randomNum() {
	let randomNum = Math.floor(Math.random() * 5);
	console.log(randomNum);
	return randomNum;
}

// function to display the sentence
function showSentence() {
	let sentence = sentenceArray.join(' ');
	document.querySelector('#sentence').textContent = sentence;
	textToSpeak = sentence;
}

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '	';
var speakButton = document.querySelector('#playbackBtn');


/* Functions
-------------------------------------------------- */
function speakNow(string, rate) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Set speech rate
	utterThis.rate = rate;
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak, 0.75);
}
