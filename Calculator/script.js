document.addEventListener('DOMContentLoaded', function() {
    
    var resultSpace = document.querySelector('.result-space');
    var buttons = document.querySelectorAll('.operand, .operator, .special-operators');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var buttonValue = this.textContent;
        handleButtonClick(buttonValue);
      });

      if (button.classList.contains('operand')) {
        button.addEventListener('click', function() {
            button.style.backgroundColor = 'rgb(23, 168, 23)'; 

            setTimeout(function() {
                button.style.backgroundColor = ''; 
              }, 200);
            });
      } else if (button.classList.contains('operator')){
        button.addEventListener('click', function() {
            button.style.backgroundColor = 'rgb(235, 179, 74)'; 

            setTimeout(function() {
                button.style.backgroundColor = ''; 
              }, 200);
            });
      } else {
        button.addEventListener('click', function() {
            button.style.backgroundColor = 'rgb(81, 81, 224)'; 

            setTimeout(function() {
                button.style.backgroundColor = ''; 
              }, 200);
            });
      }
    });
    
    

    function handleButtonClick(value) {
      if (value === 'AC') {
        resultSpace.textContent = '0';
      } else if (value === '+/-') {
        var currentValue = parseFloat(resultSpace.textContent);
        resultSpace.textContent = (currentValue * -1).toString();
      } else if (value === '%') {
        var currentValue = parseFloat(resultSpace.textContent);
        resultSpace.textContent = (currentValue / 100).toString();
      } else if (value === '=') {
        var expression = resultSpace.textContent;
        var result = eval(expression); 
        resultSpace.textContent = result.toString();
      } else {
        if (resultSpace.textContent === '0') {
          resultSpace.textContent = value;
        } else {
          resultSpace.textContent += value;
        }
      }
    }
});