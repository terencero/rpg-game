// global variables

// stats variables: hp var, attack points var, counter attack points var

let char1 = ['Yoda', 'hp: 180 ', 'attack: 20 ', 'counterattack: 10'];
let char2 = ['Obi Wan', 'hp: 150 ', 'attack: 20 ', 'counterattack: 10'];
let char3 = ['Darth Sidious', 'hp: 170 ', 'attack: 20 ', 'counterattack: 10'];
let char4 = ['Darth Vader', 'hp: 130 ', 'attack: 20 ', 'counterattack: 10'];



// function to set game board
//set intial stats (hp points)

// vanilla javascript
document.querySelector('#c1name').textContent = char1[0];
document.querySelector('#c1Stats').textContent = char1[1];
document.querySelector('#c1Stats').textContent = char1[2];

document.querySelector('#c2name').textContent = char2[0];
document.querySelector('#c2Stats').textContent = char2[1];
document.querySelector('#c2Stats').textContent = char2[2];

document.querySelector('#c3name').textContent = char3[0];
document.querySelector('#c3Stats').textContent = char3[1];
document.querySelector('#c3Stats').textContent = char3[2];

document.querySelector('#c4name').textContent = char4[0];
document.querySelector('#c4Stats').textContent = char4[1];
document.querySelector('#c4Stats').textContent = char4[2];

// move character images in correct divs

let promise = chooseCharacter().then((result) => {
	return setOpponents();
}).then((result) => {
	return setDefender();
}).catch(setError);

// function to assign initial attack points for character selected and consistent counter attack points
// if character chosen, assign initial attack points, else assign counterattack points
function chooseCharacter() {
	return new Promise((success, failure) => {
		let character = document.querySelectorAll('.character');
		let mainChar;
		for (i = 0; i < character.length; i++) {
			character[i].addEventListener('click', (event) => {
				mainChar = event.target.offsetParent;
				console.log('>>>', mainChar)
				document.querySelector('.your-character').appendChild(mainChar).classList.add('main-char');
				mainChar.classList.remove('character');
				success(success);
			});
		}
		// return document.querySelectorAll('.character');
		console.log('>', mainChar);


	}); // end of chooseCharacter function
}

function setOpponents() {
	return new Promise((success, failure) => {
		let opponents = document.querySelectorAll('.character');
		console.log(opponents);
		for (i = 0; i < opponents.length; i++) {
			document.querySelector('.opponent-container').appendChild(opponents[i]).classList.add('opponent');
			opponents[i].classList.remove('character');
		}
		success();
	});
}
// setOpponents();

function setDefender() {
	// promise to select any of the opponents as a defender	
	return new Promise((success, failure) => {			
	document.querySelector('.opponent').addEventListener('click', (event) => {
		console.log('defender clicked');
		let defenderChar = event.target.offsetParent;

		defenderChar.classList.remove('opponent');
		document.querySelector('.defender-container').appendChild(defenderChar).classList.add('defender');

		// end of .opponent click event

	}); // end of .character click event
	})
}
// setDefender();

// error handler
function setError() {
	console.log('There was an error setting the game board.');
}

function attack() {
	var char1Hp = char1[1];
	$('#attack').click(function (event) {
		for (var i = 0; i < char1Hp; i++) {
			Things[i]
		}
	});
}