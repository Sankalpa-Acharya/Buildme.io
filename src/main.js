//If you are reading the code ,message for you 'Code is not written in proper manner so just use application'


//selecting all the menu buttons and setting their values to use 
number_of_row=0;
number_of_column=0;
number_of_div=0;
let grabed=false;
let selected=''
let view=false;
let changed=false;
let addrow=document.getElementById('row');
let addcolumn=document.getElementById('column');
let adddiv=document.getElementById('div');
let del=document.getElementById('delete');
let grab=document.getElementById('grab');
let pre_view=document.getElementById('see');
let top_section=document.querySelector('.top-section');
let save=document.querySelector('#save');
let topping=document.querySelector('.top');
let data_save=document.querySelector('.save');
let row=''
let column=''
let row_column=document.getElementById('row-column');


topping.addEventListener('click',removeborder)





addrow.addEventListener('click',addingrow)
function addingrow(){
    row=row+'1fr '
    number_of_row+=1;
    let main_section=document.querySelector('.main-section')
    main_section.setAttribute('style',`grid-template-rows:${row};grid-template-columns:${column}`)
    row_column.innerText=`${number_of_row}x${number_of_column}`
}

//now you will get all event listener
addcolumn.addEventListener('click',addingcolumn)
function addingcolumn(){
    column=column+'1fr '
    number_of_column+=1;
    let main_section=document.querySelector('.main-section')
    main_section.setAttribute('style',`grid-template-columns:${column};grid-template-rows:${row}`);
    row_column.innerText=`${number_of_row}x${number_of_column}`
}


adddiv.addEventListener('click',addingdiv);
function addingdiv(){
    number_of_div++
    let main_section=document.querySelector('.main-section')
    main_section.innerHTML=main_section.innerHTML+`<div class='items' id='item-${number_of_div}'></div> \n`

    
}


del.addEventListener('click',deleted);
function deleted(){
    let main_section=document.querySelector('.main-section');
    if(number_of_row==0 && number_of_column==0){
        
        main_section.removeChild(main_section.lastElementChild);
        number_of_div=number_of_div-1
        
    }
    else if(number_of_row==0){
        column=column.replace('1fr ','')
        number_of_column-=1
        main_section.removeChild(main_section.lastElementChild);
        main_section.setAttribute('style',`grid-template-columns:  ${column};grid-template-rows:${row}`);
        number_of_div=number_of_div-1
        row_column.innerText=`${number_of_row}x${number_of_column}`
    }
    else if(number_of_column==0){
        row=row.replace('1fr ','')
        number_of_row-=1;
        main_section.setAttribute('style',`grid-template-columns:  ${column};grid-template-rows:${row}`);   
        main_section.removeChild(main_section.lastElementChild);
        number_of_div=number_of_div-1
        row_column.innerText=`${number_of_row}x${number_of_column}`
    }
    else{
        number_of_column-=1;
        number_of_row-=1;
        row=row.replace('1fr ','')
        column=column.replace('1fr ','')
        number_of_div-=1;
        main_section.removeChild(main_section.lastElementChild);
        main_section.setAttribute('style',`grid-template-columns:  ${column};grid-template-rows:${row}`);
        row_column.innerText=`${number_of_row}x${number_of_column}`
    }
    

}



grab.addEventListener('click',grabbing);
function grabbing(){
      grabed=true;
      document.getElementById('grab').style.backgroundColor='#3d3c3cc4'


}



let main_section=document.querySelector('.main-section');
main_section.addEventListener('click',(e)=>{

    if(e.target.className=='items'){
        if(grabed==true){
        grabed=false;
        selected=e.target.id
        document.querySelector('.pop-up').style.top='20%';
        document.getElementById('grab').style.backgroundColor='#222222c4'
        
    }

    }

})

pre_view.addEventListener('click',viewing);

function viewing(){
   let see=document.getElementById('pre-view');
   let main=document.querySelector('.main-section');
    see.innerHTML=main.innerHTML;
    see.setAttribute('style',`grid-template-columns: ${column};grid-template-rows:${row};top:0px;`)
}

let allset=document.getElementById('pre-view');
allset.addEventListener('click',allseeing);

function allseeing(){
    document.getElementById('pre-view').style.top='1000px'
}


top_section.addEventListener('click',removeborder);
function removeborder(){
    let div=document.querySelectorAll('.items');
    div.forEach(element => {
        element.removeAttribute('style');
        selected=''
        document.getElementById('grab').style.backgroundColor='#222222c4'
        document.querySelector('.pop-up').style.top='-400px'

        
        
    });
}


save.addEventListener('click',saving)
function saving(){
    let cr=document.getElementById('cr').value;
    let size=document.getElementById('size').value;
    cr=cr.split('');
   try{
      let num_value=parseInt(cr[0]);      
        if(cr[1]=='C' ){
            let columnarray=column.split(' ')
            if((columnarray.length)-1>=num_value){
           columnarray[num_value-1]=`${size}`
            column=columnarray.join(' ')
            main_section.setAttribute('style',`grid-template-columns:  ${column};grid-template-rows:${row}`);
            }

        }
    
    
    
    else if(cr[1]=='R'){
        console.log('R')
        let columnarray=row.split(' ')
        if((columnarray.length)-1>=num_value){
       columnarray[num_value-1]=`${size}`
        row=columnarray.join(' ')
        main_section.setAttribute('style',`grid-template-columns:  ${column};grid-template-rows:${row}`);
        }

    }


    }catch(error){
        console.error(error)
    }
}




data_save.addEventListener('click',data_saved)

function data_saved(){


    document.querySelector('.pop-up').style.top='-400px'
    let grab=document.querySelector('.main-section');

    var values=document.getElementsByName('select');
    for(let i=0;i<=values.length;i++){
        if(values[i].checked){
            if(values[i].value=='row'){
            var start=document.getElementById('start').value;
            var end=document.getElementById('end').value;
           let element= document.getElementById(selected);
           let css_value=getComputedStyle(element).gridColumn
           element.setAttribute('style',`grid-row:${start}/${end};grid-column:${css_value}`);
           break
        }
        else{
            var start=document.getElementById('start').value;
            var end=document.getElementById('end').value;
            let element= document.getElementById(selected);
            let css_value=getComputedStyle(element).gridRow;
            element.setAttribute('style',`grid-row:${css_value};grid-column:${start}/${end}`)
            break
        }
    }
}
    
}



document.querySelector('.download').addEventListener('click',()=>{

    var html= `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Buildme.io(BEST CSS GRID GENERATOR)</title>
        <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
        }

        body{
            overflow-x:hidden;
        }
        .main-section{
            display:grid;
            width:100vw;
            height:100vh;
            grid-gap:3px;
            overflow-x:hidden;
            padding:3px;
        }
        .main-section div{
            border:2px solid red;
            background-color:#0066ff61;
        }
        .main-section > div:nth-child(odd){
            background-color:#10258861;
        }
        </style>
    </head>
    <body>
       <!-- Code BY BULDME.io  -->
        ${document.querySelector('.main-section').outerHTML}
        </body>
        </html>`

    arr= new Uint8Array(html.length);
html.split("").forEach(function(a,b){
	arr[b]=a.charCodeAt();
});
   
 
download( arr, "index.html", "text/html" );



})
