number_of_row=0;
number_of_column=0;
let addrow=document.getElementById('row');
let addcolumn=document.getElementById('column');
addrow.addEventListener('click',addingrow)
function addingrow(){
    let main_section=document.querySelector('.main-section')
    main_section.innerHTML=main_section.innerHTML+'<div></div>'
    number_of_row++
    main_section.setAttribute('style',`grid-template-rows:repate(${number_of_row},1fr)`)
}


addcolumn.addEventListener('click',addingcolumn)

function addingcolumn(){
    let main_section=document.querySelector('.main-section')
    main_section.innerHTML=main_section.innerHTML+'<div></div>'
    number_of_column++
    main_section.setAttribute('style',`grid-template-columns:repate(${number_of_column},1fr)`)
}