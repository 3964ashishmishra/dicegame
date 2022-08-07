

function handleWinner(){

    var randomNumber1 = Math.floor((Math.random()*6)+1);

    // images/dice6.png
    var randomDiceImage = "images/"+ "dice"+randomNumber1+".png"
    
    var img1 = document.querySelectorAll("img","img")[0]
    
    img1.setAttribute("src",randomDiceImage)
    
    
    
    //  For second image
    
    var randomNumber2 = Math.floor((Math.random()*6)+1);
    
    var randomDiceImage2 = "images/"+"dice"+randomNumber2+".png"
    
    var img2 =  document.querySelectorAll("img")[1]
    
    img2.setAttribute("src",randomDiceImage2);
    
    
    
    if(randomNumber1 > randomNumber2){
        document.getElementById("h1").innerHTML = "🚩 player 1 won "
    }else if(randomNumber1 < randomNumber2){
        document.getElementById("h1").innerHTML = " player 2 won 🚩"
    }else{
        document.getElementById("h1").innerHTML = "🚩 Draw 🚩"
    }
    
    
    
    

}

