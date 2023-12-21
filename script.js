const menubarsBtn = document.querySelector('.menu_bars');


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
    image: 'images\no-image.jpg'
});