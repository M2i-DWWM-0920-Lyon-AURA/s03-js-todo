const app = {
  addTodo: function(todoName) {
    // Sélectionner la liste des tâches à faire
    const todoList = document.getElementById('todo-list');
    // Créer un nouvel élément et lui appliquer le texte donné en entrée
    const newTodo = document.createElement('li');
    newTodo.className = 'list-group-item';
    newTodo.innerText = todoName;
    // Ajouter cet élément dans la liste
    todoList.appendChild(newTodo);
  }
};

const addTodoButton = document.getElementById('add-todo');
addTodoButton.addEventListener(
  'click',
  function() { app.addTodo('Coucou') }
);
