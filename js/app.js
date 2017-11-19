var addListBox = document.getElementById('add-list-box');
var listBoxText = addListBox.firstElementChild;
var saveBtn = document.getElementById('save-btn');
var closeBtn = document.getElementById('close-btn');
var newListName = document.getElementById('add-list-input');

addListBox.addEventListener('click', expandAddListBox);
window.addEventListener('click', checkClickOut);
saveBtn.addEventListener('click', addList);

// Función para expandir elemento inicial
function expandAddListBox(event) {
  if (addListBox.className === 'collapsed-box') {
    if (event.target === addListBox || event.target === addListBox.firstElementChild) {
      addListBox.classList.replace('collapsed-box', 'expanded-box');
      changeDisplay('hidden', 'show');
      newListName.focus();
    }
  }
}

// Función para colapsar al hacer click fuera
function checkClickOut(event) {
  if ((event.target !== addListBox && event.target.closest('div') !== addListBox) || event.target === closeBtn) {
    changeDisplay('show', 'hidden');
    addListBox.classList.replace('expanded-box', 'collapsed-box');    
  }
}

// Función para ocultar y mostrar elementos
function changeDisplay(display1, display2) {
  if (addListBox.className === 'expanded-box') {
    var elements = addListBox.getElementsByClassName(display1);
    for (var i = 0; i < elements.length; i) {
      elements[i].classList.replace(display1, display2);
    }
    listBoxText.className = display1;  
  }
}

// Función para agregar nueva lista
function addList(event) {
  if (newListName.value !== '') {
    var parent = document.getElementById('lists-container');
    var newListBox = document.createElement('div');
    newListBox.classList.add('new-list');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = newListName.value;

    newListBox.appendChild(newListTitle);
    parent.insertBefore(newListBox, addListBox);

    newListName.value = '';
  }
  newListName.focus();
}