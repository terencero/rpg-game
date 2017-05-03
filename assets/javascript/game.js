// global variables

// stats variables: hp var, attack points var, counter attack points var

let char1 = ['Yoda', 'hp: 180 ', 'attack: 20 ', 'counterattack: 10'];
let char2 = ['Obi Wan', 'hp: 150 ', 'attack: 20 ', 'counterattack: 10'];
let char3 = ['Darth Sidious', 'hp: 170 ', 'attack: 20 ', 'counterattack: 10'];
let char4 = ['Darth Vader', 'hp: 130 ', 'attack: 20 ', 'counterattack: 10'];
/*let char1 = {
	charName: 'Yoda',
	hp: '180',
	attack: '20',
	counterattack: '10'
};
let char2 = {
	charName: 'Obi Wan',
	hp: '150',
	attack: '20',
	counterattack: '10'
};
let char3 = {
	charName: 'Darth Sidious',
	hp: '170',
	attack: '20',
	counterattack: '10'
};
let char4 = {
	charName: 'Darth Vader',
	hp: '130',
	attack: '20',
	counterattack: '10'
};*/
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

chooseCharacter().then(() => {
	return setOpponents();
}).then(() => {
	return setDefender();
}).catch(setError);

// function to assign initial attack points for character selected and consistent counter attack points
// if character chosen, assign initial attack points, else assign counterattack points

// chooseCharacter function that chooses main character
function chooseCharacter() {
	console.log('chooseChar', document.querySelectorAll('.character'));
	let character = document.querySelectorAll('.character');
	let mainChar;
	console.log(character);
	return new Promise((success, failure) => {
		character.forEach((char) => {
			char.addEventListener('click', (event) => {
				mainChar = event.target.offsetParent;
				console.log('>>>', mainChar)
				document.querySelector('.your-character').appendChild(mainChar).classList.add('main-char');
				mainChar.classList.remove('character');
				success();
			});
		}, this);

		console.log('>', mainChar);
	});
}

// setOpponents function that moves all other characters to the opponents section
function setOpponents() {
	console.log('something');
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

// setDefender function to choose the character that main character will attack
function setDefender() {
	// promise to select any of the opponents as a defender	
	console.log('opps', document.querySelectorAll('.opponent'));
	let defender = document.querySelectorAll('.opponent');
	console.log('def', defender);
	let mainDef;
	return new Promise((success, failure) => {
		for (i = 0; i < defender.length; i++) {
			defender[i].addEventListener('click', (event) => {
				mainDef = event.target.offsetParent;
				console.log('mainD', mainDef)
				document.querySelector('.defender-container').appendChild(mainDef).classList.add('main-def');
				mainDef.classList.remove('opponent');
			});
		}
		success();
	});
}

// error handler
function setError() {
	console.log('There was an error setting the game board.');
}

function attack() {
	var char1Hp = char1[1];
	document.querySelector('#attack').addEventListener('click', (event) => {
		let defender = document.querySelector('.main-def');
		let mainCharacter = document.querySelector('.main-char');

		console.log('defender',defender);
		console.log('click');
	});
	/*$('#attack').click(function (event) {
		for (var i = 0; i < char1Hp; i++) {
			Things[i]
		}
	});*/
}
attack();