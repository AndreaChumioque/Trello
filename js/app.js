window.addEventListener('load', begin);

function begin() {
  var container = document.getElementById('lists-container');
  var addList = document.getElementById('add-list');
  var listForm = document.getElementById('list-form');
  var listInput = document.getElementById('list-input');
  var saveBtn = document.getElementById('save-btn');
  var closeListBtn = document.getElementById('close-list-btn');

  document.addEventListener('click', expandForm);
  window.addEventListener('click', collapseForm);
  saveBtn.addEventListener('click', newList);
  document.addEventListener('click', addTicket);

  // Función para expandir elemento inicial
  // WORKS FINE FOR LIST
  function expandForm(event) {
    if (event.target === addList) {
      event.target.classList.toggle('hidden');
      listForm.classList.toggle('hidden');
      listInput.focus();
    }
    if (event.target.className === 'add-ticket') {
      var ticketForm = event.target.nextElementSibling;
      event.target.classList.toggle('hidden');
      ticketForm.classList.toggle('hidden');
      ticketForm.firstChild.focus();
    }
  }

  // Función para colapsar al hacer click fuera
  // WORKS FINE FOR LIST
  function collapseForm(event) {
    if ((event.target !== addList && event.target !== listForm && event.target.closest('form') !== listForm) || event.target === closeListBtn) {
      addList.className = '';
      listForm.className = 'hidden';
    }
  }

  // Función para agregar nueva lista (solo si se ingresa un nombre de lista) boton Guardar
  // THIS FUNCTION WORKS FINE
  function newList(event) {
    event.preventDefault();

    if (event.target.matches('button') && listInput.value) {
      var newListBox = document.createElement('div');
      newListBox.classList.add('new-list');
      var newListTitle = document.createElement('p');
      newListTitle.textContent = listInput.value;
      newListTitle.classList.add('list-title');

      var addCardBox = createTicketBox();
      newListBox.appendChild(newListTitle);
      newListBox.appendChild(addCardBox);
      container.insertBefore(newListBox, addList.parentElement);
      listInput.value = '';
    }
    listInput.focus();
  }

  // Crear addCardBox
  // THIS FUNCTION WORKS FINE
  function createTicketBox() {
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
    text.classList.add('add-ticket');
    form.classList.add('hidden');
    btnClose.classList.add('close-ticket-button', 'icon-x');

    // Añadirlos al documento
    form.appendChild(input);
    form.appendChild(btnAdd);
    form.appendChild(btnClose);
    box.appendChild(text);
    box.appendChild(form);

    return box;
  }

  // Función para añadir nueva tarjeta
  // THIS FUNCTION WORKS FINE
  function addTicket(event) {
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

// Función para ocultar y mostrar elementos
// function changeDisplay(display1, display2, mainElement) {
//   debugger;
//   if (mainElement.classList.contains('expanded-box') || mainElement.lastChild.classList.contains('expanded-box')) {
//     // var elements = mainElement.getElementsByClassName(display1);
//     // for (var i = 0; i < elements.length; i)
//     //   elements[i].classList.replace(display1, display2);
//     // mainElement.firstElementChild.className = display1;

//   }
// }