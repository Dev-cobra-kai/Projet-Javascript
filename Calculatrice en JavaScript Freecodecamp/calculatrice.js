let input = "";

function ShowValue(btn) {
    input = input + btn.value;

    document.getElementById("output").innerHTML = input;

};

function quickMath() {
    document.getElementById("output").innerHTML = eval(input);
}

function Reset(btn) {
    document.getElementById("output").innerHTML = "0"
    input = "";
}

function rem1(btn) {
    input = input.replace(input.slice(-1), "");
    document.getElementById("output").innerHTML = input;
}