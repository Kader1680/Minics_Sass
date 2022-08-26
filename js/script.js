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

    this.scrollY >= 2200 ? Top.classList.add('blk') : Top.classList.remove('blk')

}

// Top.addEventListener('click', ()=>{
//     window.scrollTo(
//         top = 0,
        
        
//     )
// })

// Blog Sign Up

let sign = document.querySelector('.sign_up')
let sign_block = document.querySelector('.block')

sign.addEventListener('click', ()=>{
    sign.classList.toggle('block')
})



// Onload to Sign up

