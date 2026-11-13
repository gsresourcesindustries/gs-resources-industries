# G&S Resources Industries - Website (React + Vite)

## Chalane ka tarika

1. Node.js (v18+) install karo: https://nodejs.org
2. Is folder mein terminal kholo aur chalao:

```
npm install
npm run dev
```

Browser mein `http://localhost:5173` khulega.

## Live karne ke liye

```
npm run build
```

`dist/` folder ban jayega. Use Netlify / Vercel / Cloudflare Pages / kisi bhi hosting par upload kar do.

GitHub Pages par site automatically deploy hoti hai jab `main` branch par push hota hai. GitHub repository settings mein **Pages > Build and deployment > Source** ko **GitHub Actions** set karo.

## Content badalna

Saara text, phone, email, address aur product list `src/data.js` mein hai.

- Naya product: `items` list mein `{ name: "Product Name" }` jodo.
- Product photo: product-name slug ke naam se `public/products/ai/` mein `.jpg` rakho, e.g. `lead-free-solder-wire.jpg`.
- Colors: `src/styles.css` ke top par `:root` mein.

Project GitHub Pages repository path ko build ke waqt automatically handle karta hai.

## Structure

```
src/
  App.jsx                  Navbar, Hero, About, Why Us, Footer
  components/Products.jsx  Category tabs + search + product cards
  components/Contact.jsx   Enquiry form (WhatsApp / Email)
  data.js                  Company info + products
  styles.css               Poora design
```
