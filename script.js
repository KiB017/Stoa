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
    const section = document.querySelector('section');

    header.classList.toggle("active");
    body.classList.toggle("active");
    section.classList.toggle("active");
}

const productInfo = [];
productInfo.push({
    name: 'Product',
    price: 5,
    image: 'images/no-image.jpg'
});

productInfo.push({
    name: 'Product 1',
    price: 10,
    image: 'images/no-image.jpg'
});

productInfo.push({
    name: 'Product 3',
    price: 100,
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

        const productDetails = document.createElement('div');
        productDetails.classList.add('product_details');

        const productDetailsDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productDetailsDiv.appendChild(productPrice);
        productDetailsDiv.appendChild(productName);

        const productDetailsFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', 'images/add-product-figure.svg');

        productDetailsFigure.appendChild(productImgCart);

        productDetails.appendChild(productDetailsDiv);
        productDetails.appendChild(productDetailsFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productDetails);

        cardsContainer.appendChild(productCard);
    }
}

productsRender(productInfo);