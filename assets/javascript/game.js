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
			var userChoice1 = $('#c1').click(function(event){
				console.log('clicked1');
		
				$('#c1').appendTo('.image-container');
				$('#c2').appendTo('.opponent-container').attr('id', 'defender2');
 				$('#c3').appendTo('.opponent-container').attr('id', 'defender3');
 				$('#c4').appendTo('.opponent-container').attr('id', 'defender4');
 				

 				});
					
			var userChoice2 = $('#c2').click(function(event){
				console.log('clicked2');
			
				$('#c2').appendTo('.image-container');
				$('#c1').appendTo('.opponent-container').attr('id', 'defender1');
				$('#c3').appendTo('.opponent-container').attr('id', 'defender3');
 				$('#c4').appendTo('.opponent-container').attr('id', 'defender4');
 				});

			var userChoice3 = $('#c3').click(function(event){
				console.log('clicked3');
			
				$('#c3').appendTo('.image-container');
				$('#c1').appendTo('.opponent-container').attr('id', 'defender1');
				$('#c2').appendTo('.opponent-container').attr('id', 'defender2');
 				$('#c4').appendTo('.opponent-container').attr('id', 'defender4');
 				});

			var userChoice4 = $('#c4').click(function(event){
				console.log('clicked4'); 
	
				$('#c4').appendTo('.image-container');
				$('#c1').appendTo('.opponent-container').attr('id', 'defender1');
 				$('#c2').appendTo('.opponent-container').attr('id', 'defender2');
				$('#c3').appendTo('.opponent-container').attr('id', 'defender3');

				});

		}

chooseCharacter();
// 
