var body = document.createElement("script");
body.src = "content.js";
console.log(body);
document.head.appendChild(body);

function sum(a,b) {
    return a+b;
}

window.onload = function(){
    alert(div(3,4));
}