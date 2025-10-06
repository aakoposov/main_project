document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".search");
  const input = form.querySelector("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();

    // Словарь: поисковое слово → страница
    const pages = {
      nike: "C:/Users/kopos/OneDrive/Desktop/main_project/nike_brand.html",
      adidas: "C:/Users/kopos/OneDrive/Desktop/main_project/adidas_brand.html",
      puma: "C:/Users/kopos/OneDrive/Desktop/main_project/puma_brand.html",
      asics: "C:/Users/kopos/OneDrive/Desktop/main_project/asics_brand.html",
      saucony: "C:/Users/kopos/OneDrive/Desktop/main_project/saucony_brand.html",
      mizuno: "C:/Users/kopos/OneDrive/Desktop/main_project/mizuno_brand.html",

      // товары
      forum:
        "C:/Users/kopos/OneDrive/Desktop/main_project/adidas_sneaker_forum.html",
      superstar:
        "C:/Users/kopos/OneDrive/Desktop/main_project/adidas_sneaker_superstar.html",
      v2:
        "C:/Users/kopos/OneDrive/Desktop/main_project/adidas_sneaker_forum_v2.html",
      tiger:
        "C:/Users/kopos/OneDrive/Desktop/main_project/asics_sneaker_tiger.html",
      run:
        "C:/Users/kopos/OneDrive/Desktop/main_project/mizuno_sneaker_run.html",
      street:
        "C:/Users/kopos/OneDrive/Desktop/main_project/mizuno_sneaker_street.html",
        airforce:
        "C:/Users/kopos/OneDrive/Desktop/main_project/nike_sneaker_airforce.html",
      jordan:
        "C:/Users/kopos/OneDrive/Desktop/main_project/nike_sneaker_jordan.html",
      vapormax:
        "C:/Users/kopos/OneDrive/Desktop/main_project/nike_sneaker_vapormax.html",
        slipstream:
        "C:/Users/kopos/OneDrive/Desktop/main_project/puma_sneaker_slipstream.html",
      superjump:
        "C:/Users/kopos/OneDrive/Desktop/main_project/saucony_sneaker_superjump.html"
    };

    let found = false;

    // Проверяем, есть ли совпадение
    for (const key in pages) {
      if (query.includes(key)) {
        window.location.href = pages[key];
        found = true;
        break;
      }
    }

    // Если не найдено — выведем сообщение
    if (!found) {
      alert("Ничего не найдено. Попробуйте другое слово.");
    }
  });
});
