# 🍽️ Primo Fiscal POS – Loyalty & Order Summary UI

A clean and modular React-based POS UI for **Primo Fiscal**, built to simulate a real-world restaurant/retail checkout experience with loyalty point redemption and order confirmation workflows.

> ✅ Built using React + TailwindCSS  
> 🔌 Designed with component separation and utility functions  
> 📦 Includes loyalty discount logic, order review, and confirmation

---

## 🚀 Features

- 📋 Static cart preview with images and pricing
- 🎁 Loyalty Points Module: redeem & preview discounts live
- 💰 Final payment summary with dynamic price updates
- ✅ Confirmation flow with alert-based success message
- 💅 Responsive and styled with Tailwind CSS

---

## 🛠️ Tech Stack

| Tool/Tech         | Purpose                     |
|-------------------|-----------------------------|
| React.js (Hooks)  | Frontend Framework          |
| Tailwind CSS      | Styling & Layout            |
| Lucide React      | Icon Library                |
| JavaScript        | Core logic and UI behavior  |

---

## 📁 Project Structure

📦 project-root/
├── public/
│ └── logo.svg
├── src/
│ ├── data/
│ │ └── mockData.js
│ ├── utils/
│ │ └── calculations.js
│ ├── App.js
│ ├── App.css
│ ├── App.test.js
│ ├── CartItem.js
│ ├── ConfirmationPage.js
│ ├── ConfirmationPage.css
│ ├── LoyaltySection.js
│ ├── OrderSummary.js
│ ├── OrderSummary.css
│ ├── index.js
│ ├── index.css
│ ├── reportWebVitals.js
│ └── setupTests.js
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── postcss.config.js
└── tailwind.config.js

📦 Application Flow
🛍️ Order Summary
Static cart items rendered via CartItem.js

Redeem loyalty points in LoyaltySection.js

Calculates subtotal, discount, and final amount

Styled via OrderSummary.css

✅ Confirmation Page
Displays item breakdown and payment summary

User can go back or confirm order

On confirmation, a success alert is shown

Styled via ConfirmationPage.css

💻 How to Run Locally
bash
Copy
Edit
# Step 1: Clone the repository
git clone https://github.com/your-username/primo-fiscal-pos.git
cd primo-fiscal-pos

# Step 2: Install dependencies
npm install

# Step 3: Start the development server
npm start

# Step 4: Open in your browser
http://localhost:3000

🙋‍♂️ About the Developer
Aman Bhavsar
Frontend Developer | React | Firebase | Tailwind | Flutter
