// Shared helpers for the demo shop. Cart lives in localStorage.
const PRODUCTS = {
  trail: { name: "Ridge Trail Runner", price: 45 },
  road: { name: "Tempo Road Shoe", price: 89 },
  walk: { name: "Everyday Walker", price: 39 },
};
const cart = {
  get: () => JSON.parse(localStorage.getItem("cart") || "[]"),
  add: (item) => localStorage.setItem("cart", JSON.stringify([...cart.get(), item])),
  clear: () => localStorage.removeItem("cart"),
};
const money = (n) => "$" + n.toFixed(2);
function header() {
  const count = cart.get().length;
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<header><a class="logo" href="/">Stride Shoes</a><nav><a href="/signup">Sign up</a><a href="/cart">Cart (${count})</a></nav></header>`,
  );
}
