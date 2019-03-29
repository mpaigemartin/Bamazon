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

  const addCartRow = function(qty, item) {
    const itemTotal = item.price * qty;

    cartTotal = +itemTotal;

    item.stock_quantity -= qty;

    cartItems.push(item);

    const tr = $("<tr>").addClass(`cart-${item.id}`);

    tr.append(
      $("<td>").text(qty),
      $("<td>").text(item.product_name),
      $("<td>").text(`$${item.price}`),
      $("<td>").text(`$${itemTotal.toFixed(2)}`)
    );

    $("#userCart").append(tr);
    $(".cart-total").text(`$${cartTotal.toFixed(2)}`);
  };

  const render = function(items) {
    $("modal").modal("hide");
    $("#data").empty();
    console.log(items);
    items.forEach(item => {
      $("#data").append(buildItemRow(item));
      console.log(buildItemRow(item));
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
    const id = $(this).attr("data-id");
    $.get(`/api/products${id}`).then(updateCart);
    // if (input > stock_quantity) {
    //   alert("There is not enough items for your request");
    // } else {
    // }
  };

  const updateCart = function(data) {
    const numRequested = $(`#${data.id}`).val();

    if (numRequested > data.stock_quantity) {
      alert("There is not enough items for your request");
    } else {
      addCartRow(numRequested, data);
      alert("success", "Item(s) successfully added to your cart");
      $(`#${data.id}`).val("");
    }
  };

  const checkout = function() {
    cartItems.forEach(function(item) {
      $.ajax({
        method: "PUT",
        url: `/api/products/${items.id}`,
        data: item
      });
    });
  };
  // $('#product_name').append(`${product_name}`);
  // $("#department_name").append(`${department_name}`);
  // $("#price").append($`${price}`);
  // $("#stock_quantity").append(`${stock_quantity}`);

  getItems();

  $("btn").on("click", ".add-to-cart", addtoCart);
  $("#close").on("click", getItems);
  $("#checkout").on("click", updateStock);
});
