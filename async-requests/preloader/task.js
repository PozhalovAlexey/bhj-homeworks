async function loadCurrency() {
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        return await response.json();
}

const updateCurrencyData = (data) => {
    const items = document.getElementById('items');
    items.innerHTML = '';

    for (const key in data.Valute) {
        const item = data.Valute[key];
        const code = item.CharCode;
        const value = item.Value.toFixed(2);
        const currency = 'руб.';

        const itemHTML = `
      <div class="item__code">${code}</div>
      <div class="item__value">${value}</div>
      <div class="item__currency">${currency}</div>
    `;
        items.insertAdjacentHTML('beforeend', itemHTML);
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    const loader = document.getElementById('loader');
    loader.classList.remove('loader_active');

    const cachedData = localStorage.getItem('currencyData');
    if (cachedData) {
        updateCurrencyData(JSON.parse(cachedData));
    }
        const data = await loadCurrency();
        updateCurrencyData(data);
        localStorage.setItem('currencyData', JSON.stringify(data));
    loader.classList.add('loader_active');
});