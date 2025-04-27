# Amazon Clone Project

## Project Overview
This project is a modern, feature-rich Amazon clone built using vanilla JavaScript, HTML, and CSS. It simulates a real-world e-commerce platform, providing users with an intuitive and interactive shopping experience. The application includes product browsing, cart management, checkout, and order summary features, all styled to closely resemble Amazon's interface.

## Features
- **Product Catalog**: Browse a variety of products, each with images, names, and prices.
- **Shopping Cart**: Add, remove, and update product quantities in your cart with real-time feedback.
- **Delivery Options**: Choose from multiple delivery options for each product, dynamically updating delivery dates and prices.
- **Order Summary**: Get a detailed summary of your order, including pricing and selected delivery options.
- **Checkout Process**: Seamless checkout flow with payment summary integration.
- **Responsive Design**: Optimized for all devices, from desktop to mobile.
- **User Experience**: Smooth UI interactions, such as inline quantity editing, instant cart updates, and clear feedback.

## Technologies Used
- **HTML5 & CSS3**: For structure and styling
- **JavaScript (ES6+)**: For dynamic functionality and state management
- **Day.js**: For date formatting and manipulation

## Project Structure
```
javascript-amazon-project/
├── scripts/
│   ├── checkout/
│   │   ├── orderSummary.js      # Handles order summary logic and UI
│   │   └── ...                  # Other checkout scripts
│   ├── data/                    # Product, cart, and delivery data logic
│   └── utils/                   # Utility functions (e.g., money formatting)
├── styles/                      # CSS files for shared and page-specific styles
├── images/                      # Product and UI images
├── amazon.html                  # Main entry point
└── README.md                    # Project documentation
```

## How to Run
1. Clone the repository:
   ```
   git clone https://github.com/Singhkeshav4/javascript-amazon-project.git
   ```
2. Open `amazon.html` in your browser.

---

# Comparison with [SuperSimpleDev Lesson 18 Amazon Project](https://github.com/SuperSimpleDev/javascript-course/tree/main/2-copy-of-code/lesson-18)

## Improvements & Advantages

### 1. **Enhanced User Experience**
- **Inline Quantity Editing**: Unlike the reference project, this clone allows users to update product quantities directly within the cart, providing instant feedback and a more interactive experience.
- **Dynamic Delivery Options**: Users can select delivery options for each product, with real-time updates to delivery dates and order totals.
- **Immediate Cart & Payment Updates**: All changes (quantity, delivery, removal) instantly reflect in the order summary and payment section, reducing confusion and improving usability.

### 2. **Cleaner, Modular Codebase**
- **Separation of Concerns**: Logic for products, cart, delivery, and utilities is separated into distinct modules, making the codebase more maintainable and scalable.
- **Reusable Components**: Functions and UI components are designed for reusability, unlike the more monolithic approach in the reference project.

### 3. **Modern UI & Responsiveness**
- **Responsive Design**: Uses modern CSS and meta tags for a seamless experience across devices, while the reference project is less optimized for mobile.
- **Amazon-like Styling**: UI closely mimics the real Amazon site, including icons, layout, and feedback, for a more realistic feel.

### 4. **Additional Features**
- **Order Summary & Payment Integration**: Provides a complete checkout experience, not just a cart view.
- **Better Error Handling**: Includes input validation (e.g., quantity limits) and user-friendly alerts.

## Why This Project is Better
- **User-centric features**: More interactive, real-time updates, and a complete shopping flow.
- **Cleaner architecture**: Easier to extend and maintain.
- **Modern look and feel**: Closer to the real Amazon experience, with attention to detail in UI/UX.

---

## License
This project is open source and available under the MIT License.

## Acknowledgements
- Inspired by Amazon's interface and the SuperSimpleDev JavaScript Course.
- Created to demonstrate advanced front-end skills and best practices.
