var addListBox = document.getElementById('add-list-box');
var saveBtn = document.getElementById('save-btn');
var collapsedText = document.getElementById('collapsed-text');

addListBox.addEventListener('click', expandAddListBox);
window.addEventListener('click', checkClickOut);

// Función para expandir elemento inicial
function expandAddListBox(event) {
  var box = document.querySelector('.collapsed-box');
  if (event.target === box || event.target === box.children[0]) {
    console.log(event.target);
    addListBox.classList.replace('collapsed-box', 'expanded-box');
    changeDisplay('hidden', 'show');
  }
}

// Función para ocultar y mostrar elementos
function changeDisplay(display1, display2) {
  var elements = addListBox.getElementsByClassName(display1);
  for (var i = 0; i < elements.length; i) {
    // elements[i].className = display2;
    elements[i].classList.replace(display1, display2);
  }
  document.getElementById('collapsed-text').className = display1;
}

// Función para colapsar al hacer click fuera
function checkClickOut(event) {
  if (event.target !== addListBox && event.target.parentElement.parentElement !== addListBox) {
    addListBox.classList.replace('expanded-box', 'collapsed-box');
    changeDisplay('show', 'hidden');
  }
}