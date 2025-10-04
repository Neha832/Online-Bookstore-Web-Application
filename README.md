

**Online Bookstore Web Application**

**Project Overview:**
A simple online bookstore web application built using HTML, CSS, JavaScript, Java, and MySQL. Users can browse books, search by category or title, add books to their cart, and place orders. Admins can manage inventory and track sales.

---

**Features:**

* Responsive design for desktop, tablet, and mobile.
* Interactive UI with smooth hover effects and dynamic cart updates.
* Book search and filter functionality.
* Shopping cart with JavaScript logic.
* Backend using Java to connect with MySQL database.
* User registration and login system (optional).

---

**Tech Stack:**

* HTML5, CSS3, JavaScript for frontend.
* Java (Servlets) for backend logic.
* MySQL for database management.

---

**Project Structure:**

```
online-bookstore/
│── index.html            # Home page
│── books.html            # Books listing page
│── cart.html             # Shopping cart page
│── admin.html            # Admin dashboard page
│── style.css             # Stylesheet
│── script.js             # Frontend interactivity
│── backend/
│   ├── Bookstore.java    # Java backend logic
│   └── DBConnection.java # Java MySQL connection
│── images/               # Book images
│── README.md             # Project documentation
```

---

**Database Schema:**

* **Books Table:** book_id, title, author, category, price, stock.
* **Users Table:** user_id, username, email, password.
* **Orders Table:** order_id, user_id, book_id, quantity, order_date.

---

**How to Run:**

1. Create MySQL database and tables using the provided schema.
2. Set up Java backend (Servlets) and configure DB connection.
3. Open `index.html` in a browser to use frontend.
4. (Optional) Deploy backend on a local server (e.g., Tomcat) to fetch dynamic book data.

---

**Author:**
Neha Kumari
