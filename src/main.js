number_of_row=0;
number_of_column=0;
let addrow=document.getElementById('row');
let addcolumn=document.getElementById('column');
let adddiv=document.getElementById('div');
addrow.addEventListener('click',addingrow)
function addingrow(){
    number_of_row++
    let main_section=document.querySelector('.main-section')
    main_section.setAttribute('style',`grid-template-rows:repeat(${number_of_row},1fr);grid-template-columns: repeat(${number_of_column},1fr)`)
}


addcolumn.addEventListener('click',addingcolumn)
function addingcolumn(){
    number_of_column++
    let main_section=document.querySelector('.main-section')
    main_section.setAttribute('style',`grid-template-columns: repeat(${number_of_column},1fr);grid-template-rows:repeat(${number_of_row},1fr)`)
}


adddiv.addEventListener('click',addingdiv)
function addingdiv(){
    let main_section=document.querySelector('.main-section')
    main_section.innerHTML=main_section.innerHTML+'<div></div>'

    
}
