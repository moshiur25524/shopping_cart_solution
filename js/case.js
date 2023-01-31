

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const currentValue = updateCaseNumber(true)
    updateCaseTotalNumber(currentValue)

    calculateSubtotal()

})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const currentValue = updateCaseNumber(false)
    updateCaseTotalNumber(currentValue)

    calculateSubtotal()
})