const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = parseInt(movieSelect.value);

console.log(ticketPrice);

function update_count(){
    const cnt = document.querySelectorAll('.row .seat.selected');
    count.innerHTML = cnt.length;
    total.innerHTML = cnt.length * ticketPrice;
}

function local_store(){
    const select = document.querySelectorAll('.row .seat.selected');
    const index = [...select].map(function(seat){
        return [...seats].indexOf(seat);
    })
    console.log(index);
}




movieSelect.addEventListener('change', (e)=> {
    ticketPrice = e.target.value;
    update_count();
})

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        update_count();
    }
    local_store();
})