const resultArea= document.getElementById("result-area");
const buttonSci= document.getElementById("buttons-sci");
const calc= document.getElementById("calc");
              // Numeros      //
function numberOneClick(){
    const button= document.getElementById("one");
    resultArea.value += button.textContent.trim();   //.trim tira os espaços
}

function numberTwoClick(){
    const button= document.getElementById("two");
    resultArea.value += button.textContent.trim();
}

function numberThreeClick(){
    const button= document.getElementById("three");
    resultArea.value += button.textContent.trim();
}

function numberFourClick(){
    const button= document.getElementById("four");
    resultArea.value += button.textContent.trim();
}

function numberFiveClick(){
    const button= document.getElementById("five");
    resultArea.value += button.textContent.trim();
}

function numberSixClick(){
    const button= document.getElementById("six");
    resultArea.value += button.textContent.trim();
}

function numberSevenClick(){
    const button= document.getElementById("seven");
    resultArea.value += button.textContent.trim();
}

function numberEightClick(){
    const button= document.getElementById("eight");
    resultArea.value += button.textContent.trim();
}

function numberNineClick(){
    const button= document.getElementById("nine");
    resultArea.value += button.textContent.trim();
}

function numberZeroClick(){
    const button= document.getElementById("zero");
    resultArea.value += button.textContent.trim();
}
          // Simbolos //
function sumClick(){
    const button= document.getElementById("sum");
    resultArea.value += button.textContent.trim();
}

function miniusClick(){
    const button= document.getElementById("minius");
    resultArea.value += button.textContent.trim();
}

function multClick(){
    const button= document.getElementById("mult");
    resultArea.value += "*";
}

function divisionClick(){
    const button= document.getElementById("division");
    resultArea.value += button.textContent.trim();
}

function parenthesisOpenClick(){
    if(buttonSci.style.opacity > 0){
    const button= document.getElementById("parenthesis-open");
    resultArea.value += button.textContent.trim();
    }
}

function parenthesisCloseClick(){
    if(buttonSci.style.opacity > 0){
    const button= document.getElementById("parenthesis-close");
    resultArea.value += button.textContent.trim();
    }
}

function tanClick(){
    const button= document.getElementById("tan");
    resultArea.value += button.textContent.trim();
}

function cosClick(){
    const button= document.getElementById("cos");
    resultArea.value += button.textContent.trim();
}

function sinClick(){
    const button= document.getElementById("sin");
    resultArea.value += button.textContent.trim();
}

function degClick(){
    const button= document.getElementById("deg");
    resultArea.value += button.textContent.trim();
}

function lgClick(){
    const button= document.getElementById("lg");
    resultArea.value += button.textContent.trim();
}

function lnClick(){
    const button= document.getElementById("ln");
    resultArea.value += button.textContent.trim();
}

function commaClick(){
    const button= document.getElementById("comma");
    resultArea.value += button.textContent.trim();
}

function acClick(){
    resultArea.value= " ";
}

function sciClick(){

    if(buttonSci.style.opacity == 0){
        buttonSci.style.opacity= 1;
        calc.style.width= "1000px";
    }else{
        buttonSci.style.opacity= 0;
        calc.style.width= "680px";
    }
}

function resultClick(){
    const result= eval(resultArea.value);
    resultArea.value= result;
}
function deleteClick(){
    var currentValue = resultArea.Value;
    var resultValue = currentValue.substring(0, currentValue.length -1);
    resultArea.value= resultValue;
}