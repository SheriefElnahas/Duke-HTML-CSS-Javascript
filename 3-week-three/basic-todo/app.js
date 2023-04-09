const button = document.querySelector('#addButton');
button.addEventListener('click', addTask);

function addTask() {
  var input = document.getElementById('input');
  // get current text from input field
  var newTask = input.value;

  // only add new item to list if some text was entered
  if (newTask != '') {
    // create new HTML list item
    var item = document.createElement('li');
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + newTask;
    // add new item as part of existing list
    document.getElementById('tasks').appendChild(item);

    /* Step 4 below here */
    input.value = '';
  }
}

// change styling used for given item
function markDone(item) {
  item.className = 'finished';
}

/* Step 7 below here */
function remove(item) {
  // remove item completely from document
  if (item.className === 'finished') {
    item.remove();
  }
}

const aboutButton = document.querySelector('.about');
const aboutDiv = document.querySelector('#divabout');
/* Step 11 below here */
function doAbout() {
  aboutDiv.textContent = 'Author is Eren Yeager';
  aboutDiv.className = 'yellowbackground';
}

aboutButton.addEventListener('click', doAbout);

const clearButton = document.querySelector('.clear');

/* Step 14 below here */
function clearAbout() {
  aboutDiv.textContent = '';
}
clearButton.addEventListener('click', clearAbout);  

addTask();


