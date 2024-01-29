// Assignment 1 | COMP1073 Client-Side JavaScript

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
	button.addEventListener('click', function() {
		let altText = button.querySelector('img').alt;
		showSentence(altText);
		speakNow(altText);
	});
});

// function to display the sentence
function showSentence(altText) {
	document.querySelector('#sentence').textContent = altText;
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
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
