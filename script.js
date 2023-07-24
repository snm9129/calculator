function delet(){
let result = document.getElementById('result').value;
document.getElementById('result').value = result.slice(0, -1);
}

function addChar(character){
   document.getElementById('result').value +=character;
}

function clearAll(){
    document.getElementById('result').value="";
}

function calculat(){
    let result = document.getElementById('result').value;
    let show = eval(result);
    document.getElementById('result').value = show;
}