let close = document.getElementById("Close");
let nav = document.getElementById("nav-menu");
let dot = document.getElementById("dot");


 

    dot.addEventListener('click',()=>{
        nav.classList.add('active');
    });
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    }); 
