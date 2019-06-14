function getInternetExplorerVersion()
{
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

alert(getInternetExplorerVersion());

const mapButton = document.querySelector('.contacts-map');
const mapModal = document.querySelector('.modal-map-full');
const closeMapModalButton = document.querySelector('.modal-close-map');

mapButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (!mapModal.classList.contains('modal-show')) {
    mapModal.classList.add('modal-show');
  }  
});

const writeUsButtom = document.querySelector('.contacts-write-us');
const writeUsModal = document.querySelector('.modal-write-us');
const closeWriteUsModalButton = document.querySelector('.modal-close-write');

writeUsButtom.addEventListener('click', (event) => {
  event.preventDefault();
  if (!writeUsModal.classList.contains('modal-show')) {
    writeUsModal.classList.add('modal-show');
  }  
});

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

closeMapModalButton.addEventListener('click', () => {
  mapModal.classList.remove('modal-show');
});

closeWriteUsModalButton.addEventListener('click', () => {
  writeUsModal.classList.remove('modal-show');
})

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