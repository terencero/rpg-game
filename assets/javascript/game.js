// global variables
// stats keys: hp, attack points, counter attack points

let char1 = {
	charName: 'Yoda',
	hp: 180,
	attack: 20,
	counterattack: 10
};
let char2 = {
	charName: 'Obi Wan',
	hp: 150,
	attack: 20,
	counterattack: 10
};
let char3 = {
	charName: 'Darth Sidious',
	hp: 170,
	attack: 20,
	counterattack: 10
};
let char4 = {
	charName: 'Darth Vader',
	hp: 130,
	attack: 20,
	counterattack: 10
};

// function to set game board and initial stats
function setGameBoard() {
	return new Promise((success, failure) => {
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
		console.log('test stats', char2)
		success();
	});
}
// move character images in correct divs
setGameBoard().then(() => {
	return chooseCharacter();
}).then((charData) => {
	return setDefender(charData);
}).then((charData) => {
	return attack(charData);
}).catch(setError);


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

	}).then((charData) => {
		let opponents = document.querySelectorAll('.character');
		console.log(opponents);
		for (i = 0; i < opponents.length; i++) {
			document.querySelector('.opponent-container').appendChild(opponents[i]).classList.add('opponent');
			opponents[i].classList.remove('character');
		}
		return charData;
	})
}

// setDefender function to choose the character that main character will attack
function setDefender(charData) {
	// select any of the opponents as a defender	
	console.log('chardata 2', charData)
	// console.log('opps', document.querySelectorAll('.opponent'));
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

// function to handle the attack and score keeping
function attack(charData) {

	document.querySelector('#attack').addEventListener('click', (event) => {
		// variables to capture main (your) character and the defending characters through their class attributes
		let mainCharacter = document.querySelector('.main-char');
		let defenderCharacter = document.querySelector('.main-def');
		// store the data attribute of the main and defending characters into variables; data attributes share the same name as the character object names in global scope
		let mainChar = mainCharacter.dataset.objId;
		let defenderChar = defenderCharacter.dataset.objId;

		// conditionals to match up character data attr to their global object variables 
		if (mainChar === 'char1') {
			mainChar = char1;
		} else if (mainChar === 'char2') {
			mainChar = char2;
		} else if (mainChar === 'char3') {
			mainChar = char3;
		} else if (mainChar === 'char4') {
			mainChar = char4;
		}
		console.log('mainchar', mainChar);
		if (defenderChar === 'char1') {
			defenderChar = char1;
		} else if (defenderChar === 'char2') {
			defenderChar = char2;
		} else if (defenderChar === 'char3') {
			defenderChar = char3;
		} else if (defenderChar === 'char4') {
			defenderChar = char4;
		}
		console.log('defchar', defenderChar);
		defenderChar.hp = defenderChar.hp - mainChar.attack;
		console.log('>>>>>>', defenderChar.hp);
		setGameBoard();
	});
}

function reset() {

	document.querySelector('#reset').addEventListener('click', (event) => {
		char1 = {
			charName: 'Yoda',
			hp: 180,
			attack: 20,
			counterattack: 10
		};
		char2 = {
			charName: 'Obi Wan',
			hp: 150,
			attack: 20,
			counterattack: 10
		};
		char3 = {
			charName: 'Darth Sidious',
			hp: 170,
			attack: 20,
			counterattack: 10
		};
		char4 = {
			charName: 'Darth Vader',
			hp: 130,
			attack: 20,
			counterattack: 10
		};
		let resetPlayers = document.querySelectorAll('.players');
		let charContainer = document.querySelector('.character-container');
		for (i = 0; i < resetPlayers.length; i++) {
			charContainer.appendChild(resetPlayers[i]).classList.add('character');
			resetPlayers[i].classList.remove('main-char', 'opponent', 'main-def');
		}
		chooseCharacter();
	});

}
reset();