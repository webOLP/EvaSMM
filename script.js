const servicesList = document.querySelector('.servicesList');
const servicesItems = servicesList.querySelectorAll('.servicesItem');
let lastItem;
let lastItemText;
let counterOpenItems = 0;
let lastItemPrice;



for (let i = 0; i < servicesItems.length; i++) {
    servicesItems[i].addEventListener('click', toggleActiveItem)
}

function toggleActiveItem(event) {
    if (counterOpenItems === 0) {
        event.currentTarget.querySelector('.servicesItemSubtitle').classList.add('active');
        event.currentTarget.querySelector('.servicesItemPrice').classList.add('active');
        lastItem = event.currentTarget;
        lastItemText = lastItem.querySelector('.servicesItemSubtitle');
        lastItemPrice = lastItem.querySelector('.servicesItemPrice');
        counterOpenItems = 1;
        console.log('nachalo ',lastItem, lastItemText, counterOpenItems);
    } else {
        if (lastItem === event.currentTarget) {
            lastItemText.classList.remove('active');
            lastItemPrice.classList.remove('active');
            counterOpenItems = 0;
            console.log('odinakovie ',lastItem, lastItemText, counterOpenItems);
        } else {
            lastItemText.classList.remove('active');
            lastItemPrice.classList.remove('active');
            event.currentTarget.querySelector('.servicesItemSubtitle').classList.toggle('active');
            event.currentTarget.querySelector('.servicesItemPrice').classList.toggle('active');
            lastItem = event.currentTarget;
            lastItemText = lastItem.querySelector('.servicesItemSubtitle');
            lastItemPrice = lastItem.querySelector('.servicesItemPrice')
            counterOpenItems = 1;
            console.log('konec ',lastItem, lastItemText, counterOpenItems);
        }
    }
}

