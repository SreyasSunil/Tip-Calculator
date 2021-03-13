function calculate(){
    var billAmount = document.getElementById('billAmount').value;
    var tipAmount = document.getElementById('tipAmount').value;

    billAmount = Number(billAmount);
    tipAmount = Number(tipAmount);
    tipAmount = tipAmount / 100;

    var totalTip =  billAmount * tipAmount;

    document.querySelector('.tip-amount').innerHTML = "<h3>Total Tip: <small> Rs." + totalTip+ "</small></h3>";
    
    var totalBillAmount = totalTip + billAmount;
    document.querySelector('.total-with-tip').innerHTML = "<h3>Total Bill Amount: <small> Rs." + totalBillAmount+ "</small></h3>";

    return [totalTip, totalBillAmount];
}