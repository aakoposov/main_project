document.getElementById("orderBtn").addEventListener("click", function() {
  const name = document.querySelector("h1").textContent;
  const price = document.querySelector(".price").textContent;
  const image = document.querySelector(".image").src;
  const size = document.getElementById("size").value;

  const product = { name, price, image, size };

  // получаем существующие товары
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // добавляем новый
  cart.push(product);

  // сохраняем обратно
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Товар добавлен в корзину!");
});