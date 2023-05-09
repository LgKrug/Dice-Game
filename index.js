let random1 = Math.ceil(Math.random() * 6 );
let random2 = Math.ceil(Math.random() * 6 );

switch (random1) {
    case 1: document.querySelector(".img1").setAttribute("src", "images/dice1.png"); 
        break;
    
    case 2: document.querySelector(".img1").setAttribute("src", "images/dice2.png"); 
        break;

    case 3: document.querySelector(".img1").setAttribute("src", "images/dice3.png"); 
        break;
    
    case 4: document.querySelector(".img1").setAttribute("src", "images/dice4.png"); 
        break;

    case 5: document.querySelector(".img1").setAttribute("src", "images/dice5.png"); 
        break;
    
    case 6: document.querySelector(".img1").setAttribute("src", "images/dice6.png"); 
        break;
}

switch (random2) {
    case 1: document.querySelector(".img2").setAttribute("src", "images/dice1.png"); 
        break;
    
    case 2: document.querySelector(".img2").setAttribute("src", "images/dice2.png"); 
        break;

    case 3: document.querySelector(".img2").setAttribute("src", "images/dice3.png"); 
        break;
    
    case 4: document.querySelector(".img2").setAttribute("src", "images/dice4.png"); 
        break;

    case 5: document.querySelector(".img2").setAttribute("src", "images/dice5.png"); 
        break;
    
    case 6: document.querySelector(".img2").setAttribute("src", "images/dice6.png"); 
        break;
}

if(random1>random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} 
else if(random1<random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}