const basePrice = parseInt(document.getElementById('base-price').innerHTML);

function updatePrice() {
    const sizeButtons = document.querySelectorAll('.size.selected');
    const toppingButtons = document.querySelectorAll('.topping.selected');

    let totalPrice = basePrice;

    sizeButtons.forEach(button => {
        totalPrice += parseInt(button.getAttribute('data-price'));
    });

    toppingButtons.forEach(button => {
        totalPrice += parseInt(button.getAttribute('data-price'));
    });

    document.getElementById('total').textContent = totalPrice.toLocaleString() + ' đ';
}

document.querySelectorAll('.size').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.size').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        updatePrice();
    });
});

document.querySelectorAll('.topping').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.topping').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        updatePrice();
    });
});