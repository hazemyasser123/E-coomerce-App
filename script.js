const bar = document.getElementById('hamburgermenu')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
// bar.addEventListener('click' , () => {
//     // if(nav.style.right !=== 0)

//     // nav.style.right = 0;
// })

if(bar){
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click' , () => {
        nav.classList.remove('active');

    })
}
