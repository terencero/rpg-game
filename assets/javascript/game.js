// global variables

// stats variables and image url (in object): hp var, attack points var, counter attack points var
var char1 = {name: "Yoda", hp: 180, attack: 20, counterattack: 10 };
var char2 = { name: "Obi Wan", hp: 150, attack: 20, counterattack: 10 };
var char3 = { name: "Darth Sidious", hp: 170, attack: 20, counterattack: 10 };
var char4 = { name: "Darth Vader", hp: 130, attack: 20, counterattack: 10 };

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
	$('#c1Stats').append(key + ':' + value);
	
});

$.each (char2, function(key, value){
	console.log(key + ':' + value);
	$('#c2Stats').append(key + ':' + value);
	
});

$.each (char3, function(key, value){
	console.log(key + ':' + value);
	$('#c3Stats').append(key + ':' + value);
	
});

$.each (char4, function(key, value){
	console.log(key + ':' + value);
	$('#c4Stats').append(key + ':' + value);
	
});



// function to move character images in correct divs
	// if character chosen, then move other characters to opponent container

// function to assign initial attack points for character selected and consistent counter attack points
	// if character chosen, assign initial attack points, else assign counterattack points
	function chooseCharacter() {
		$('.character').click(function(event){
			console.log('clicked');
			});
		$('#c1').click(function(event){
			console.log('clicked');
				$('#c1').appendTo('.image-container');
				$('#c2').appendTo('.opponent-container');
				$('#c3').appendTo('.opponent-container');
				$('#c4').appendTo('.opponent-container');
			});
		$('#c2').click(function(event){
			console.log('clicked');
				$('#c2').appendTo('.image-container');
				$('#c1').appendTo('.opponent-container');
				$('#c3').appendTo('.opponent-container');
				$('#c4').appendTo('.opponent-container');
			});
		$('#c3').click(function(event){
			console.log('clicked');
				$('#c3').appendTo('.image-container');
				$('#c2').appendTo('.opponent-container');
				$('#c1').appendTo('.opponent-container');
				$('#c4').appendTo('.opponent-container');
			});
		$('#c4').click(function(event){
			console.log('clicked');
				$('#c4').appendTo('.image-container');
				$('#c2').appendTo('.opponent-container');
				$('#c3').appendTo('.opponent-container');
				$('#c1').appendTo('.opponent-container');
			});
		}

	chooseCharacter();
		// function for game stats and progress
			// build in attack iterator to double after each attack i+2
			// build in counter attack iterator to attack with same points without incrementing
			// build in main character hp decrementer to carry over to subsequent rounds
			// build in opponent hp decrementer
		// function if defender defeated remove defender image from defender container			

// function to alert win or loose
	// if no more opponents, the alert a congratulations, else play again option


