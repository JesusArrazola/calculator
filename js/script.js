//properties
//Objects
let txtDisplay = document.querySelector('input#txtDisplay');
let btnNumbers = document.querySelectorAll('button.number');
let btnOperators = document.querySelectorAll('.operator[id]');
let btnClear = document.querySelector('button.clear-button');
let btnPeriod = document.querySelector('button.operator#period');
let display = txtDisplay.value;

//Display functions
const displayWrite = (mode,text)=>{
    switch(mode){
        case "concatenate":
            txtDisplay.value += text;
        break;
        case "rewrite":
            txtDisplay.value = text;
        break;
        case "clear":
            txtDisplay.value = "";
        break;
    }
    display = txtDisplay.value;
}
//Attacht listener to buttons
btnNumbers.forEach(e=>{
    e.addEventListener('click',(evt)=>{
        let mode = display==='0'?'rewrite':'concatenate';
        if(display.length < 8)
            displayWrite(mode,evt.target.textContent);
    });
});

btnClear.addEventListener('click',()=>{
    displayWrite('rewrite','0');
});

btnPeriod.addEventListener('click',()=>{
    if(!display.includes('.'))
        if(display === '0')
            displayWrite('rewrite','0.');
        else
            displayWrite('concatenate','.');
});

//Basic functions
const add = (n1,n2) =>{
    return n1 + n2;
}
const substract = (n1,n2)=>{
    return n1 - n2;
}
const multiply = (n1,n2)=>{
    return n1 * n2;
}
const divide = (n1,n2)=>{
    return n1 / n2;
}
const operate = (op,n1,n2)=>{
    switch(op){
        case "add":
            return add(n1,n2);
        case "substract":
            return substract(n1,n2);
        case "multiply":
            return multiply(n1,n2);
        case "divide":
            return divide(n1,n2);
    }
}
