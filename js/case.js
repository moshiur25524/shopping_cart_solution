

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const currentValue = updateCaseNumber(true)
    updateCaseTotalNumber(currentValue)

})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const currentValue = updateCaseNumber(false)
    updateCaseTotalNumber(currentValue)
})