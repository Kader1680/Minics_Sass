


// Scroll To The Top

let Top = document.querySelector('.top')
let blk = document.querySelector('.blk')

window.onscroll = () =>{

    // console.log(this.scrollY)

    this.scrollY >= 2200 ? Top.classList.add('blk') : Top.classList.remove('blk')

}

Top.addEventListener('click', ()=>{
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    }
        
        
        
    )
})

// Blog Sign Up

let sign = document.querySelector('.sign_up')
let sign_block = document.querySelector('.block')

sign.addEventListener('click', ()=>{
    sign.classList.toggle('block')
})

// add effect color star 
let list_star = document.querySelectorAll('.star i')
let stcolor = document.querySelector('.stcolor')

list_star.forEach(el => {
    el.addEventListener('click', ()=>{
        el.classList.toggle("stcolor")
        
    })
});

// menu filter

let FilterBar = document.querySelector('.FilterBar')
let move = document.querySelector('.move')
let key = document.querySelector('.key')
let keyv = document.querySelector('.keyvis')


key.addEventListener('click', ()=>{
    FilterBar.classList.toggle('move')
    key.classList.toggle('keyvis')

})



// scrool into element page

let about = document.querySelector('.about')
let banding = document.querySelector('.banding')



window.onscroll = () =>{
    console.log(window.scrollY)

    if (window.scrollY > 1955) {
        about.classList.add('abtshow')
    } else {
        about.classList.remove('abtshow')
        
    }
    if (window.scrollY > 3000) {
        banding.classList.add("bdgBlock")
    } else {
        banding.classList.remove("bdgBlock")
        
    }

}




// key.addEventListener('click', show)
// function show() {
//     // FilterBar.classList.toggle('filtervis')
//     .classList.add('keyvis')
//     // alert('rrrrrrrrr')
// }


// Filter section

// let one = document.getElementById('one')
// let two = document.getElementById('two')
// let three = document.getElementById('three')
// // let non = document.querySelector('.non')
// let item = document.querySelectorAll('.switetch li')
// let boxs = document.querySelectorAll('.filterbar div')
// let act = document.querySelector('.active')




// item.forEach((li) => {
//     li.addEventListener('click', ACTIVE)
//     li.addEventListener('click', Manage)
// });


// function ACTIVE() {
    
//     item.forEach((li) => {
//         li.classList.remove('active')
//         this.classList.add('active')
        
//     });
    
// }

// function Manage() {
//     boxs.forEach(item => {
//         item.style.display = "none"
//     });
//     document.querySelectorAll(this.dataset.cat).forEach((item) =>{
//         item.style.display = "block"
//     })
// }


// let boxs = document.querySelectorAll('.filterbar div')

// one.onclick = function () {
    
//     boxs[1].style.display = "none"
//     // boxs[1].style.visibility = 'hidden'
//     boxs[6].style.display = "none"
//     boxs[8].style.display = "none"
// }
// two.onclick = function () {
    
//     boxs[2].style.display = "none"
//     boxs[4].style.display = "none"
//     boxs[7].style.display = "none"
// }
// three.onclick = function () {
    
//     boxs[5].style.display = "none"
//     boxs[3].style.display = "none"
//     boxs[0].style.display = "none"
// }

// let op = Array.from(Image)

