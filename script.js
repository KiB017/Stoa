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