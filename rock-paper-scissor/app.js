const handOptions={
    "rock": "assets/rock.png",
    "scissors": "assets/scissors.png",
    "paper": "assets/paper.png"
}
let SCORE=0;

const setDecision=(decision)=>{
    document.querySelector(".decision h1").innerText=decision

}
const setScore=(score)=>{
document.querySelector(".score h1").innerText=score;
SCORE=score;

}
const playAgain=()=>{

    
    let hands= document.querySelector(".hands")
    hands.style.display="flex";

    let contest= document.querySelector(".contest")
    contest.style.display="none";


}


const pickUserHand =(hand)=>{
  
    
    let hands= document.querySelector(".hands")
    hands.style.display="none";

    let contest= document.querySelector(".contest")
    contest.style.display="flex";


        document.getElementById("userPickImg").src=handOptions[hand];
        let cpHands=computerpickhand();
        referee(hand,cpHands)
        
    
}
const computerpickhand=()=>{
    let hands=["paper", "scissors", "rock"];
    let cpHands=hands[Math.floor(Math.random()*3)];
    document.getElementById("computerPickImg").src=handOptions[cpHands];
    return cpHands;

}
const referee=(userHand,cpHands)=>{
    if(userHand=="paper" && cpHands=="scissors"){
        setDecision("YOU LOSE!!");
}
if(userHand=="paper" && cpHands=="rock"){
    setDecision("YOU WIN!!")
    setScore(SCORE+1); 

}
if(userHand=="paper" && cpHands=="paper"){
    setDecision("it`s a tie!");
      
}
if(userHand=="rock" && cpHands=="scissors"){
    setDecision("YOU WIN!!")
    setScore(SCORE+1); 
    
}
if(userHand=="rock" && cpHands=="paper"){
    setDecision("YOU LOSE!!")
       
}
if(userHand=="rock" && cpHands=="rock"){
    setDecision("it`s a tie!");
}
if(userHand=="scissors" && cpHands=="scissors"){
    setDecision("it`s a tie!");
      
}
if(userHand=="scissors" && cpHands=="rock"){
    setDecision("YOU LOSE!");
      
}
if(userHand=="scissors" && cpHands=="paper"){
    setDecision("YOU WIN!!");
    setScore(SCORE+1); 

      
}
















}