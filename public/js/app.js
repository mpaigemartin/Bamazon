$(function() {
  // Modal (Bootstrap)
  $("#cart").on("shown.bs.modal", function() {
    $("#userCart").trigger("focus");
  });

  const buildItemRow = function(item) {
    const tr = $("<tr>");

    const input = $("<input>");
    input.attr({
      type: "number",
      min: 0,
      id: item.id
    });

    const btn = $("<button>");
    btn.attr("data-id", item.id);
    btn.addClass("btn btn-dark");
    btn.text("Add to Cart");

    tr.append(
      $("<td>").text(item.product_name),
      $("<td>").text(item.department_name),
      $("<td>").text(`$${item.price}`),
      $("<td>").text(item.stock_quantity),
      $("<td>").append(input),
      $("<td>").append(btn)
    );

    return tr;
  };

  const render = function(items) {
    console.log(items);
    items.forEach(item => {
      $("#data").append(buildItemRow(item));
      console.log(buildItemRow(item))
    });
  };

  const getItems = function() {
    $.get("/api/products").then(function(items) {
      console.log(items);
      render(items);
    });
  };

  const updateStock = function() {};

  const addtoCart = function() {
    if (input > stock_quantity) {
      alert("There is not enough items for your request");
    } else {
    }
  };
  // $('#product_name').append(`${product_name}`);
  // $("#department_name").append(`${department_name}`);
  // $("#price").append($`${price}`);
  // $("#stock_quantity").append(`${stock_quantity}`);

  getItems();

  $("btn").on("click", addtoCart);
  $("#checkout").on("click", updateStock);
});
