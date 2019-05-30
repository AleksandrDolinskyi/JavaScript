/*
** @param HTML - node element
*/


/**********************************************************************/

var p = document.createElement("p");
var text = document.createTextNode(" ");
var element = p.appendChild(text);

document.body.appendChild(element);
	
p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deleniti sapiente ea amet quam odit culpa doloremque ab, voluptatibus modi cupiditate laborum odio! Molestiae, recusandae, voluptatem laudantium ipsam earum ab.";
p.className = "lorem";
p.setAttribute("id", "lorem");

/**********************************************************************/

// Получаем ссылку на элемент в который мы хотим добавить новый элемент
var parentElement = document.getElementById('lorem');

// Получаем ссылку на первый дочерний элемент
var theFirstChild = parentElement.firstChild;
// var theFirstChild = parentElement.lastChild;

// Создаем новый элемент, который будем добавлять
var newElement = document.createElement("div");

// Вставляем новый элемент перед первым дочерним элементом
parentElement.insertBefore(newElement, theFirstChild);
// parentElement.insertAfter(newElement, theFirstChild);

/**********************************************************************/

var ul = document.querySelector("ul");

var lis = document.querySelectorAll("li");

// Копировать элемент
var newLi = lis[0].cloneNode(true);

ul.appendChild(newLi); 

document.body.appendChild(newUl)

// Удалить элемент
ul.removeChild(newUl[0]);

/**********************************************************************/

// Заменить элемент
var newLi = document.createElement("li");
newLi.innerHTML = "item";
ul.replaceChild(newUl, el);

/**********************************************************************/

var img = document.createElement("img");
img.src = "data:image/png;base64,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";
img.type = "image";
img.style.width = "50px";
img.style.height = "50px";
img.style.marginRight = "50px";
img.style.backroundSize = "Cover";
document.body.appendChild(img);

/**********************************************************************/

var btn = document.createElement("button");
btn.innerText = "button";
btn.style.cursor = "pointer";
btn.className = "button";
body.appendChild(btn);
	btn.onclick = function() {

	//window.open("", "", "width=200, height=200");
	//window.print();

	console.log(window.location.href);
	window.setTimeout(function(){
	alert("Привет");	
	}, 2000);
}
