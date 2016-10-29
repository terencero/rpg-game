// global variables

// stats variables: hp var, attack points var, counter attack points var
//var char1 = { name: "Yoda", hp: 180, attack: 20, counterattack: 10 };
var char1 = ['Yoda', 'hp: 180 ', 'attack: 20 ', 'counterattack: 10'];
var char2 = ['Obi Wan', 'hp: 150 ', 'attack: 20 ', 'counterattack: 10'];
var char3 = ['Darth Sidious', 'hp: 170 ', 'attack: 20 ', 'counterattack: 10'];
var char4 = ['Darth Vader', 'hp: 130 ', 'attack: 20 ', 'counterattack: 10'];


// image divs on html
// character selection (will hold "your character image") div
// opponent container div
// defender character div

// function to set game board
	//set intial stats (hp points)

// $.each (char1, function(key, value){
// 	console.log(key + ':' + value);
// 	$('#c1Stats').append(key + ':' + value);
	
// });
$('#c1name').append(char1[0]);
$('#c1Stats').append(char1[1]);
$('#c1Stats').append(char1[2]);


$('#c2name').append(char2[0]);
$('#c2Stats').append(char2[1]);
$('#c2Stats').append(char2[2]);

$('#c3name').append(char3[0]);
$('#c3Stats').append(char3[1]);
$('#c3Stats').append(char3[2]);

$('#c4name').append(char4[0]);
$('#c4Stats').append(char4[1]);
$('#c4Stats').append(char4[2]);




// function to move character images in correct divs
	// if character chosen, then move other characters to opponent container

// function to assign initial attack points for character selected and consistent counter attack points
	// if character chosen, assign initial attack points, else assign counterattack points
	
		$('#c1').appendTo('.image-container');
		$('#c2').appendTo('.image-container');
		$('#c3').appendTo('.image-container');
		$('#c4').appendTo('.image-container');		

		var userChoice1 = $('#c1').click(function(event){
			console.log('clicked1');
				$('#c1').appendTo('.image-container');
				$('#c2').appendTo('.opponent-container').attr('id', 'defender2');
 				$('#c3').appendTo('.opponent-container').attr('id', 'defender3');
 				$('#c4').appendTo('.opponent-container').attr('id', 'defender4');
					// $(userChoice2).click(function(event){
 				// 		$('#defender2').appendTo('.defender-container');
 				// 		console.log('clicked char2');
 				// });
					if (userChoice2) {
						$('#defender2').appendTo('.defender-container');
 						console.log('clicked char2');
					}
			});
		var userChoice2 = $('#c2').click(function(event){
			console.log('clicked2');
				// $('#c2').appendTo('.image-container');
				// $('#c1').appendTo('.opponent-container');
				// $('#c3').appendTo('.opponent-container');
				// $('#c4').appendTo('.opponent-container');
			});
			
		var userChoice3 = $('#c3').click(function(event){
			console.log('clicked3');
				// $('#c3').appendTo('.image-container');
				// $('#c2').appendTo('.opponent-container')
				// $('#c1').appendTo('.opponent-container')
				// $('#c4').appendTo('.opponent-container')
			});
		var userChoice4 = $('#c4').click(function(event){
			console.log('clicked4');
				// $('#c4').appendTo('.image-container');
				// $('#c2').appendTo('.opponent-container')
				// $('#c3').appendTo('.opponent-container')
				// $('#c1').appendTo('.opponent-container')
			});

// function chooseCharacter() {
// 		$('.character').click(function(event){
// 			console.log('clicked');
// 			});

// 		if (userChoice1) {
// 				$('#c1').appendTo('.image-container');
// 				$('#c2').appendTo('.opponent-container').attr('id', 'defender2');
// 				$('#c3').appendTo('.opponent-container').attr('id', 'defender3');
// 				$('#c4').appendTo('.opponent-container').attr('id', 'defender4');
// 				$('.defender').click(function(event){
// 					$('.defender2').appendTo('.defender-container');
// 					console.log('clicked char2');
// 				});
// 			} else if (userChoice2) {

// 				$('#c2').appendTo('.image-container');
// 				$('#c1').appendTo('.opponent-container').attr('id', 'defender1');
// 				$('#c3').appendTo('.opponent-container').attr('id', 'defender3');
// 				$('#c4').appendTo('.opponent-container').attr('id', 'defender4');
// 				$('.defender').click(function(event){
// 					$('.defender1').appendTo('.defender-container');
// 					console.log('clicked char1');
// 				});
// 			} else if (userChoice3) {

// 				$('#c2').appendTo('.image-container');
// 				$('#c1').appendTo('.opponent-container').attr('id', 'defender1');
// 				$('#c3').appendTo('.opponent-container').attr('id', 'defender3');
// 				$('#c4').appendTo('.opponent-container').attr('id', 'defender4');
// 				$('.defender').click(function(event){
// 					$('.defender1').appendTo('.defender-container');
// 					console.log('clicked char1');
// 				});
// 			} else if (userChoice4) {

// 				$('#c2').appendTo('.image-container');
// 				$('#c1').appendTo('.opponent-container').attr('id', 'defender1');
// 				$('#c3').appendTo('.opponent-container').attr('id', 'defender3');
// 				$('#c4').appendTo('.opponent-container').attr('id', 'defender4');
// 				$('.defender').click(function(event){
// 					$('.defender1').appendTo('.defender-container');
// 					console.log('clicked char1');
// 				});
// 			}
// 		// if (userChoice1) {
// 		// 	$('#attack').click(function(event){
// 		// 		char1.attack+2
// 		// 	})
			
// 		// }
		
		

			
			

// 		}

// 	chooseCharacter();
		// function for game stats and progress

			// build in attack iterator to double after each attack i+2
			// build in counter attack iterator to attack with same points without incrementing
			// build in main character hp decrementer to carry over to subsequent rounds
			// build in opponent hp decrementer
		// function if defender defeated remove defender image from defender container			

// function to alert win or loose
	// if no more opponents, the alert a congratulations, else play again option


