document.getElementById('total-calculate-btn').addEventListener("click",function(){
    const totalElement = document.getElementById('total-calcu')
    const previousTotalString = totalElement.innerText;
    const previousTotal = parseFloat(previousTotalString);
    // console.log(previousTotal)

    const managerCostField = document.getElementById('manager-cost');
    const managerCostFieldString = managerCostField.value;
    const managerCost = parseFloat(managerCostFieldString);
    // console.log(managerCost)


    const coachCostField = document.getElementById('coach-cost');
    const coachCostFieldString =coachCostField.value;
    const coachCost = parseFloat(coachCostFieldString);
    // console.log(coachCost)

    const totalString= previousTotal + managerCost + coachCost;
    const total = parseFloat(totalString);
    

    const finalTotalElement = document.getElementById('final-total')
    const finalPreviousTotalString = finalTotalElement.innerText;
    const finalPreviousTotal = parseFloat(finalPreviousTotalString);
    console.log(finalPreviousTotalString)

    const totalCalculation = finalPreviousTotal + total;
    finalTotalElement.innerText= totalCalculation;

})