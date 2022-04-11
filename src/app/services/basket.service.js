export const basket = (el) => {
  localStorage.setItem('basket', JSON.stringify(el));
};

export const basketService = {
  getBasket: () => {
    const basket = JSON.parse(localStorage.getItem('basket') || '[]');
    return basket;
  },
  setBasket: (payload) => {
    const basket = localStorage.setItem('basket', JSON.stringify(payload));
    return basket;
  }
};
