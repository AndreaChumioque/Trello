var addListBox = document.getElementById('add-list-box');
var saveBtn = document.getElementById('save-btn');
var closeListBtn = document.getElementById('close-list-btn');
var newListName = document.getElementById('add-list-input');
var addTicketBox = document.getElementById('lists-container').lastElementChild.previousElementSibling.nextElementSibling;
var newTicketContent = addTicketBox.lastElementChild.children[0];
var closeTicketBtn = addTicketBox.lastElementChild.children[2];
var addBtn = addTicketBox.lastElementChild.children[1];

addListBox.addEventListener('click', expandAddListBox);
window.addEventListener('click', collapseBox);
saveBtn.addEventListener('click', addList);
document.addEventListener('click', expandAddTicketBox);
addBtn.addEventListener('click', addTicket);

// Función para expandir formulario de lista
function expandAddListBox(event) {
  if (addListBox.className === 'collapsed-list-box') {
    if (event.target === addListBox || event.target === addListBox.firstElementChild) {
      addListBox.classList.replace('collapsed-list-box', 'expanded-box');
      changeDisplay('hidden', 'show', addListBox);
      newListName.focus();
    }
  }
}

// Función para expandir formulario de tarjeta
function expandAddTicketBox(event) {
  if (event.target.classList.contains('collapsed-ticket-box')) {
    if (event.target === addTicketBox || event.target === addTicketBox.firstElementChild) {
      addTicketBox.classList.replace('collapsed-ticket-box', 'expanded-box');
      changeDisplay('hidden', 'show', addTicketBox);
      newTicketContent.focus();
    }
  }
}

// Función para colapsar al hacer click fuera y en el boton de cerrar
function collapseBox(event) {
  if ((event.target !== addListBox && event.target.closest('div') !== addListBox) || event.target === closeListBtn) {
    changeDisplay('show', 'hidden', addListBox);
    addListBox.classList.replace('expanded-box', 'collapsed-list-box');
  }
  if ((event.target !== addTicketBox && event.target.closest('div') !== addTicketBox) || event.target === closeTicketBtn) {
    changeDisplay('show', 'hidden', addTicketBox);
    addTicketBox.classList.replace('expanded-box', 'collapsed-ticket-box');
  }
}

// Función para ocultar y mostrar elementos
function changeDisplay(display1, display2, mainElement) {
  if (mainElement.classList.contains('expanded-box')) {
    var elements = mainElement.getElementsByClassName(display1);
    for (var i = 0; i < elements.length; i)
      elements[i].classList.replace(display1, display2);
    mainElement.firstElementChild.className = display1;
  }
}

var lists = 0;
// Función para agregar nueva lista (solo si se ingresa un nombre de lista)
function addList(event) {
  if (newListName.value !== '') {
    var newListBox = document.createElement('div');
    newListBox.classList.add('new-list');
    var newListTitle = document.createElement('p');
    newListTitle.textContent = newListName.value;
    newListTitle.classList.add('list-title');
    newListBox.appendChild(newListTitle);
    var clone = addTicketBox.cloneNode(true);
    newListBox.appendChild(clone);
    document.getElementById('lists-container').insertBefore(newListBox, addListBox);
    addTicketBox.classList.replace('hidden', 'show');
    newListName.value = '';
    lists++;
  }
  newListName.focus();
  if (lists > 1) {
    
    newListBox.previousElementSibling.appendChild(clone);
    clone.addEventListener('click', expandAddTicketBox);
  }
}

// Funcion para agregar tarjeta nueva
function addTicket(event) {
  if (newTicketContent.value !== '') {
    var newTicket = document.createElement('div');
    newTicket.classList.add('new-ticket');
    var newTicketText = document.createElement('p');
    newTicketText.textContent = newTicketContent.value;
    newTicket.appendChild(newTicketText);
    addTicketBox.parentElement.insertBefore(newTicket, addTicketBox);
    newTicketContent.value = '';
  }
  newTicketContent.focus();
}