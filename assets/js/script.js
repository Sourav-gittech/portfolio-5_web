// show / hide navbar on scroll 
let navbar = document.querySelector('.navbar');

window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 20){
        navbar.classList.add('shadow-sm');
    }
    else{
        navbar.classList.remove('shadow-sm');
    }
}


// counter design 
document.addEventListener('DOMContentLoaded', () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter('count1', 0, 100, 3000);
    counter('count2', 0, 90, 3000);
    counter('count3', 0, 95, 3000);
});
