// global variables

// stats variables and image url (in object): hp var, attack points var, counter attack points var
var char1 = {name: "Yoda", image: src="#", hp: 150, attack: 20};
var char2 = { name: "Obi Wan", image: src="#", hp: 150, attack: 20 };
var char3 = { name: "Darth Sidious", image: src="#", hp: 150, attack: 20 };
var char4 = { name: "Darth Vader", image: src="#", hp: 150, attack: 20 };

// stats on html var
// hp
// attack
// counter attack


// character image variables
// img 1
// img 2
// img 3
// img 4

// image divs on html
// character selection (will hold "your character image") div
// opponent container div
// defender character div

// function to set game board
	//set intial stats (hp points)

$.each (char1, function(key, value){
	console.log(key + ':' + value);
	$('#c1').append(key + ':' + value);
	
});

$.each (char2, function(key, value){
	console.log(key + ':' + value);
	$('#c2').append(key + ':' + value);
	
});

$.each (char3, function(key, value){
	console.log(key + ':' + value);
	$('#c3').append(key + ':' + value);
	
});

$.each (char4, function(key, value){
	console.log(key + ':' + value);
	$('#c4').append(key + ':' + value);
	
});



// function to move character images in correct divs
	// if character chosen, then move other characters to opponent container

// function to assign initial attack points for character selected and consistent counter attack points
	// if character chosen, assign initial attack points, else assign counterattack points
		// function for game stats and progress
			// build in attack iterator to double after each attack i+2
			// build in counter attack iterator to attack with same points without incrementing
			// build in main character hp decrementer to carry over to subsequent rounds
			// build in opponent hp decrementer
		// function if defender defeated remove defender image from defender container			

// function to alert win or loose
	// if no more opponents, the alert a congratulations, else play again option


