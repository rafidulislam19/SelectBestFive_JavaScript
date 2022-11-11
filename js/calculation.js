document.getElementById('calculate').addEventListener('click',function() {
    const player = document.getElementById('playerMoney');
    const playerMoneyString = player.value;
    const playerMoney = parseFloat(playerMoneyString);
    player.value = '';
    if (isNaN(playerMoney)) {
        alert('Please provide a valid amount!');
        return;
    }
    const expenses = document.getElementById('playerExpenses');
    const totalPlayerExpenses = playerMoney*5;
    expenses.innerText = totalPlayerExpenses;
})

document.getElementById('calculateTotal').addEventListener('click', function() {
    const manager = document.getElementById('managerMoney');
    const managerMoneyString = manager.value;
    const managerMoney = parseFloat(managerMoneyString); 
    manager.value = '';
    if (isNaN(managerMoney)) {
        alert('Please provide a valid amount!');
        return;
    }
    const coach = document.getElementById('coachMoney');
    const coachMoneyString = coach.value;
    const coachMoney = parseFloat(coachMoneyString); 
    coach.value = '';
    if (isNaN(coachMoney)) {
        alert('Please provide a valid amount!');
        return;
    }
    const total = document.getElementById('total');
    const expenses = document.getElementById('playerExpenses');
    const totalPlayerExpenses = parseFloat(expenses.innerText);
    total.innerText = totalPlayerExpenses + managerMoney + coachMoney;
    console.log(totalPlayerExpenses);

})