// global variables

// stats variables: hp var, attack points var, counter attack points var

var char1 = ['Yoda', 'hp: 180 ', 'attack: 20 ', 'counterattack: 10'];
var char2 = ['Obi Wan', 'hp: 150 ', 'attack: 20 ', 'counterattack: 10'];
var char3 = ['Darth Sidious', 'hp: 170 ', 'attack: 20 ', 'counterattack: 10'];
var char4 = ['Darth Vader', 'hp: 130 ', 'attack: 20 ', 'counterattack: 10'];



// function to set game board
	//set intial stats (hp points)


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

// move character images in correct divs
	// if character chosen, then move other characters to opponent container

// function to assign initial attack points for character selected and consistent counter attack points
	// if character chosen, assign initial attack points, else assign counterattack points
	function chooseCharacter() {
		$('.character').click(function(event){
 			console.log('clicked');
			});	

			$('.character').click(function(event){ 
				console.log('clicked1');

				$(this).appendTo('.your-character').attr('class', 'main-char');
				$('.character').appendTo('.opponent-container').attr('class', 'opponent');
				
					// second click event nested in first click even works...				
					$('.opponent').click(function(event){ 
					console.log('defender clicked');
		 			$(this).appendTo('.defender-container').attr('class', 'defender');
	 				$('.character').appendTo('.opponent-container').attr('class', 'opponent');		
					
					}); // end of .opponent click event

				}); // end of .character click event

		} // end of chooseCharacter function

	chooseCharacter();  // call the function

	function attach() {
		
	}

