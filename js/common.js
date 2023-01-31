function updateCaseNumber(isIncrease) {
    const caseField = document.getElementById('case-number-field');
    const previousCaseValue = parseInt(caseField.value)

    let currentValue;
    if (isIncrease === true) {
        currentValue = previousCaseValue + 1;
    }
    else {
        currentValue = previousCaseValue - 1;
    }

    caseField.value = currentValue
    return currentValue
}

function updateCaseTotalNumber(currentValue) {
    const currentCasePrice = currentValue * 59;
    const priceField = document.getElementById('case-price-field');
    priceField.innerText = currentCasePrice
}
