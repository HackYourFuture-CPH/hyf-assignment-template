const orderConfirm = document.getElementById('buy-now');
orderConfirm.addEventListener('click', function() {
  alert('Thank you for your purchase! Your order is processing .');
});
const help = document.getElementsByClassName('help-opt')[0];
help.addEventListener('click', function() {
  alert('For help, please write us an email "abc@xyz.com" or call us at +00 123 456 7890.')
});
