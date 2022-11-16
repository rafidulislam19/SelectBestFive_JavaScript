for (let i = 1; i <= 5; i++) {
        function playerList(playerId) {
        const player = document.getElementById(playerId);
        const playerName = player.innerText;
        const list= document.getElementById(i);
        list.innerText = playerName; 
        }
        
    }



document.getElementById('njr').addEventListener('click', function () {
    playerList('njr10');
})
document.getElementById('messi').addEventListener('click', function () {
    playerList('lm10');
})
document.getElementById('mbappe').addEventListener('click', function () {
    playerList('km');
})
document.getElementById('ramos').addEventListener('click', function () {
    playerList('sr');
})
document.getElementById('mar').addEventListener('click', function () {
    playerList('mq');
})
document.getElementById('hakimi').addEventListener('click', function () {
    playerList('ah');
})
document.getElementById('navas').addEventListener('click', function () {
    playerList('kn');
})
document.getElementById('donna').addEventListener('click', function () {
    playerList('gd');
})
document.getElementById('veratti').addEventListener('click', function () {
    playerList('mv');
})

