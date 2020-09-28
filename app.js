/* 
VARIABLES

En JS 5, on utilise le mot-clé var (facultatif) pour déclarer des variables:

  var myVariable = 'text';

En JS 6, le mot-clé var est obsolète et est remplacé par const et let:

  const myVariable = 'text;   // pour une variable dont la valeur ne doit pas changer
  let myVariable = 'text';  // pour permettre à la variable de changer de valeur plus tard

*/
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
