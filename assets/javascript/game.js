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

let defeatedCount = 0;

// move character images in correct divs
// function to assign initial attack points for character selected and consistent counter attack points
setGameBoard().then(() => {
	// promise - choose the main character then move other characters in opponents container
	return chooseCharacter();
}).then((charData) => {
	// choose the defending character
	// charData passes the main character attr and data
	return setDefender(charData);
}).then((charData) => {
	// attack function contains and calls counter attack function
	return attack();
}).catch(setError);

// ---------------------------------- function to set game board and initial stats ----------------------------------
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
		chooseCharacter();
		success();
	});
}

// ----------------------------- chooseCharacter function that chooses main character -----------------------------------
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
		});
	}).then((charData) => {
		let opponents = document.querySelectorAll('.character');
		console.log(opponents);
		for (i = 0; i < opponents.length; i++) {
			document.querySelector('.opponent-container').appendChild(opponents[i]).classList.add('opponent');
			opponents[i].classList.remove('character');
		}
		setDefender();
		return charData;
	});
}

// --------------------- setDefender function to choose the character that main character will attack --------------------
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
			mainDef.classList.remove('main-char');
		});
	}
	return charData;
}

// error handler
function setError() {
	console.log('There was an error setting the game board.');
}

// ----------------------------- function to handle the attack and score keeping --------------------------------------------------
function attack(charData) {

	document.querySelector('#attack').addEventListener('click', (event) => {
		// variables to capture main (your) character and the defending characters through their class attributes
		let mainCharacter = document.querySelector('.main-char');
		let defenderCharacter = document.querySelector('.main-def');
		// store the data attribute of the main and defending characters into variables; data attributes share the same name as the character object names in global scope
		let pickOpponentModal = document.querySelector('#pick-opponent-modal');
		let modalClose3;
		if (defenderCharacter === null) {
			// get the children of the defeated opponents modal
			let pickOpponentChildren = document.querySelector('#pick-opponent-modal').children;
			// grab the first child, p tag, and replace with the below message; dynamically change the defeated character's name
			pickOpponentChildren[0].innerHTML = 'You must choose another opponent if you wish to continue to attack.' + '<span class="close3">&times;</span>';
			modalClose3 = document.querySelector('.close3');
			// document.querySelector('#defeat-modal-content').appendChild(modalElement);
			pickOpponentModal.style.display = 'block';
			modalClose3.onclick = () => {
				pickOpponentModal.style.display = 'none';
			};
		}
		// assign the main and defending character data attribute values to variables
		let mainChar = mainCharacter.dataset.objId;
		let defenderChar = defenderCharacter.dataset.objId;
		// select div container with class 'defeated-container'; store in variable 'defeated'
		let defeated = document.querySelector('.defeated-container');

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

		// calculate the attack damage
		defenderChar.hp = defenderChar.hp - mainChar.attack;
		// call the counterAttack function after each attack
		let counterAttack = function() {
			console.log('counterAttack func test', mainChar);
			mainChar.hp = mainChar.hp - defenderChar.counterattack
			let mainDefeatedModal = document.querySelector('#main-defeated-modal');
			let modalClose4;
			if (mainChar.hp <= 0) {
				// get the children of the defeated opponents modal
				let mainDefeatedChildren = mainDefeatedModal.children;
				// grab the first child, p tag, and replace with the below message; dynamically change the defeated character's name
				mainDefeatedChildren[0].innerHTML = 'Oh no! You\'ve been defeated ' + mainChar.charName + ' !' + '<span class="close4">&times;</span>';
				modalClose4 = document.querySelector('.close4');
				// document.querySelector('#defeat-modal-content').appendChild(modalElement);
				mainDefeatedModal.style.display = 'block';
				modalClose4.onclick = () => {
					mainDefeatedModal.style.display = 'none';
				};
			}
		}();

		console.log('>>>>>>', defenderChar.hp);
		// modal to indicate one oppoent has been defeated and to keep going
		let defeatOpponentModal = document.querySelector('#defeat-opponent-modal');
		let modalClose2;
		if (defenderChar.hp <= 0) {
			defeated.appendChild(defenderCharacter).classList.add('defeated');
			defenderCharacter.classList.remove('main-def');
			defeatedCount++;
			// get the children of the defeated opponents modal
			let defeatOpponentChildren = document.querySelector('#defeat-opponent-modal').children;
			// grab the first child, p tag, and replace with the below message; dynamically change the defeated character's name
			defeatOpponentChildren[0].innerHTML = 'Way to go! You just defeated ' + defenderChar.charName + '. Keep going! Use the force!' + 
			'<span class="close2">&times;</span>';
			modalClose2 = document.querySelector('.close2');
			// document.querySelector('#defeat-modal-content').appendChild(modalElement);
			defeatOpponentModal.style.display = 'block';
			modalClose2.onclick = () => {
				defeatOpponentModal.style.display = 'none';
			};
		}
		// winner's modal for defeating all characters
		let winnerModal = document.querySelector('#winner-modal');
		let modalClose = document.querySelector('.close');
		if (defeatedCount === 3) {
			winnerModal.style.display = 'block';
			modalClose.onclick = () => {
				winnerModal.style.display = 'none';
			}
		}

		// calls function to update the character stats after each click of the attack button
		setGameBoard();
	});
}

// -------------------------- function to reset the gameboard upon clicking the reset button ---------------------------------
function reset() {
	// when reset button is clicked, stats are reset and characters move back to "characters available" container
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
		defeatedCount = 0;
		let resetPlayers = document.querySelectorAll('.players');
		let charContainer = document.querySelector('.character-container');
		for (i = 0; i < resetPlayers.length; i++) {
			charContainer.appendChild(resetPlayers[i]).classList.add('character');
			resetPlayers[i].classList.remove('main-char', 'opponent', 'main-def');
		}
		// call the setGameBoard function to allow user to reset character stats and choose a new character
		setGameBoard();
	});
}
reset();