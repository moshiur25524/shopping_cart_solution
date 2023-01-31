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

function updatePhonePrice(currentPhoneValue){
    const phoneNumberField = document.getElementById('phone-price-field');
    const totalPrice = currentPhoneValue * 1219;
    phoneNumberField.innerText = totalPrice
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
   const currentPhoneValue = updatePhoneValue(true)
   updatePhonePrice(currentPhoneValue)

})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
 const currentPhoneValue =  updatePhoneValue(false)
 updatePhonePrice(currentPhoneValue)
})