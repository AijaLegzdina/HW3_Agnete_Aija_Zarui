const endValue = document.getElementById("endValue");
const container = document.getElementById("container");
const btnClear = document.getElementById("btnClear");
const btnGenerate = document.getElementById("btnGenerate");
const inputFizzNumber = document.getElementById("fizzNumber");
const inputBuzzNumber = document.getElementById("buzzNumber");

const min = 1;
const max = 100;

startValue.value = min;
endValue.value = max;
inputFizzNumber.value = 3;
inputBuzzNumber.value = 5;


clear = function () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
};

generate = function () {
    clear();
    fizzNum = parseInt(inputFizzNumber.value, 10);
    buzzNum = parseInt(inputBuzzNumber.value, 10);
    start = parseInt(startValue.value, 10);
    end = parseInt(endValue.value, 10);

    if (end > 100 || end < 1) {
        endValue.value = 100
        end = 100
    }

    if (start < 1 || start > 100) {
        startValue.value = 1;
        start = 1;
    }

    for (i = start; i <= end; i++) {
        newDiv = document.createElement("div");
        newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        container.appendChild(newDiv).setAttribute("id", "myid" + i);

        if (i % fizzNum === 0 && i % buzzNum === 0) {                              
            newPar.appendChild(document.createTextNode(i + ' = Fizz Buzz'));
            container.appendChild(newDiv).setAttribute("class", "fizzbuzz");
        } else if (i % fizzNum === 0) {
           newPar.appendChild(document.createTextNode(i + ' = Fizz'));
           container.appendChild(newDiv).setAttribute("class", "fizz");
        } else if (i % buzzNum === 0) {
           newPar.appendChild(document.createTextNode(i + ' = Buzz'));
           container.appendChild(newDiv).setAttribute("class", "buzz");
        } else {
            newPar.appendChild(document.createTextNode(i));
            container.appendChild(newDiv).setAttribute("class", "number");
        }
    }
};    

btnGenerate.onclick = function() {
    generate();
};
    
btnClear.onclick = function() {
    clear();
};

window.onload = generate();