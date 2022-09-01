//properties
let memory = [];
//Objects
let txtDisplay = document.querySelector('input#txtDisplay');
let btnNumbers = document.querySelectorAll('button.number');
let btnOperators = document.querySelectorAll('.operator[id]');
let btnEquals = document.querySelectorAll('.equals')[0];
let btnClear = document.querySelector('button.clear-button');
let btnPeriod = document.querySelector('button.operator.period');
let display = txtDisplay.value;

/* Start of display functions */
/**
 * Reescribe el numero en pantalla y actualiza la variable que lo almacena. Tiene 3 modos:
 * -Modo 'concatenate': Concatena el numero en la cadena existente
 * -Modo 'rewrite': Reemplaza el contenido de la cadena anterior por la nueva
 * -Modo 'clear': Reestablece el contenido de la cadena a una vacia.
 * @param {String} mode Write mode
 * @param {String} text Text to write
 */
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
    memory = [];
});

btnPeriod.addEventListener('click',()=>{
    if(!display.includes('.'))
        if(display === '0')
            displayWrite('rewrite','0.');
        else
            displayWrite('concatenate','.');
});

/* End of display functions */
btnOperators.forEach(e => {
    e.addEventListener('click', evt =>{
        //Checar que la memoria esté vacía
        if(memory.length === 0){
            memory[0] = display;
        }else{
            let op1 = memory[0];
            memory[0] = operate(evt.currentTarget.id,parseFloat(op1),parseFloat(display));
        }
        displayWrite('rewrite','0');
        memory[1] = evt.currentTarget.id
    });
});

btnEquals.addEventListener('click',e => {
    if(memory.length === 0){
        displayWrite('rewrite','0');
    }else{
        displayWrite('rewrite',operate(memory[1],parseFloat(memory[0]),parseFloat(display)).toString());
        memory = [];
    }
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
/**
 * Operates
 * @param {String} op Operation String ID
 * @param {Number} n1 First operator
 * @param {Number} n2 Second operator
 * @returns {Number} The result of the operation 'op' over 'op1' and 'op2'
 */
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
