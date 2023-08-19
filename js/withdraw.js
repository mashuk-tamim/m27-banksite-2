document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawAmount = getInputFieldValueByID('withdraw-amount');
    const updatedWithdrawValue = putElementValueById('update-withdraw',withdrawAmount);
    const updatedBalanceValue = putElementValueById('update-balance',withdrawAmount);
})