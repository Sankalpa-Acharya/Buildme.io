let rem=document.querySelector('.rem')
let vm=document.querySelector('.vm')
let pixel=document.querySelector('.px')
rem.addEventListener('click',()=>{
    let vm=document.querySelector('.vm');
    let pixel=document.querySelector('.px');
    vm.setAttribute('style','color:black')
    pixel.setAttribute('style','color:black')
    rem.setAttribute('style','color:green;')
})




vm.addEventListener('click',()=>{
    let rem=document.querySelector('.rem');
    let pixel=document.querySelector('.px');
    rem.setAttribute('style','color:black')
    pixel.setAttribute('style','color:black')
    vm.setAttribute('style','color:green;') 
})


pixel.addEventListener('click',()=>{
    let rem=document.querySelector('.rem');
    let vm=document.querySelector('.vm');
    rem.setAttribute('style','color:black')
    vm.setAttribute('style','color:black')
    pixel.setAttribute('style','color:green;') 
})