let display = document.querySelector(".inputs").textContent;
let numpad = document.querySelector(".calculator-rows");

numpad.addEventListener("mousedown", manageInputScreen)

function manageInputScreen(e) {
    if(display.includes(NaN)){
        display = ''
    }
    if(e.target.getAttribute("class") != undefined){
        return;
    }
    if(e.target.getAttribute('id') === "clear"){
        display = "";
    }
    else if(e.target.getAttribute('id') === "equals"){
        display = calculate(display) + "";
    }
    else{
        if(isSecondOperant(e.target.textContent, display)){
            display = calculate(display) + "";
            display += " " + e.target.textContent + " ";
        }
        else if(isOperant(e.target.textContent)){
            display += " " + e.target.textContent + " ";
        }
        else{
            display += e.target.textContent + "";
        }
    }
    console.log(display)
    console.log(display.split(""))
    document.querySelector(".inputs").textContent = display;
}

function calculate(display){
    values = display.split(" ")
    digits = [parseFloat(values[0]), parseFloat(values[2])];
    if(values[1] === "+"){
        return digits[0] + digits[1];
    }
    else if(values[1] === "-"){
        return digits[0] - digits[1];
    }
    else if(values[1] === "*"){
        return digits[0] * digits[1];
    }
    else{
        return digits[0] / digits[1];
    }
}

function isSecondOperant(value, display){
    operants = ["+", "-", "/", "*"];
    return operants.some(operant => value.includes(operant)) && operants.some(operant=> display.includes(" "+operant));
}

function isOperant(value){
    return operants.some(operant => value.includes(operant));
}