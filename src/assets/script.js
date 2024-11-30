let cover = document.querySelector('#cover');
let cont = document.querySelector('#content');

let btn = document.querySelector('#cover button');


btn.addEventListener('click', ()=>{
    cover.classList.add('hidden');
    cont.classList.remove('hidden');
})