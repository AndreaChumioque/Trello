window.onload = function() {
  var addListBox = document.getElementById('add-list-box');
  var saveBtn = document.getElementById('save-btn');
  var closeListBtn = document.getElementById('close-list-btn');
  var newListName = document.getElementById('add-list-input');
  var container = document.getElementById('lists-container');  

  document.addEventListener('click', expandBox);
  window.addEventListener('click', collapseAddListBox);
  saveBtn.addEventListener('click', addList);
  document.addEventListener('click', addTicket);

  // Función para expandir elemento inicial
  function expandBox(event) {
    if (event.target.className === 'collapsed-list-box' || event.target.parentElement.className === 'collapsed-list-box') {
      addListBox.classList.replace('collapsed-list-box', 'expanded-box');
      changeDisplay('hidden', 'show', addListBox);
      newListName.focus();
    }

    if (event.target.classList.contains('collapsed-ticket-box') || event.target.parentElement.classList.contains('collapsed-ticket-box')) {
      var addTicketBox = event.target.parentElement;
      addTicketBox.classList.replace('collapsed-ticket-box', 'expanded-box');
      changeDisplay('hidden', 'show', addTicketBox);
      addTicketBox.lastChild.firstChild.focus();
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
    if (mainElement.classList.contains('expanded-box') || mainElement.lastChild.classList.contains('expanded-box')) {
      var elements = mainElement.getElementsByClassName(display1);
      for (var i = 0; i < elements.length; i)
        elements[i].classList.replace(display1, display2);
      mainElement.firstElementChild.className = display1;
    }
  }

  // Función para agregar nueva lista (solo si se ingresa un nombre de lista) boton Guardar
  function addList(event) {
    event.preventDefault();
    if (event.target.matches('button') && newListName.value !== '') {
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
    // Crear elementos y contenidos de texto
    var box = document.createElement('div');
    var text = document.createElement('p');
    text.textContent = 'Añadir una tarjeta...';
    var form = document.createElement('form');
    var input = document.createElement('input');
    input.placeholder = 'Añadir una tarjeta...';
    var btnAdd = document.createElement('button');
    btnAdd.textContent = 'Añadir';
    var btnClose = document.createElement('button');

    // Asignar clases
    box.classList.add('add-ticket-box', 'collapsed-ticket-box');
    input.classList.add('add-ticket-input', 'add-input', 'hidden');
    btnAdd.classList.add('add-btn', 'green-btn', 'hidden');
    btnClose.classList.add('close-ticket-button', 'close-btn', 'icon-x', 'hidden');

    // Añadirlos al documento
    form.appendChild(input);
    form.appendChild(btnAdd);
    form.appendChild(btnClose);
    box.appendChild(text);
    box.appendChild(form);

    return box;
  }

  // Función para añadir nueva tarjeta
  function addTicket(event) {
    debugger;
    event.preventDefault();
    if (event.target.matches('.add-btn', '.green-btn', '.show')) {
      var box = event.target.parentElement.parentElement;
      if (box.lastChild.firstChild.value !== '') {
        var newTicket = document.createElement('div');
        newTicket.classList.add('new-ticket');
        var newTicketText = document.createElement('p');
        newTicketText.textContent = box.lastChild.firstChild.value;
        newTicket.appendChild(newTicketText);
        box.parentElement.insertBefore(newTicket, box);
        box.lastChild.firstChild.value = '';
      }
      box.lastChild.firstChild.focus();
    }
  }
};