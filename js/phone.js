
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const currentPhoneValue = updatePhoneValue(true)
    updatePhonePrice(currentPhoneValue)

    calculateSubtotal()
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const currentPhoneValue = updatePhoneValue(false)
    updatePhonePrice(currentPhoneValue)

    calculateSubtotal()
})