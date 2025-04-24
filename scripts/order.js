import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { cart,addToCart,calculateCartQuantity } from './../data/cart.js';
import { products, getProduct } from './../data/products.js';
import { deliveryOptions, getDeliveryOption } from './../data/deliveryOptions.js';

export function renderOrdersByDeliveryDate() {
  const itemsByDeliveryDate = {};
  
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);
    const deliveryOptionId = cartItem.deliveryOptionId;
    const deliveryOption = getDeliveryOption(deliveryOptionId);
    
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    const dateString = deliveryDate.format('YYYY-MM-DD');
    
    const dateHash = dateString.replace(/-/g, '');
    
    // Initialize this date group if it doesn't exist
    if (!itemsByDeliveryDate[dateHash]) {
      itemsByDeliveryDate[dateHash] = {
        date: dateString,
        formattedDate: deliveryDate.format('dddd, MMMM D'),
        items: []
      };
    }
    
    // Add this item to the appropriate date group
    itemsByDeliveryDate[dateHash].items.push({
      productId,
      product: matchingProduct,
      quantity: cartItem.quantity,
      deliveryOptionId
    });
  });
  
  const sortedDateGroups = Object.values(itemsByDeliveryDate).sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  
  let ordersHTML = '';
  
  sortedDateGroups.forEach((group) => {
    ordersHTML += `
      <div class="order-container js-order-container-${group.date.replace(/-/g, '')}">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Arriving on:</div>
              <div>${group.formattedDate}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Items:</div>
              <div>${group.items.length}</div>
            </div>
          </div>
        </div>

        <div class="order-details-grid">
    `;
    
    group.items.forEach((item) => {
      ordersHTML += `
        <div class="product-image-container">
          <img src="${item.product.image}">
        </div>

        <div class="product-details">
          <div class="product-name">
            ${item.product.name}
          </div>
          <div class="product-quantity">
            Quantity: ${item.quantity}
          </div>
          <button class="buy-again-button button-primary" data-product-id="${item.productId}">
            <img class="buy-again-icon" src="images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>

        <div class="product-actions">
            <button class="track-package-button button-secondary">
              Track package
            </button>
          </a>
        </div>
      `;
    });
    
    ordersHTML += `
        </div>
      </div>
    `;
  });
  
  // Update the page with the generated HTML
  document.querySelector('.orders-grid').innerHTML = ordersHTML;
  const cartValueSelector = document.querySelector(`.js-cart-quantity`);
        cartValueSelector.innerHTML = calculateCartQuantity();
  
  // Add event listeners for the "Buy it again" buttons
  setupBuyAgainButtons();
}

// Function to set up "Buy it again" buttons
function setupBuyAgainButtons() {
  document.querySelectorAll('.buy-again-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
      addToCart(productId);
        const cartValueSelector = document.querySelector(`.js-cart-quantity`);
        cartValueSelector.innerHTML = calculateCartQuantity();
      
    });
  });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', renderOrdersByDeliveryDate);
