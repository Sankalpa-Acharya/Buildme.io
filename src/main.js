//If you are reading the code ,message for you 'Code is not written in proper manner so just use application'
//  ^^ TRUE ^^

let rowCount = 0;
let columnCount = 0;
let divCount = 0;

let grabed = false;
let view = false;
let changed = false;

let selected = ''
let row = ''
let column = ''


let renderedView = document.getElementById('pre-view');
let main_section = document.querySelector('.main-section')

function addRow() {
    row = row + '1fr '
    rowCount++;

    main_section.setAttribute('style', `grid-template-rows:${row};grid-template-columns:${column}`)
    refreshRowColumnInfo()
}


function addColumn() {
    column = column + '1fr '
    columnCount++;
    main_section.setAttribute('style', `grid-template-columns:${column};grid-template-rows:${row}`);
    refreshRowColumnInfo()
}


function addDiv() {
    divCount++;
    main_section.innerHTML = main_section.innerHTML + `<div class='items' id='item-${divCount}'></div> \n`
}



function deleteDiv() {

    if (rowCount == 0 && columnCount == 0) {
        main_section.removeChild(main_section.lastElementChild);
        divCount--;
    } else if (rowCount == 0) {

        column = column.replace('1fr ', '')

        main_section.removeChild(main_section.lastElementChild);
        main_section.setAttribute('style', `grid-template-columns:  ${column};grid-template-rows:${row}`);

        columnCount--;
        divCount--;
        refreshRowColumnInfo()
    } else if (columnCount == 0) {
        row = row.replace('1fr ', '')
        rowCount--;
        divCount--;

        main_section.setAttribute('style', `grid-template-columns:  ${column};grid-template-rows:${row}`);
        main_section.removeChild(main_section.lastElementChild);

        refreshRowColumnInfo()
    } else {
        columnCount--;
        rowCount--;
        divCount--;

        row = row.replace('1fr ', '')
        column = column.replace('1fr ', '')

        main_section.removeChild(main_section.lastElementChild);
        main_section.setAttribute('style', `grid-template-columns:  ${column};grid-template-rows:${row}`);

        refreshRowColumnInfo()
    }


}

function toggleGrab() {
    grabed = true;
    let grabButton = document.getElementById('grab')
    grabButton.style.background = '#ff0000c4'
}

const refreshRowColumnInfo = () => {
    let row_column = document.getElementById('row-column-info');
    row_column.innerText = `${rowCount}x${columnCount}`
}

main_section.addEventListener('click', (e) => {
    if (e.target.className == 'items') {
        if (grabed) {
            grabed = false;
            selected = e.target.id
            document.querySelector('.pop-up').style.top = '20%';
            document.getElementById('grab').style.backgroundColor = '#222222c4'
        }
    }
})


function toggleView() {
    let see = document.getElementById('pre-view');
    see.innerHTML = main_section.innerHTML;
    see.setAttribute('style', `grid-template-columns: ${column};grid-template-rows:${row};top:0px;`)
}



renderedView.addEventListener('click', fullScreenPreview);

function fullScreenPreview() {
    document.getElementById('pre-view').style.top = '1000px'
}



function removeBorder() {
    let div = document.querySelectorAll('.items');
    div.forEach(element => {
        element.removeAttribute('style');
        selected = ''
        document.getElementById('grab').style.backgroundColor = '#222222c4'
        document.querySelector('.pop-up').style.top = '-400px'
    });
}

// code is way cryptic to decode and understand

function saveResizer() {
    let cr = document.getElementById('cr').value;
    let size = document.getElementById('size').value;
    cr = cr.split('');
    try {
        let num_value = parseInt(cr[0]);
        if (cr[1] == 'C') {
            let columnarray = column.split(' ')
            if ((columnarray.length) - 1 >= num_value) {
                columnarray[num_value - 1] = `${size}`
                column = columnarray.join(' ')
                main_section.setAttribute('style', `grid-template-columns:  ${column};grid-template-rows:${row}`);
            }

        } else if (cr[1] == 'R') {
            console.log('R')
            let columnarray = row.split(' ')
            if ((columnarray.length) - 1 >= num_value) {
                columnarray[num_value - 1] = `${size}`
                row = columnarray.join(' ')
                main_section.setAttribute('style', `grid-template-columns:  ${column};grid-template-rows:${row}`);
            }

        }

    } catch (error) {
        console.error(error)
    }
}



// ??? code is cryptic.. 


function saveData() {
    document.querySelector('.pop-up').style.top = '-400px'

    var values = document.getElementsByName('select');
    for (let i = 0; i <= values.length; i++) {
        if (values[i].checked) {
            if (values[i].value == 'row') {
                var start = document.getElementById('start').value;
                var end = document.getElementById('end').value;
                let element = document.getElementById(selected);
                let css_value = getComputedStyle(element).gridColumn
                element.setAttribute('style', `grid-row:${start}/${end};grid-column:${css_value}`);
                break
            } else {
                var start = document.getElementById('start').value;
                var end = document.getElementById('end').value;
                let element = document.getElementById(selected);
                let css_value = getComputedStyle(element).gridRow;
                element.setAttribute('style', `grid-row:${css_value};grid-column:${start}/${end}`)
                break
            }
        }
    }

}



function downloadCode() {
    var html = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Buildme.io(BEST CSS GRID GENERATOR)</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            overflow-x: hidden;
        }

        .main-section {
            display: grid;
            width: 100vw;
            height: 100vh;
            grid-gap: 3px;
            overflow-x: hidden;
            padding: 3px;
        }

        .main-section div {
            border: 2px solid red;
            background-color: #0066ff61;
        }

        .main-section>div:nth-child(odd) {
            background-color: #10258861;
        }
    </style>
</head>

<body>
    <!-- Code BY BUILDME.io  -->
    ${document.querySelector('.main-section').outerHTML}
</body>

</html>
    `

    arr = new Uint8Array(html.length);
    html.split("").forEach(function(a, b) {
        arr[b] = a.charCodeAt();
    });

    download(arr, "index.html", "text/html");
}