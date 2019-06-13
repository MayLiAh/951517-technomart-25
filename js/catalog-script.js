const itemsList = document.querySelector('.catalog-items');
const cartModal = document.querySelector('.modal-item-in-cart')
const closeCartModalButton = document.querySelector('.modal-close-cart');
const returnToCatalogButton = document.querySelector('.return-to-catalog');
const cart = document.querySelector('.header-cart');
const bookmarks = document.querySelector('.header-bookmarks');

itemsList.addEventListener('click', (element) => {
  if (element.target.classList.contains('item-in-cart')) {
    event.preventDefault();
    if (!cartModal || !cartModal.classList.contains('modal-show')) {
      if (!cart.classList.contains('not-empty')) {
        cart.classList.add('not-empty');
      }
      const cartCount = Number(document.getElementById('cart').innerHTML) + 1;
      document.getElementById('cart').innerHTML = cartCount;
      if (cartModal) {
        cartModal.classList.add('modal-show');
      }
    }      
  } else if (element.target.classList.contains('item-in-bookmarks')) {
      event.preventDefault();
      if (!cartModal || !cartModal.classList.contains('modal-show')) {
       if (!bookmarks.classList.contains('not-empty')) {
        bookmarks.classList.add('not-empty');
        }
        const bookmarksCount = Number(document.getElementById('bookmarks').innerHTML) + 1;
        document.getElementById('bookmarks').innerHTML = bookmarksCount; 
      }      
  }
});

const modals = document.querySelectorAll('.modal');

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    Array.from(modals).forEach((modal) => {
      if (modal.classList.contains('modal-show')) {
        modal.classList.remove('modal-show')
      }
    });
  }
});

closeCartModalButton.addEventListener('click', () => {
  cartModal.classList.remove('modal-show');
});
  
returnToCatalogButton.addEventListener('click', (event) => {
  event.preventDefault();
  cartModal.classList.remove('modal-show');
});