async function loadCurrency() {
  const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
  return await response.json();
}

const updateCurrencyData = (data) => {
  const items = document.getElementById('items');
  items.innerHTML = '';

  for (const key in data.response.Valute) {
    const item = data.response.Valute[key];
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
  loader.classList.add('loader_active');
  
  const data = await loadCurrency();
  updateCurrencyData(data);
  loader.classList.remove('loader_active');
});