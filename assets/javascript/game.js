// global variables

// stats variables: hp var, attack points var, counter attack points var

// let char1 = ['Yoda', 'hp: 180 ', 'attack: 20 ', 'counterattack: 10'];
// let char2 = ['Obi Wan', 'hp: 150 ', 'attack: 20 ', 'counterattack: 10'];
// let char3 = ['Darth Sidious', 'hp: 170 ', 'attack: 20 ', 'counterattack: 10'];
// let char4 = ['Darth Vader', 'hp: 130 ', 'attack: 20 ', 'counterattack: 10'];
let char1 = {
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
};
// function to set game board
//set intial stats (hp points)

// vanilla javascript
document.querySelector('#c1name').innerHTML = char1.charName;
document.querySelector('#c1Hp').innerHTML = 'HP: ' + char1.hp;
document.querySelector('#c1Attack').innerHTML = 'Attack: ' + char1.attack;

document.querySelector('#c2name').textContent = char2.charName;
document.querySelector('#c2Hp').textContent = 'HP: ' + char2.hp;
document.querySelector('#c2Attack').textContent = 'Attack: ' + char2.attack;

document.querySelector('#c3name').textContent = char3.charName;
document.querySelector('#c3Hp').textContent = 'HP: ' + char3.hp;
document.querySelector('#c3Attack').textContent = 'Attack: ' + char3.attack;

document.querySelector('#c4name').textContent = char4.charName;
document.querySelector('#c4Hp').textContent = 'HP: ' + char4.hp;
document.querySelector('#c4Attack').textContent = 'Attack: ' + char4.attack;

// move character images in correct divs

chooseCharacter().then((charData) => {
	return setOpponents(charData);
}).then((charData) => {
	return setDefender(charData);
}).then((charData) => {
	return attack(charData);
}).
catch(setError);

// function to assign initial attack points for character selected and consistent counter attack points
// if character chosen, assign initial attack points, else assign counterattack points

// chooseCharacter function that chooses main character
function chooseCharacter() {
	return new Promise((success, failure) => {
		console.log('chooseChar', document.querySelectorAll('.character'));
		let character = document.querySelectorAll('.character');
		let mainChar;
		console.log(character);
		character.forEach((char) => {
			char.addEventListener('click', (event) => {
				mainChar = event.target.offsetParent;
				console.log('>>>', mainChar)
				document.querySelector('.your-character').appendChild(mainChar).classList.add('main-char');
				mainChar.classList.remove('character');
				success(mainChar);

			});
		}, this);

		console.log('>', mainChar);
	});
}

// setOpponents function that moves all other characters to the opponents section
function setOpponents(charData) {
	console.log('chardata 1', charData);
	console.log('something');
	let opponents = document.querySelectorAll('.character');
	console.log(opponents);
	for (i = 0; i < opponents.length; i++) {
		document.querySelector('.opponent-container').appendChild(opponents[i]).classList.add('opponent');
		opponents[i].classList.remove('character');
	}

	return charData;
}

// setDefender function to choose the character that main character will attack
function setDefender(charData) {
	// select any of the opponents as a defender	
	console.log('chardata 2', charData)
	console.log('opps', document.querySelectorAll('.opponent'));
	let defender = document.querySelectorAll('.opponent');
	console.log('def', defender);
	let mainDef;
	for (i = 0; i < defender.length; i++) {
		defender[i].addEventListener('click', (event) => {
			mainDef = event.target.offsetParent;
			console.log('mainD', mainDef)
			document.querySelector('.defender-container').appendChild(mainDef).classList.add('main-def');
			mainDef.classList.remove('opponent');
		});
	}

	return charData;
}

// error handler
function setError() {
	console.log('There was an error setting the game board.');
}

function attack(charData) {
	// var char1Hp = char1.hp;
	let char1Hp = char1.hp;
	let defendingChar;


	document.querySelector('#attack').addEventListener('click', (event) => {
		let defender = document.querySelector('.main-def');
		let mainCharacter = document.querySelector('.main-char');
		console.log('data from chooseChar', charData);
		console.log('defender', defender);
		console.log('def id', defender.id);
		console.log('click');
	});
	/*$('#attack').click(function (event) {
		for (var i = 0; i < char1Hp; i++) {
			Things[i]
		}
	});*/
}