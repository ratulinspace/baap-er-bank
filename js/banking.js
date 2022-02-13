//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //  get the amount depositd
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    //update deposite total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalaceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalaceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposite input field
    depositInput.value = '';
});

// handle withdrow button event
document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmountText = withdrowInput.value;
    const newWithdrowAmount = parseFloat(withdrowAmountText);

    //withdrow total
    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowText = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowText);

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowTotal.innerText = newWithdrowTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear the withdrow input field
    withdrowInput.value = '';
});