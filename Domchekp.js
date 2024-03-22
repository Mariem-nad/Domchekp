function incrementQuantity(button) {
    var quantityInput = button.parentNode.querySelector('input[type="text"]');
    var quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
    calculateTotalPrice();
  }
  
 
  function decrementQuantity(button) {
    var quantityInput = button.parentNode.querySelector('input[type="text"]');
    var quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
      quantityInput.value = quantity - 1;
      calculateTotalPrice();
    }
  }
  
  
  function removeItem(button) {
    var cartItem = button.parentNode;
    cartItem.parentNode.removeChild(cartItem);
    calculateTotalPrice();
  }
  
  
  function toggleLike(button) {
    button.classList.toggle('liked');
  }
  
  
  function calculateTotalPrice() {
    var cartItems = document.querySelectorAll('.cart-item');
    var totalPrice = 0;
    cartItems.forEach(function(cartItem) {
      var quantity = parseInt(cartItem.querySelector('input[type="text"]').value);
      var price = parseFloat(cartItem.querySelector('.price').innerText.slice(1));
      totalPrice += quantity * price;
    });
    document.getElementById('total-price').innerText = 'Total Price: $' + totalPrice.toFixed(2);
  }
  
  
  document.querySelectorAll('.quantity-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      if (button.classList.contains('plus')) {
        incrementQuantity(button);
      } else {
        decrementQuantity(button);
      }
    });
  });
  
  document.querySelectorAll('.delete-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      removeItem(button);
    });
  });
  
  document.querySelectorAll('.heart-button').forEach(function(button) {
    button.addEventListener('click', function() {
      toggleLike(button);
    });
  });
  
  calculateTotalPrice();