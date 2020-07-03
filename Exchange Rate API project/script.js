const currencyEl_one = document.getElementById('country-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('country-two');
const amountEl_two = document.getElementById('amount-two');

const swap = document.getElementById('btn');

currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);

function calculate(){
    const country = currencyEl_one.value;
    const country2 = currencyEl_two.value;
    fetch(`https://api.exchangeratesapi.io/latest?base=${country}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[country2];
        amountEl_two.value = (rate * amountEl_one.value).toFixed(3);
    })
}

swap.addEventListener('click', swapFun);

function swapFun(){
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
}