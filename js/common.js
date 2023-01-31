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

function updatePhoneValue(isIncrease) {
    const phoneField = document.getElementById('phone-number-field');
    const PreviousPhoneValue = parseInt(phoneField.value);
    let currentPhoneValue;
    if (isIncrease === true) {
        currentPhoneValue = PreviousPhoneValue + 1;
    }
    else {
        currentPhoneValue = PreviousPhoneValue - 1;
    }

    phoneField.value = currentPhoneValue
    return currentPhoneValue
}

function updatePhonePrice(currentPhoneValue) {
    const phoneNumberField = document.getElementById('phone-price-field');
    const totalPrice = currentPhoneValue * 1219;
    phoneNumberField.innerText = totalPrice
}

function getTextElementValueById(fieldId) {
    const textField = document.getElementById(fieldId);
    const textAmount = parseFloat(textField.innerText)
    return textAmount;
}

function calculateSubtotal() {
    const currentphoneAmount = getTextElementValueById('phone-price-field')
    const currentCaseAmount = getTextElementValueById('case-price-field')
    const currentSubtotal = currentphoneAmount + currentCaseAmount;
    const SubtotalField = document.getElementById('sub-total');
    SubtotalField.innerText = currentSubtotal

    // Calculate Tax

    const taxAmount = (currentSubtotal * 0.1).toFixed(2);
    const taxAmountNumber = parseFloat(taxAmount)
    const taxField = document.getElementById('tax-amount')
    taxField.innerText = taxAmountNumber;

    // Final Total

    const finalTotalAmount = currentSubtotal + taxAmountNumber;
    const finalAmountField = document.getElementById('total-amount')
    finalAmountField.innerText = finalTotalAmount;
}