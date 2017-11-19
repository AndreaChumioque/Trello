var addListBox = document.querySelector('.add-list-box');
var saveBtn = document.getElementById('save-btn');

addListBox.addEventListener('click', expandAddListBox);

function expandAddListBox(event) {
  addListBox.classList.replace('collapsed-box', 'expanded-box');
  
  changeDisplay(event);

}

function changeDisplay(event) {
  var centinel = true;
  var hiddenElements = addListBox.getElementsByClassName('hidden');
  
  if (centinel) {
    for (var i = 0; i < hiddenElements.length; i) {
      console.log(hiddenElements[i]);
      hiddenElements[i].className = 'show';
    }
    document.getElementById('collapsed-text').className = 'hidden';
  }
}