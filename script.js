// Sample book data (replace with dynamic data from backend)
const books = [
  { book_id: 1, title: "JavaScript Basics", author: "John Doe", price: 19.99, stock: 10 },
  { book_id: 2, title: "Learning Java", author: "Jane Smith", price: 25.99, stock: 5 },
  { book_id: 3, title: "HTML & CSS Guide", author: "Alice Brown", price: 15.5, stock: 7 }
];

let cart = [];

// Display books
const bookList = document.getElementById("book-list");
books.forEach(book => {
  const div = document.createElement("div");
  div.className = "book-card";
  div.innerHTML = `
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Price: $${book.price}</p>
    <button onclick="addToCart(${book.book_id})">Add to Cart</button>
  `;
  bookList.appendChild(div);
});

// Add to cart
function addToCart(book_id) {
  const book = books.find(b => b.book_id === book_id);
  if (!cart.includes(book)) cart.push(book);
  displayCart();
}

// Display cart items
function displayCart() {
  const cartDiv = document.getElementById("cart-items");
  cartDiv.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.title} - $${item.price}</p>`;
    total += item.price;
  });
  document.getElementById("total-price").textContent = `Total: $${total.toFixed(2)}`;
}

// Checkout (placeholder)
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Checkout successful!");
  cart = [];
  displayCart();
}
