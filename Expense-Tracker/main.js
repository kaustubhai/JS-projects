const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')
const btnDel = document.getElementById('del')

const localStorageT = JSON.parse(localStorage.getItem('transaction'))

const dummyTransaction = [
    {id: 0, text: 'Flower', amount: 20},
    {id: 1, text: 'Cash', amount: -200},
    {id: 2, text: 'Salary', amount: 700},
    {id: 3, text: 'Watch', amount: -200},
    {id: 4, text: 'Dress', amount: -50},
]

let transaction = localStorageT === null ? dummyTransaction : localStorageT

const addTransaction = (e) => {
    e.preventDefault();
    if (text.value.trim() === '' || amount.value.trim() === '')
        alert('Please Enter valid value in the forms to submit your transaction')
    else {
        newTransact = { id: transaction.length, text: text.value.trim(), amount: parseFloat(amount.value.trim()) }
        transaction.push(newTransact)
        updateLocalStorage()
        init()
    }
}

const deleteTransaction = (id) => {
    transaction = transaction.filter(trans => trans.id !== id)
    console.log(id)
    updateLocalStorage()
    init()
}

const addTransactionDOM = (transaction) => {
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li')

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

    item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button id="del" onClick=(deleteTransaction(${transaction.id})) class="delete-btn">X</button>`

    list.appendChild(item)   
}

const updateValues = () => {
    let amount = transaction.map(trans => trans.amount)
    const total = amount.reduce((a, b) => a + b).toFixed(2)
    
    const income = amount.filter((amt) => amt > 0)
        .reduce((a, b) => a + b)
        .toFixed(2)
    
    const expense = ((amount.filter((amt) => amt < 0)
    .reduce((a, b) => a + b)
        ) * (-1)).toFixed(2)
    
    balance.innerHTML = `₹${total}`;
    money_plus.innerHTML = `₹${income}`
    money_minus.innerHTML = `₹${expense}`
}

const updateLocalStorage = () => {
    console.log(localStorageT)
    localStorage.setItem('transaction', JSON.stringify(transaction))
}

const init = () => {
    list.innerHTML = '';
    transaction.forEach((trans) => addTransactionDOM(trans))
    updateValues()
}

init()

form.addEventListener('submit', addTransaction)