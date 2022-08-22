let list_star = document.querySelectorAll('.star i')
let stcolor = document.querySelector('.stcolor')

list_star.forEach(el => {
    el.addEventListener('click', ()=>{
        alert('fff')
    })
});

// Scroll To The Top

let Top = document.querySelector('.top')
let blk = document.querySelector('.blk')


window.onscroll = () =>{

    // console.log(this.scrollY)

    if (this.scrollY >= 2200) {

        Top.classList.add('blk')

    } else {
        Top.classList.remove('blk')
        
    }
}



