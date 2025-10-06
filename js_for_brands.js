
    const dropdowns = document.querySelectorAll('.dropdown');

    function closeAll() {
      document.querySelectorAll('.dropdown.open').forEach(d => {
        d.classList.remove('open');
        const btn = d.querySelector('.dropbtn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }

    dropdowns.forEach(drop => {
      const btn = drop.querySelector('.dropbtn');
      const content = drop.querySelector('.dropdown-content');

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = drop.classList.contains('open');
        closeAll();
        if (!isOpen) {
          drop.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        } else {
          drop.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });

      content.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', (ev) => {
          ev.preventDefault();
          const value = a.dataset.value ?? a.textContent.trim();
          drop.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    });

    document.addEventListener('click', () => closeAll());
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });

    const filters = {
      color: null,
      size: null,
      price: null,
      brand: null
    };

    document.querySelectorAll('.dropdown-content a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdown = link.closest('.dropdown');
        const btn = dropdown.querySelector('.dropbtn');

        let type = null;
        if (btn.textContent.includes('Цвет')) type = 'color';
        if (btn.textContent.includes('Размер')) type = 'size';
        if (btn.textContent.includes('Цена')) type = 'price';
        if (btn.textContent.includes('Бренд')) {
          const brand = link.dataset.value.toLowerCase();

          const brandPages = {
            "adidas": "adidas_brand.html",
            "nike": "nike_brand.html",
            "puma": "puma_brand.html",
            "asics": "asics_brand.html",
            "saucony": "saucony_brand.html",
            "mizuno": "mizuno_brand.html"
          };

          if (brandPages[brand]) {
            window.location.href = brandPages[brand];
            return;
          }
          type = 'brand';
        }

        if (!type) return;
        const value = link.dataset.value;
        filters[type] = value;
        applyFilters();
      });
    });

    function applyFilters() {
      const products = document.querySelectorAll('.product-card');

      products.forEach(card => {
        const color = card.dataset.color;
        const sizes = card.dataset.size ? card.dataset.size.split(',') : [];
        const price = parseInt(card.dataset.price, 10);
        const brand = card.dataset.brand;

        let visible = true;

        if (filters.color && filters.color !== color) visible = false;
        if (filters.size && !sizes.includes(filters.size)) visible = false;

        if (filters.price) {
          const [min, max] = filters.price.split('-').map(Number);
          if (price < min || price > max) visible = false;
        }

        if (filters.brand && filters.brand !== brand) visible = false;

        card.parentElement.style.display = visible ? 'block' : 'none';
      });
    }
