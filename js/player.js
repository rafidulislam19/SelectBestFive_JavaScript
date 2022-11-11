function playerList(playerId) {
    const player = document.getElementById(playerId);
    const playerName = player.innerText;
    const list= document.getElementById('1');
    list.innerText = playerName;
    
    
  
}


document.getElementById('njr').addEventListener('click', function(){
    playerList('njr10');
})
document.getElementById('messi').addEventListener('click', function(){
    playerList('lm10');
})
document.getElementById('mbappe').addEventListener('click', function(){
    playerList('km');
})

