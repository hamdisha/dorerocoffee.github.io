# Dorero Coffee - Landing Page

Welcome to the official repository for the Dorero Coffee landing page. This project is a modern, professional, and responsive website designed to introduce Dorero Coffee to the South Korean market, highlighting its unique focus on directly imported Ethiopian beans.

---

## 🚀 Features

* **Fully Responsive:** Looks great on desktops, tablets, and mobile devices.
* **Modern Design:** Clean, elegant, and professional UI/UX that tells a story.
* **Interactive Mobile Menu:** A smooth, user-friendly hamburger menu for smaller screens.
* **Clear Call-to-Action (CTA):** Strategically placed buttons to guide users to your Naver and Coupang online shops.
* **SEO Friendly:** Includes meta tags for title and description to improve search engine visibility.
* **Easy to Customize:** Built with simple HTML, CSS, and JavaScript. CSS variables are used for easy theme changes.

---

## 🛠️ Tech Stack

* **HTML5:** For the structure and content of the website.
* **CSS3:** For all styling, layout (Flexbox & Grid), and responsiveness.
* **JavaScript:** For the interactive mobile navigation menu.

---

## 📁 File Structure

The project is organized into a simple and intuitive folder structure.

```
dorero-coffee/
├── images/
│   └── products
│       └── product1.png       # Your product image goes here
│   └── logo.png               # Your logo file goes here
│   └── hero_bg.png            # Your hero background image goes here
├── index.html                 # Main HTML file
├── style.css                  # All CSS styles
├── script.js                  # JavaScript for interactivity
└── README.md                  # This file
```

---

## ✍️ How to Customize

This landing page was designed to be easily updated. Open `index.html` in a text editor to make the following changes.

### 1. Update Your Logo

* Place your logo file in the `/images` folder.
* For best results, name your file `logo.png` or update the file path in `index.html` on lines **31**, **217**, and **222**.

### 2. Add Your Online Shop Links

* Find the sections with "IMPORTANT: Replace '#'" comments in `index.html`.
* **Header Links (Line 42-43):** Replace `#` with your Naver Store and Coupang links.
* **Hero Button (Line 52):** Replace `#` with your primary shop link.
* **Product Buttons (Lines 141-168):** Replace `#` with the specific links for each roast type and product.

### 3. Change Images

* **Hero Background (style.css, line 164):** Replace the `url(...)` with a link to your own high-quality background image. I recommend using a photo of an Ethiopian coffee farm or landscape.
* **Product Images (index.html, lines 136, 145, 154, 163):** Replace the `src` links with photos of your coffee bags and green beans.

### 4. Update Contact & Social Media

* Go to the `` section in `index.html` (starts on line 215).
* **Contact Info (Lines 224-226):** Change the email address and phone number.
* **Social Media (Lines 230-232):** Replace the `#` in the `href` attributes with your actual social media profile links.

### 5. (Advanced) Change Colors and Fonts

If you want to change the site's color scheme, you can do so easily in `style.css`.

* Open `style.css`.
* At the top of the file, you will find a section called `/* --- CSS Variables --- */` (starts on line 6).
* You can change the hex codes for `--primary-color`, `--secondary-color`, `--accent-color`, etc., and the changes will apply across the entire site.