const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const nav = document.getElementById('nav');
const modal = document.getElementById('modal');

toggle.addEventListener('click', function(e){
    document.body.classList.toggle('show-nav');
});
let o = -1;
open.addEventListener('click', ()=>{
    modal.classList.add('modal-container-show');
    modal.classList.remove('modal-container');
    o = 1;
});

close.addEventListener('click', () => {
    modal.classList.add('modal-container');
    modal.classList.remove('modal-container-show');
    o = 0;
});

window.addEventListener('click', (e)=>{
    if(e.target != modal){
    }
    else{
        
        modal.classList.add('modal-container');
        modal.classList.remove('modal-container-show');
        console.log(0);
    }
});