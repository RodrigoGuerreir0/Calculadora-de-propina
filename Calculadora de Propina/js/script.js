function calculateTip() {
    var billAmount = document.getElementById('billAmount').value;
    var tipPercentage = document.getElementById('tipPercentage').value;
  
    // Validar entrada
    if (billAmount === "" || tipPercentage === "") {
      alert("Por favor, preencha ambos os campos.");
      return;
    }
  
    // Calcular gorjeta
    var tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
  
    // Calcular total final
    var totalAmount = (parseFloat(billAmount) + parseFloat(tipAmount)).toFixed(2);
  
    // Exibir resultados
    document.getElementById('tipAmount').innerText = tipAmount;
    document.getElementById('totalAmount').innerText = totalAmount;
  }
  