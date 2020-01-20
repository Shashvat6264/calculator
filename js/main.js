var operation = document.getElementById("operations");
var first = document.getElementById("no1");
var second = document.getElementById("no2");
var display = document.getElementById("display");

function operate(){
    if (display.hasChildNodes() == true){
        var node = display.childNodes[0];
        node.remove();
    }
    var n1 = first.value;
    var n2 = second.value;
    var x;
    if ((n1!="")&&(n2!="")){
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        if (operation.value == "plus"){
            x = n1 + n2;
        }
        if (operation.value == "subtract"){
            x = n1 - n2;
        }
        if (operation.value == "multi"){
            x = n1 * n2;
        }
        if (operation.value == "divide"){
            if (n2 != 0){
                x = n1 / n2;
            }
            else{
                x = "Not Defined!!Cannot be divided by zero.";
            }
        }
    }
    else{
        x = "The Input boxes are not to be left.";
    }
    var node = document.createTextNode(x);
    display.appendChild(node);
}