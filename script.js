function buttonClicked(value) {
    document.getElementById('screenid').value += value;
}

function calculate() {
    var value = document.getElementById('screenid').value;
    try {
        var evaluated_value = eval(value);
        document.getElementById('screenid').value = evaluated_value;
    } catch {
        document.getElementById('screenid').value = "Error";
    }
}

function clearScreen() {
    document.getElementById('screenid').value = '';
}
