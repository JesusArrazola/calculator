//properties
let display = "";

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
