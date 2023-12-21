const menubarsBtn = document.querySelector('.menu_bars');
const cardsContainer = document.querySelector('.cards_container');


menubarsBtn.addEventListener("click", displaySideMenu);

function transformacionX(x)
{
    x.classList.toggle("change");
}

function displaySideMenu()
{
    const body = document.querySelector('body');
    const header = document.querySelector('header');

    header.classList.toggle("active");
    body.classList.toggle("active");
}

const produrctInfo = [];
produrctInfo.push({
    name: 'Product',
    price: 5,
    image: 'images/no-image.jpg'
});

function productsRender(x)
{
    for(product of x)
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product_card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    }
}