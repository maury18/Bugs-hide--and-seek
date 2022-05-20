function clearFields(){
    document.getElementById('form').reset();
}

function plus(){
const value1 = (document.getElementById('value-1').value);
const value2 = parseInt(document.getElementById('value-2').value);
document.getElementById('result') .innerHTML = value1 + value2;
}