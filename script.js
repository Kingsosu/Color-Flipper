const menuToggle = document.querySelector('nav button.bars');
const closeToggle = document.querySelector('nav button.cancel');
const menu = document.querySelector('nav ul');

menuToggle.addEventListener('click', ()=>{
    menu.classList.add('active');

    if(menu.classList.contains('active')){
        menu.style.display = 'block';
        closeToggle.style.display = 'block';
        menuToggle.style.display = 'none';
    }
});

closeToggle.addEventListener('click', ()=>{
    
    menu.classList.remove('active');

    if(menu.classList.contains('active')){
    }
    else{
        menu.style.display = 'none';
        closeToggle.style.display = 'none';
        menuToggle.style.display = 'block';
    }
});
