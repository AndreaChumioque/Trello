var addListBox = document.getElementById('add-list-box');
var saveBtn = document.getElementById('save-btn');
var closeListBtn = document.getElementById('close-list-btn');
var newListName = document.getElementById('add-list-input');

document.addEventListener('click', expandBox);
window.addEventListener('click', collapseAddListBox);
saveBtn.addEventListener('click', addList);

// Función para expandir elemento inicial
function expandBox(event) {
  if (event.target.className === 'collapsed-list-box' || event.target.parentElement.className === 'collapsed-list-box') {
    addListBox.classList.replace('collapsed-list-box', 'expanded-box');
    changeDisplay('hidden', 'show', addListBox);
    newListName.focus();
  } else if (event.target.classList.contains('collapsed-ticket-box') || event.target.parentElement.classList.contains('collapsed-ticket-box')) {
    var addTicketBox = document.querySelector('.add-ticket-box, .collapsed-ticket-box, .hidden');
    // if (event.target === addTicketBox || event.target.parentElement === addTicketBox) {
    addTicketBox.classList.replace('collapsed-ticket-box', 'expanded-box');
    changeDisplay('hidden', 'show', addTicketBox);
    addTicketBox.lastChild.firstChild.focus();
    // }
  }
}

// Función para colapsar al hacer click fuera
function collapseAddListBox(event) {
  if ((event.target !== addListBox && event.target.closest('div') !== addListBox) || event.target === closeListBtn) {
    changeDisplay('show', 'hidden', addListBox);
    addListBox.classList.replace('expanded-box', 'collapsed-list-box');
  }
}

// Función para ocultar y mostrar elementos
function changeDisplay(display1, display2, mainElement) {
  debugger;
  if (mainElement.classList.contains('expanded-box')) {
    var elements = mainElement.getElementsByClassName(display1);
    for (var i = 0; i < elements.length; i) {
      elements[i].classList.replace(display1, display2);
    }
    mainElement.firstElementChild.className = display1;
  }
}

// Función para agregar nueva lista (solo si se ingresa un nombre de lista) boton Guardar
function addList(event) {
  if (newListName.value !== '') {
    var container = document.getElementById('lists-container');
    var newListBox = document.createElement('div');
    newListBox.classList.add('new-list');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = newListName.value;
    newListTitle.classList.add('list-title');

    var addCardBox = createAddCardBox();

    newListBox.appendChild(newListTitle);
    newListBox.appendChild(addCardBox);
    container.insertBefore(newListBox, addListBox);

    newListName.value = '';
  }
  newListName.focus();
}

// Crear addCardBox
function createAddCardBox() {
  var box = document.createElement('div');
  var text = document.createElement('p');
  text.textContent = 'Añadir una tarjeta...';
  var form = document.createElement('form');
  var input = document.createElement('input');
  input.placeholder = 'Añadir una tarjeta...';
  var btnAdd = document.createElement('button');
  btnAdd.textContent = 'Añadir';
  var btnClose = document.createElement('button');

  box.classList.add('add-ticket-box', 'collapsed-ticket-box');
  input.classList.add('add-ticket-input', 'add-input', 'hidden');
  btnAdd.classList.add('add-btn', 'green-btn', 'hidden');
  btnClose.classList.add('close-ticket-button', 'close-btn', 'icon-x', 'hidden');

  form.appendChild(input);
  form.appendChild(btnAdd);
  form.appendChild(btnClose);
  box.appendChild(text);
  box.appendChild(form);

  return box;
}