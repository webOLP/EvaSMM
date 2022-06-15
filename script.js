const servicesList = document.querySelector('.servicesList');
const servicesItems = servicesList.querySelectorAll('.servicesItem');
let lastItem;
let lastItemText;
let counterOpenItems = 0;
let lastItemPrice;
let imgFullCount = 0;

const imgs = document.querySelectorAll('.portfolioImgBack');


for (let i = 0; i < servicesItems.length; i++) {
    servicesItems[i].addEventListener('click', toggleActiveItem)
}

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', imgFull)
}

function toggleActiveItem(event) {
    if (counterOpenItems === 0) {
        event.currentTarget.querySelector('.servicesItemSubtitle').classList.add('active');
        event.currentTarget.querySelector('.servicesItemPrice').classList.add('active');
        lastItem = event.currentTarget;
        lastItemText = lastItem.querySelector('.servicesItemSubtitle');
        lastItemPrice = lastItem.querySelector('.servicesItemPrice');
        counterOpenItems = 1;
    } else {
        if (lastItem === event.currentTarget) {
            lastItemText.classList.remove('active');
            lastItemPrice.classList.remove('active');
            counterOpenItems = 0;
        } else {
            lastItemText.classList.remove('active');
            lastItemPrice.classList.remove('active');
            event.currentTarget.querySelector('.servicesItemSubtitle').classList.toggle('active');
            event.currentTarget.querySelector('.servicesItemPrice').classList.toggle('active');
            lastItem = event.currentTarget;
            lastItemText = lastItem.querySelector('.servicesItemSubtitle');
            lastItemPrice = lastItem.querySelector('.servicesItemPrice')
            counterOpenItems = 1;
        }
    }
}

function imgFull(event) {
    
    console.log(event.target,'  ', event.currentTarget)
    event.currentTarget.classList.toggle('activeImg');
    event.target.style.height = '90vh';
    if(imgFullCount == 0 ) {
        event.target.style.height = '90vh';
        imgFullCount = 1;
    }
        else {
        event.target.style.height = '100%' 
        imgFullCount = 0;
        }
}