
document.getElementById('calculate-button').addEventListener("click", function(){
    
    const someLi = document.querySelectorAll('.total-li li');
    const decretion = someLi.length -1;
    // console.log(decretion);  


    const playerCostFeild = document.getElementById('per-player');
    const playerCostFeildString = playerCostFeild.value;
    const perPlayerCost = parseFloat(playerCostFeildString);
   
    const newTotalCostStrin= decretion *perPlayerCost ;
    const newTotalCost = parseFloat(newTotalCostStrin);
    
    const totalElement = document.getElementById('total-calcu')
    const previousTotalString = totalElement.innerText;
    const previousTotal = parseFloat(previousTotalString);

    const totalCalculation = previousTotal + newTotalCost;
    totalElement.innerText= totalCalculation;
})

