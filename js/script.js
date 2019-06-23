const mapButton = document.querySelector('.contacts-map');
const mapModal = document.querySelector('.modal-map-full');
const closeMapModalButton = document.querySelector('.modal-close-map');

mapButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (!mapModal.classList.contains('modal-show')) {
    mapModal.classList.add('modal-show');
  }  
});

const writeUsButton = document.querySelector('.contacts-write-us');
const writeUsModal = document.querySelector('.modal-write-us');
const closeWriteUsModalButton = document.querySelector('.modal-close-write');

const writeUsContainer = document.querySelector('.modal-write-container');
const writeUsForm = document.querySelector('.write-us-form');
const name = writeUsForm.querySelector('.name');
const email = writeUsForm.querySelector('.email');
const message = writeUsForm.querySelector('.message-text');
const writeUsFormSubmit = writeUsForm.querySelector('.write-us-button');

writeUsButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (!writeUsModal.classList.contains('modal-show')) {
    writeUsModal.classList.add('modal-show');
  }
  name.focus();
});

writeUsFormSubmit.addEventListener('click', (event) => {
  if (!name.value || !email.value || !message.value) {
      event.preventDefault();
      writeUsContainer.classList.remove("modal-error");
      writeUsContainer.offsetWidth = writeUsContainer.offsetWidth;
      writeUsContainer.classList.add('modal-error');
  }
});

const itemsList = document.querySelector('.catalog-items');
const cart = document.querySelector('.header-cart');
const bookmarks = document.querySelector('.header-bookmarks');

itemsList.addEventListener('click', (element) => {
  if (element.target.classList.contains('item-in-cart')) {
    event.preventDefault();
    if (!cart.classList.contains('not-empty')) {
      cart.classList.add('not-empty');
    }
    const cartCount = Number(document.getElementById('cart').innerHTML) + 1;
    document.getElementById('cart').innerHTML = cartCount;
  } else if (element.target.classList.contains('item-in-bookmarks')) {
      event.preventDefault();
      if (!bookmarks.classList.contains('not-empty')) {
        bookmarks.classList.add('not-empty');
      }
      const bookmarksCount = Number(document.getElementById('bookmarks').innerHTML) + 1;
      document.getElementById('bookmarks').innerHTML = bookmarksCount;     
  }
});

closeMapModalButton.addEventListener('click', () => {
  mapModal.classList.remove('modal-show');
});

closeWriteUsModalButton.addEventListener('click', () => {
  writeUsModal.classList.remove('modal-show');
  writeUsContainer.classList.remove('modal-error');
})

const modals = document.querySelectorAll('.modal');

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    writeUsContainer.classList.remove('modal-error');
    Array.from(modals).forEach((modal) => {
      if (modal.classList.contains('modal-show')) {
        modal.classList.remove('modal-show');
      }
    });
  }
});  
