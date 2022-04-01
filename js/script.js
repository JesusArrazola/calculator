//calc variables
let firstNumber = null;
let secondNumber = null;
let operator = null;

//Objects
let txtDisplay = document.querySelector('input#txtDisplay');
let btnNumbers = document.querySelectorAll('button.number');
let btnOperators = document.querySelectorAll('.operator[id]:not([id="period"],[id="equals"])');
let btnClear = document.querySelector('button.clear-button');
let btnPeriod = document.querySelector('button.operator#period');
let btnEquals = document.querySelector('button.operator#equals');
let display = txtDisplay.value;
//Misc variables
let rewrite = false;

//Miscelaneous functions
const normalizeDisplay = ()=>{
    if(display.charAt(display.length-1) === ".")
        displayWrite('concatenate',"0");
}

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
//Attacht listener to DOM Ojbects
btnNumbers.forEach(e=>{
    e.addEventListener('click',(evt)=>{
        let mode = (display==='0' || rewrite)?'rewrite':'concatenate';
        rewrite = false;
        if(display.length < 8)
            displayWrite(mode,evt.target.textContent);
    });
});

btnClear.addEventListener('click',()=>{
    displayWrite('rewrite','0');
    firstNumber = null;
    secondNumber = null;
    operator = null;
});

btnPeriod.addEventListener('click',()=>{
    concatMode = false;
    if(!display.includes('.') && display.length < 7)
        if(display === '0')
            displayWrite('rewrite','0.');
        else
            displayWrite('concatenate','.');
});

btnOperators.forEach(e => {
    e.addEventListener('click',function(evt){
        normalizeDisplay();
        let tempDisplay = display;
        if(operator){
            secondNumber = parseFloat(tempDisplay);
            firstNumber = operate(operator,firstNumber,secondNumber);
            displayWrite('rewrite',firstNumber);
            secondNumber = null;
            operator = null;
        }else{
            firstNumber = parseFloat(tempDisplay);
        }
        operator = this.getAttribute('id');
        rewrite = true;
    });
});

btnEquals.addEventListener('click',function(evt){
    if(operator){
        normalizeDisplay();
        secondNumber = parseFloat(display);
        displayWrite('rewrite',`${operate(operator,firstNumber,secondNumber)}`);
        firstNumber = parseFloat(display);
    }else{
        displayWrite('rewrite','0');
    }
    rewrite = true;
    firstNumber = null;
    secondNumber = null;
    operator = null;
});

//Basic functions
const add = (n1,n2) =>{
    let result = n1 + n2;

    return isFinite(result)?result:"Err";
}
const substract = (n1,n2)=>{
    let result = n1 - n2;

    return isFinite(result)?result:"Err";
}
const multiply = (n1,n2)=>{
    let result = n1 * n2;

    return isFinite(result)?result:"Err";
}
const divide = (n1,n2)=>{
    let result = n1 / n2;

    return isFinite(result)?result:"Err";
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
