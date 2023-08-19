document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = getInputFieldValueByID('deposit-amount');
    const updatedDepositValue = putElementValueById('update-deposit',depositAmount);
    const updatedBalanceValue = putElementValueById('update-balance',depositAmount);
})