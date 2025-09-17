function convertCurrency() { 
    
    const usdInput = document.getElementById('usdInput');
    const yenInput = document.getElementById('yenInput');

    const conversionRate = 147.40; 
      
    if (usdInput.value !== "") {
        const usdValue = parseFloat(usdInput.value);
        const yenValue = usdValue * conversionRate;
        yenInput.value = yenValue.toFixed(2);
        usdInput.value = "";
        
    } else if (yenInput.value !== "") {
        const yenValue = parseFloat(yenInput.value);
        const usdValue = yenValue / conversionRate;
        usdInput.value = usdValue.toFixed(2);
        yenInput.value = "";
        
    }
}
function clearFields() {
    document.getElementById('usdInput').value = "";
    document.getElementById('yenInput').value = "";
}