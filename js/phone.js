
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const currentValue = updateCaseNumber(true)
    updateCaseTotalNumber(currentValue)
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const currentValue = updateCaseNumber(true)
    updateCaseTotalNumber(currentValue)
})