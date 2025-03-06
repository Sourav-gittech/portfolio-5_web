let navbar = document.querySelector('.navbar');

window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 20){
        navbar.classList.add('shadow-sm');
    }
    else{
        navbar.classList.remove('shadow-sm');
    }
}