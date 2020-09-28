/* 
VARIABLES

En JS 5, on utilise le mot-clé var (facultatif) pour déclarer des variables:

  var myVariable = 'text';

En JS 6, le mot-clé var est obsolète et est remplacé par const et let:

  const myVariable = 'text;   // pour une variable dont la valeur ne doit pas changer
  let myVariable = 'text';  // pour permettre à la variable de changer de valeur plus tard

*/
const app = {
  // Initialise l'application
  init: function() {
    console.log('init function called');
    // Sélectionne le bouton "Add todo"
    const addTodoButton = document.getElementById('add-todo');
    // Associe une action au fait de cliquer sur ce bouton
    addTodoButton.addEventListener(
      'click',
      function() { app.addTodo('Coucou') }
    );
  },
  // Ajoute une nouvelle tâche à faire dans la liste
  addTodo: function(todoName) {
    // Sélectionne la liste des tâches à faire
    const todoList = document.getElementById('todo-list');
    // Crée un nouvel élément et lui appliquer le texte donné en entrée
    const newTodo = document.createElement('li');
    newTodo.className = 'list-group-item';
    newTodo.innerText = todoName;
    // Ajoute cet élément dans la liste
    todoList.appendChild(newTodo);
  },
};

// Initialise l'application automatiquement au chargement de la page
app.init();
