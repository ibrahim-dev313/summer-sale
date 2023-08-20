let totalPrice = 0;
let discount = 0;
const cartListContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const discountElement = document.getElementById('discount');
const discountedTotalElement = document.getElementById('total');
const applyButton = document.getElementById('apply-button');
const couponInput = document.getElementById('coupon-input');






function handleAddToCart(card) {
    const productName = card.querySelector(".card-body h2").textContent;
    const li = document.createElement("li");
    li.innerText = productName;
    li.classList.add("list-decimal");
    cartListContainer.appendChild(li);

    const priceElement = card.querySelector(".card-body p span");
    const price = parseInt(priceElement.innerText);

    totalPrice = (totalPrice + price);
    totalPriceElement.innerText = totalPrice;
    discountElement.innerText = discount.toFixed(2);
    discountedTotalElement.innerText = (totalPrice - discount).toFixed(2)
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');

        applyButton.classList.remove('cursor-not-allowed', 'opacity-50');
        applyButton.classList.add('cursor-pointer')
    } else {
        applyButton.setAttribute('disabled', 'true');
        applyButton.classList.add('cursor-not-allowed', 'opacity-50');
    }
}

function applyCoupon() {
    // console.log(couponInput);
    if (totalPrice >= 200 && couponInput.value === 'SELL200') {
        discount = totalPrice * 0.2; // 20% discount
        discountElement.innerText = discount.toFixed(2);
        discountedTotalElement.innerText = (totalPrice - discount).toFixed(2)
    } else {
        // Reset discount and display
        discount = 0;
        discountElement.innerText = '0';
        discountedTotalElement.innerText = totalPrice.toFixed(2);
    }
}
function makePurchase() {
    const cartListContainer = document.getElementById('cart-items');
    const modal = document.getElementById('my_modal_1');
    const addItemsModal = document.getElementById('add_items_modal');

    // Check if any items are in the cart
    if (cartListContainer.children.length === 0) {
        addItemsModal.showModal(); // Show the "Add Items" modal
        return;
    }

    // Clear cart items and reset total price and discount
    cartListContainer.innerHTML = '';
    totalPrice = 0;
    discount = 0;

    totalPriceElement.innerText = '0.00 TK';
    discountElement.innerText = '0.00 TK';
    discountedTotalElement.innerText = '0.00 TK';

    applyButton.setAttribute('disabled', 'true');
    applyButton.classList.add('cursor-not-allowed', 'opacity-50');
    modal.showModal();
}

// Close the "Add Items" modal
document.getElementById('close-add-items-modal').addEventListener('click', function () {
    const addItemsModal = document.getElementById('add_items_modal');
    addItemsModal.close();
});


function closeModal() {
    const modal = document.getElementById('my_modal_1');
    modal.close();

    window.location.href = '/';
}

