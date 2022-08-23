document.getElementById('calculate-button').addEventListener("click", function(){
    
    const someLi = document.querySelectorAll('.total-li li');
    const decretion = someLi.length -1;
    // console.log(decretion);  


    const playerCostFeild = document.getElementById('per-player');
    const playerCostFeildString = playerCostFeild.value;
    const perPlayerCost = parseFloat(playerCostFeildString);
    console.log(perPlayerCost)

    const newTotalCost= decretion *perPlayerCost ;
    // console.log(newTotalCost)


    const previousCostElement = document.getElementById('total-calculation');
    const currentCost = previousCostElement + newTotalCost;
    previousCostElement.innerText = currentCost;
    
       

    
})