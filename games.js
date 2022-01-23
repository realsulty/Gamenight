
// Game 1 : Your age IN days
function ageInDays(){
let BirthYear = prompt('what year you were born at?');
let ageInDayss = (2021 - BirthYear) * 365; // the equasion to find out the days
let h1 = document.createElement('h1'); //making the answer text on the dom
let textAnswer = document.createTextNode('You Are freaking '+ ageInDayss + ' Days old my friend!'); //giving the answe body
h1.setAttribute('id', 'ageInDays'); // giving the answe elemnt the id to attach the message
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1); //putting the answer as achild in the elemnt
}


function reset(){
    document.getElementById('ageInDays').remove(); // one quicl easy way to assign removing fun to the btn
}

// Game 2 : Generate money
function getDough() {
    let image = document.createElement('img'); //creating the img elemnt from nothiing
    let div = document.getElementById('money-box'); //getting an exiteing elemnt to put in the child inside
    image.src ="images/money-bag1.svg"; //getting image source
    div.appendChild(image); //adding the img to the div element you assigend it to
}


// Game 3 : Rock, paper, scissors
function RpsGame(YourChoice) { //the main function we attach to the buttons onclick

    let humanChoice, botChoice; //naming the variables we will have
    humanChoice = YourChoice.id;

    botChoice = numberToChoice(randToRpsInt()); //giving the bot choice a mathmaticall way to find randmor nmbr


    results = decideWinner(humanChoice, botChoice); // this is the numbers [0,1] || [1,0] || [0.5,0.5]
    console.log(results);

    message = finalMessage(results); //  {' message : 'You won', 'color': 'green'}
    console.log(message);

    rpsFrontEnd(YourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random()* 3); //the mathmatical way to find a random number (floor) is to make the number
}
 function numberToChoice(number){ //this function is to assgin the choosing pattern paring each choice with a number
     return ['rock','paper','scissors'][number];

 }
 function decideWinner(YourChoice, computerChoice){
     let rpsDatabase = {
         'rock': {'scissors':1 , 'rock':0.5, 'paper': 0},
         'paper': {'rock':1 , 'paper':0.5, 'scissors': 0},
         'scissors': {'paper':1 , 'scissors':0.5, 'rock': 0},
     };



     let yourScore = rpsDatabase[YourChoice][computerChoice];
     let computerScore = rpsDatabase[computerChoice][YourChoice];

     return [yourScore, computerScore];
 }


    function finalMessage([yourScore, computerScore]) {
        if (yourScore === 0) {
        return {'message':'You Lost', 'color': 'red'};
        } else if (yourScore === 0.5) {
            return {'message': 'You tied', 'color': 'yellow'};
        }
        else {
            return{'message': 'You won', 'color': 'green'};
        }
    }


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    let ImagesDatabase ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
        };


        //remove the images on click

       document.getElementById('rock').remove();
       document.getElementById('paper').remove();
       document.getElementById('scissors').remove();


       let humanDiv = document.createElement('div');
       let botDiv = document.createElement('div');
       let messageDiv = document.createElement('div');

        humanDiv.innerHTML ="<img src='" + ImagesDatabase[humanImageChoice] + "'height=200 width=150 style='box-shadow:-1px 2px 21px 5px rgba(30,0,255,0.5);'>"; //this is to diplay the pic ypu choose
        messageDiv.innerHTML ="<h1 style='color: "+ finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>";
        botDiv.innerHTML ="<img src='" + ImagesDatabase[botImageChoice] + "' style='box-shadow:-1px 2px 21px 5px rgba(50,0,110,0.5);'>"; //this is to diplay the pic ypu choose

        humanDiv.setAttribute('id','humanPick');
        messageDiv.setAttribute('id','messagealert');
        botDiv.setAttribute('id','botPick');

        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);

}

 function ResetRps(){

            document.getElementById('humanPick').remove();
            document.getElementById('messagealert').remove();
            document.getElementById('botPick').remove();

           let rockDiv = document.createElement('img');
           let paperDiv = document.createElement('img');
           let scissorsDiv = document.createElement('img');

           rockDiv.src ="https://etherrock.com/9.png";
           paperDiv.src ="https://www.pinclipart.com/picdir/middle/6-69349_cartoon-notebook-paper-cartoon-notebook-paper-notebook-notebook.png";
           scissorsDiv.src ="https://img.pixers.pics/pho_wat(s3:700/FO/55/10/40/38/700_FO55104038_05abe777f61a8e9962514e7edf8515e7.jpg,700,518,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,468,jpg)/stickers-scissors-clip-art-cartoon-illustration.jpg.jpg";


             document.getElementById('resetgame').appendChild(rockDiv);
             document.getElementById('resetgame').appendChild(paperDiv);
             document.getElementById('resetgame').appendChild(scissorsDiv);

             rockDiv.setAttribute('id', 'rock');
             paperDiv.setAttribute('id', 'paper');
             scissorsDiv.setAttribute('id', 'scissors');

            document.getElementById('rock').onclick = function(){ RpsGame(this); } ;
            document.getElementById('paper').onclick = function(){ RpsGame(this); } ;
            document.getElementById('scissors').onclick = function(){ RpsGame(this); } ;

}


// Game 4: change the buttons on the page
/* psude code : right the code first to store in the original colors as a json object

*/

let all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

let copyAllbuttons =[];
for (let i= 0; i< all_buttons.length; i++) {
    copyAllbuttons.push(all_buttons[i].classList[0]);
}


function buttonColorChange(changeGame) {
           if (changeGame.value === 'maroon') {
           buttonsMaron();
       }
           else if (changeGame.value === 'aqua') {
           buttonsAqua();
       }   else if (changeGame.value === 'lime'){
           buttonsLime();
       }    else if (changeGame.value === 'reset'){
           resetColors();
       }    else if (changeGame.value ==='random'){
           buttonsRandom();
       }
   }

function buttonsMaron(){
    for (let i =0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[0]);
        all_buttons[i].classList.add('btn3');

    }
}

function buttonsAqua(){
    for (let i =0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[0]);
        all_buttons[i].classList.add('btn4');

    }
}
function buttonsLime(){
    for (let i =0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[0]);
        all_buttons[i].classList.add('btn5');

    }
}

function buttonsRandom(){
    let choices =['btn3','btn4','btn5']

    for (let i =0; i< all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random()* 3);
        all_buttons[i].classList.remove(all_buttons[i].classList[0]);
        all_buttons[i].classList.add(choices[randomNumber]);



}


    }

function resetColors(){
    for (let i =0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[0]);
        all_buttons[i].classList.add(copyAllbuttons[i]);
    }
}

