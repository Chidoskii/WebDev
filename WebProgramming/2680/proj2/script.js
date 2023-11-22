// WAIT FOR THE PAGE TO LOAD BEFORE ADDING LISTENERS
window.addEventListener('load', function () {
  document.getElementById('submit').addEventListener('click', addTodo);

  document.getElementById('todo').addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
      addTodo();
    }
  });
});

function addTodo() {
  let todo = String(document.getElementById('todo').value);
  console.log(todo);
  const divTag = document.createElement('div');
  document
    .getElementById('list')
    .appendChild(divTag)
    .setAttribute('class', 'listitem');
  let list = document.getElementsByClassName('listitem');
  list[list.length - 1].innerHTML = todo;
  for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', list[i].remove);
  }
  document.getElementById('todo').value = '';
}

window.onload = function () {
  document.getElementById('todo').focus();
};
