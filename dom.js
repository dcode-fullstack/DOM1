// // EXAMINE THE DOCUMENT OBJECT

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// // console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].innerHTML = "Hello";
// // console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
//console.log(document.images);

// GET ELEMENT BY ID //
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerHTML = 'Goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerHTML);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';

// GET ELEMENT BY CLASS NAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Its not going to work cause its an array so you need a for loop in order to change all
// // items.style.backgroundColor = '#f4f4f4';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GET ELEMENT BY TAG //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';


// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERY SELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'; // It will grab the first one by default

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERY SELECTOR ALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
// }

// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = '#ccc';
// }

// // TRAVERSING THE DOM //

// var itemList = document.querySelector('#items');
// // parent node
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.background = '#f4f4f4';
// // console.log(itemList.parentNode.parentNode);

// // parentElement
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.background = '#f4f4f4';
// // console.log(itemList.parentElement.parentElement);


// // childNodes // Its a pain in the ass cause it counts all the line breaks in the html
// // Use children instead
// // console.log(itemList.childNodes);


// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor = 'yellow';

// // // First Child // Its useless as it counts the linebreaks
// // console.log(itemList.firstChild);

// // // First Element Child // Much better than first child
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent = 'Hello 1';

// // console.log(itemList.firstChild);

// // // First Element Child // Much better than first child
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent = 'Hello 1';

// // console.log(itemList.lastChild);

// // // First Element Child // Much better than first child
// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.textContent = 'Hello 1';

// // console.log(itemList.nextSibling);
// // console.log(itemList.nextElementSibling);

// // Previous Sibbling
// // console.log(itemList.previousSibling);

// // Previous Element Sibbling
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color = 'green';

// // CREATE ELEMENTS

// // Create a div
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // Add ID
// newDiv.id = 'hello1';

// // Add Atribute
// newDiv.setAttribute('title', 'hello div');

// // Create Text Node
// var newDivText = document.createTextNode('Hello World');

// // Add Text to div
// newDiv.appendChild(newDivText);

// // Add Text to the Dom
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// console.log(newDiv);

// DOM 3 //

// var button = document.getElementById('button');
// button.addEventListener("click", () => console.log("button clicked"));

// function buttonClick() {
//     console.log('Button clicked');
// }

// var button = document.getElementById('button').addEventListener("click", function () {
//     console.log('Button clicked');
// })

// var button = document.getElementById('button').addEventListener("click", buttonClick);

// function buttonClick() {
//     console.log("Button clickedd");
//     document.getElementById('header-title').innerText = 'changed';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// }


// WITH (e) ELEMENT YOU PRINT ALL INFO ABOUT THE ELEMENT
// var button = document.getElementById('button').addEventListener("click", buttonClick);

// function buttonClick(e) {
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';

//     // console.log(e.type);

//     // // CLick position from the window
//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // click position from the element
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // change event if yopu are holding a key
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }

// var button = document.getElementById('button');
// var box = document.getElementById('box');

// // button.addEventListener("click", runEvent);
// // button.addEventListener("dblclick", runEvent);
// // button.addEventListener("mousedown", runEvent);
// // button.addEventListener("mouseup", runEvent);

// // Mouse enter is for the element itself but mouseout is also for the inner elements of the element

// // box.addEventListener('mouseenter', runEvent);
// // box.addEventListener('mouseleave', runEvent);

// // box.addEventListener('mouseover', runEvent);
// // box.addEventListener('mouseout', runEvent);
// // box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// // itemInput.addEventListener('keydown', runEvent);
// // itemInput.addEventListener('keyup', runEvent);
// // itemInput.addEventListener('keypress', runEvent);

// // itemInput.addEventListener('focus', runEvent);
// // itemInput.addEventListener('blur', runEvent);

// // itemInput.addEventListener('cut', runEvent);
// // itemInput.addEventListener('paste', runEvent);

// // itemInput.addEventListener('input', runEvent);

// // select.addEventListener('change', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     e.preventDefault();
//     console.log('EVENT TYPE: ' + e.type);

//     // document.body.style.display = 'none';

//     console.log(e.target.value);
//     // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';

//     // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';
//     // box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
//     // document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";

// }



