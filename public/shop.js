// Shared helpers for the demo shop. Cart lives in localStorage.
const PRODUCTS = {
  trail: { name: "Ridge Trail Runner", price: 45, tone: "sage", upper: "#5f7d69", accent: "#e8eee9", sole: "#2b332e", blurb: "Grippy, light and ready for loose gravel. Made for weekend trails." },
  road: { name: "Tempo Road Shoe", price: 89, tone: "sand", upper: "#b8925a", accent: "#f6efe3", sole: "#3a3128", blurb: "A springy foam midsole for daily miles and race-day efforts." },
  walk: { name: "Everyday Walker", price: 39, tone: "mist", upper: "#7484ad", accent: "#eef1f8", sole: "#2c3140", blurb: "Soft knit and a cushioned footbed for all-day errands." },
};
const cart = {
  get: () => JSON.parse(localStorage.getItem("cart") || "[]"),
  add: (item) => localStorage.setItem("cart", JSON.stringify([...cart.get(), item])),
  clear: () => localStorage.removeItem("cart"),
};
const money = (n) => "$" + n.toFixed(2);

/** A side-view sneaker in the product's colors. Decorative: the product name is always next to it. */
function shoe(id) {
  const p = PRODUCTS[id] || PRODUCTS.trail;
  return `<svg viewBox="0 0 240 124" aria-hidden="true" focusable="false">
    <path d="M20 88 L18 54 C18 45 24 39 33 41 L52 46 C60 48 66 44 70 36 L76 22 C79 15 87 15 91 20 L101 32 C121 46 150 58 180 64 C206 69 224 75 228 83 C230 87 228 89 223 89 Z" fill="${p.upper}"/>
    <path d="M33 41 L52 46 C60 48 66 44 70 36 L73 29 C66 40 52 42 35 37 Z" fill="${p.accent}" fill-opacity=".85"/>
    <path d="M188 65 C208 69 225 75 228 83 C229 86 228 88 224 89 L198 89 C196 80 193 72 188 65 Z" fill="${p.accent}" fill-opacity=".28"/>
    <path d="M24 79 C80 75 150 73 226 82" stroke="${p.accent}" stroke-opacity=".55" stroke-width="2.5" fill="none"/>
    <path d="M97 37 l11 -8 M111 45 l11 -8 M125 52 l11 -8 M139 58 l11 -7" stroke="${p.accent}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M12 96 C12 91 16 88 24 88 L208 87 C221 87 230 85 232 92 C234 100 226 108 212 108 L28 110 C18 110 12 104 12 96 Z" fill="${p.sole}"/>
    <path d="M18 95 L228 93" stroke="#ffffff" stroke-opacity=".5" stroke-width="2.5"/>
  </svg>`;
}

function header() {
  const count = cart.get().length;
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<p class="announce">Free returns within 30 days.</p>
    <header><div class="bar">
      <a class="logo" href="/" aria-label="Stride Shoes">
        <svg class="mark" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="7" fill="#1e3a2f"/><path d="M6 15.5 C9 15.5 10 8.5 13 8.5 C15 8.5 15.5 12 18 12" stroke="#dce5dd" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>
        Stride
      </a>
      <nav aria-label="Account and cart"><a href="/signup">Sign up</a><a class="cart-link" href="/cart">Cart (${count})</a></nav>
    </div></header>`,
  );
  // Fill product images: <div class="tile" data-shoe="trail"></div>
  document.addEventListener("DOMContentLoaded", tiles);
}

function tiles() {
  for (const el of document.querySelectorAll("[data-shoe]")) {
    const p = PRODUCTS[el.dataset.shoe] || PRODUCTS.trail;
    el.classList.add("tile", p.tone);
    el.innerHTML = shoe(el.dataset.shoe);
  }
}
