// Modal (Bootstrap)
$('#cart').on('shown.bs.modal', function () {
    $('#userCart').trigger('focus')
  })



const buildItemRow = function(){
  const render = function(getItems){
    $('#data').html(items)
  }

  const getItems = function(){
    $.get("/api/product"),then(function(items){
      render(items);
    })
  }

  const createButton = function(){
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Add to Cart");
    btn.appendChild(t);
    document.body.appendChild(btn);
  }
  
  
  const items = function(){
  $('<td>').text(`${product_name}`)
  $('<td>').text(`${price}`)
  $('<td>').append(item)
  $('<td>').append(button)
  }
}


const updateStock = function(){}

const addtoCart = function(){
  if (input > stock_quantity){
    alert("There is not enough items for your request")
  } else {

  }
};
  // $('#product_name').append(`${product_name}`);
  // $("#department_name").append(`${department_name}`);
  // $("#price").append($`${price}`);
  // $("#stock_quantity").append(`${stock_quantity}`);
  
getItems();
  
$('btn').on("click", addtoCart)
$('#checkout').on('click', updateStock)
