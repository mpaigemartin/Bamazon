// Modal (Bootstrap)
$('#cart').on('shown.bs.modal', function () {
    $('#userCart').trigger('focus')
  })



  $('#prduct_name').append(`${product_name}`);
  $("#department_name").append(`${department_name}`);
  $("#price").append($`${price}`);
  $("#stock_quantity").append(`${stock_quantity}`);
  