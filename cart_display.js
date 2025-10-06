function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartItems");
    const totalElement = document.getElementById("cartTotal");

    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      container.innerHTML = "<p>Ваша корзина пуста 😔</p>";
      totalElement.textContent = "";
      return;
    }

    cart.forEach((item, index) => {
      const priceNum = parseInt(item.price.replace(/\D/g, ""));
      total += priceNum;

      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-size">Размер: ${item.size}</div>
          <div class="cart-item-price">${item.price}</div>
        </div>
        <button class="remove-btn" data-index="${index}">✖</button>
      `;
      container.appendChild(div);
    });

    totalElement.textContent = "Итого: " + total.toLocaleString("ru-RU") + " RUB";

    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const i = e.target.dataset.index;
        cart.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });
    });
  }

  document.getElementById("checkoutBtn").addEventListener("click", () => {
    alert("Заказ оформлен! Спасибо за покупку ❤️");
    localStorage.removeItem("cart");
    renderCart();
  });

  renderCart();