number_of_row=0;
number_of_column=0;
number_of_div=0;
let addrow=document.getElementById('row');
let addcolumn=document.getElementById('column');
let adddiv=document.getElementById('div');
let del=document.getElementById('delete')
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
    main_section.setAttribute('style',`grid-template-columns: repeat(${number_of_column},1fr);grid-template-rows:repeat(${number_of_row},1fr)`);
}


adddiv.addEventListener('click',addingdiv);
function addingdiv(){
    number_of_div++
    let main_section=document.querySelector('.main-section')
    main_section.innerHTML=main_section.innerHTML+`<div class='items' id='item-${number_of_div}'></div>`

    
}


del.addEventListener('click',deleted);
function deleted(){
    let main_section=document.querySelector('.main-section');
    if(number_of_row==0 && number_of_column==0){
        
        main_section.removeChild(main_section.lastElementChild);
        
    }
    else if(number_of_row==0){
        number_of_column=number_of_column-1
        main_section.removeChild(main_section.lastElementChild);
        main_section.setAttribute('style',`grid-template-columns: repeat(${number_of_column},1fr);grid-template-rows:repeat(${number_of_row},1fr)`);
    }
    else if(number_of_column==0){
        main_section.removeChild(main_section.lastElementChild);
        number_of_row=number_of_row-1
        main_section.setAttribute('style',`grid-template-columns: repeat(${number_of_column},1fr);grid-template-rows:repeat(${number_of_row},1fr)`);   
    }
    else{
        
        number_of_row=number_of_row-1
        number_of_column=number_of_column-1
        main_section.removeChild(main_section.lastElementChild);
        main_section.setAttribute('style',`grid-template-columns: repeat(${number_of_column},1fr);grid-template-rows:repeat(${number_of_row},1fr)`);
    }
    

}




let main_section=document.querySelector('.main-section');
main_section.addEventListener('click',(e)=>{

    if(e.target.className=='items'){
        //do somethings
    }

})


//made by sankalpa acharya 
