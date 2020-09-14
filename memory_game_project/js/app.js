

 let cards = ["fa fa-diamond", "fa fa-diamond",
 	 "fa fa-paper-plane-o", "fa fa-paper-plane-o",
 	  "fa fa-anchor", "fa fa-anchor",
 	   "fa fa-bolt", "fa fa-bolt", 
 	   "fa fa-cube", "fa fa-cube", 
 	   "fa fa-leaf", "fa fa-leaf", 
 	   "fa fa-bicycle", "fa fa-bicycle", 
 	   "fa fa-bomb", "fa fa-bomb"
 	];


openedCards = [];
matchedCards = [];

const deck = document.querySelector(".deck");
let movesCount = document.querySelector('.moves');
let reset = document.querySelector('.restart');
const eachCard = document.getElementsByClassName('card');

//create cards*********
//shuffle cards********
//Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    	var currentIndex = array.length, temporaryValue, randomIndex;

	    while (currentIndex !== 0) {
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;
	        temporaryValue = array[currentIndex];
	        array[currentIndex] = array[randomIndex];
	        array[randomIndex] = temporaryValue;
	    }

	    return array;
	}
 	cards = shuffle(cards);
	

	for(let i=0; i<cards.length; i++){
		const card = document.createElement('li');	//creates li
		card.classList.add('card');					//gives class 'card'
		card.innerHTML = `<i class = "${cards[i]}"></i>`; //gives html with icon
		deck.appendChild(card);				//adds card to deck

	//make cards clickable

		card.addEventListener('click', function(e){ 		//makes clickable
		card.classList.add('open', 'show');			//gives class open/show
		openedCard = document.getElementsByClassName('open', 'show');
		openedCards.push(this);
		let movesCount = 0;
		movesCount++;


	//compare open cards
	
		if((openedCards.length === 2)&&(this.innerHTML===openedCards[0].innerHTML)){

			console.log('match!');
			openedCards[0].classList.add('match');                                                                
			openedCards[1].classList.add('match');
			matchedCards.push(this);
			openedCards = [];
			

		} else if (this.innerHTML !== openedCards[0].innerHTML){
			
			console.log('no match');
			setTimeout(function(){
			openedCards[1].classList.remove('open','show');
			openedCards[0].classList.remove('open','show');
			openedCards=[];


			}, 500);
		};

		
		const gameOver = function(){
				alert('Game Over!');
				//need to add play again?, time, and star rating
			};

			setTimeout(function(){
		if(matchedCards.length===8){
			gameOver();
			
		};
		}, 300);

	});

};


//***********everything from here up works***************


//make reset button work
reset.addEventListener('click', function(e){
	console.log('clicking');
	eachCard.innerHTML="";

	});

		//timer===0;
		//stars ===3;

