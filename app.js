/* 
VARIABLES

En JS 5, on utilise le mot-clé var (facultatif) pour déclarer des variables:

  var myVariable = 'text';

En JS 6, le mot-clé var est obsolète et est remplacé par const et let:

  const myVariable = 'text;   // pour une variable dont la valeur ne doit pas changer
  let myVariable = 'text';  // pour permettre à la variable de changer de valeur plus tard

*/
const app = {
  // Sélectionne le formulaire "Add todo"
  addTodoForm: $('#add-todo'),
  // Sélectionne le champ texte
  todoNameInput: $('#add-todo-name'),
  // Sélectionne le champ texte
  addTodoButton: $('#add-todo-button'),
  // Sélectionne la liste des tâches à faire
  todoList: $('#todo-list'),

  // Initialise l'application
  init: function() {
    // Associe une action au fait de valider le formulaire "Add todo"
    app.addTodoForm.on(
      'submit',
      function(event) {
        // Empêche le rechargement de la page
        // (comportement normal du fait de valider un formulaire)
        event.preventDefault();
        // Récupère le contenu du champ texte
        const todoName = app.todoNameInput.val();
        // Efface le contenu du champ texte
        app.todoNameInput.val('');
        // Désactive le bouton
        app.addTodoButton.attr('disabled', true);
        // Ajoute une nouvelle tâche
        app.addTodo(todoName);
      }
    );
    // Associe une action au fait que la valeur du champ texte soit modifiée
    app.todoNameInput.on(
      'input',
      function(event) {
        // Si le champ texte est vide
        if (event.target.value === '') {
          // Désactive le bouton
          app.addTodoButton.attr('disabled', true);
          // Sinon
        } else {
          // Enlève le statut désactivé du bouton
          app.addTodoButton.attr('disabled', false);
        }
      }
    );

    // Ajoute des tâches par défaut
    app.addTodo('Acheter des bananes');
    app.addTodo('Ranger ma chambre');
    app.addTodo('Relire mes cours de JavaScript');
  },

  // Ajoute une nouvelle tâche à faire dans la liste
  addTodo: function(todoName) {
    // Crée un nouvel élément de liste
    const newTodo = $('<li class="todo list-group-item d-flex align-items-center justify-content-between"><h2 class="todo-name"></h2><input type="checkbox" class="todo-toggle order-first" /><form class="todo-edit-name d-none"><input type="text" class="todo-edit-name-input" /><button class="btn btn-outline-success btn-sm"><i class="fas fa-check"></i></button></form><div class="todo-buttons"><button class="todo-buttons-edit btn btn-outline-warning btn-sm"><i class="fas fa-edit"></i></button><button class="todo-buttons-delete btn btn-outline-danger btn-sm"><i class="fas fa-trash-alt"></i></button></div></li>');
    // Ajoute cet élément de liste dans la liste
    $('#todo-list').append(newTodo);
    // Ajoute le nom de la tâche à faire
    newTodo.find('.todo-name').html(todoName);

    // Sélectionne la checkbox
    const checkbox = newTodo.find('.todo-toggle');
    // Associe une action au fait de cocher la checkbox
    checkbox.on(
      'change',
      function(event) {
        // Si la checkbox vient d'être cochée
        if (event.target.checked) {
          // Rajouter une classe "done" afin de faire apparaître
          // la tâche comme terminée
          newTodo.addClass('done');
          // Sinon
        } else {
          // Enlever la classe "done" afin de faire apparaître
          // la tâche comme non terminée
          newTodo.removeClass('done');
        }
      }
    );

    // Sélectionne l'élément de texte
    const todoNameElement = newTodo.find('.todo-name');
    // Sélectionne le formulaire de changememt de nom
    const nameEdit = newTodo.find('.todo-edit-name');
    // Associe une action au fait de valider le formulaire de changement de nom
    nameEdit.on(
      'submit',
      function(event) {
        // Empêche le rechargement de la page
        // (comportement normal du fait de valider un formulaire)
        event.preventDefault();
        // Récupère la valeur du champ texte
        const newName = nameEdit.find('.todo-edit-name-input').val();
        // Remplace le texte du nouvel élément de liste par ce texte
        todoNameElement.text(newName);
        // Masque le formulaire
        nameEdit.addClass('d-none');
        // Affiche l'élément de texte
        todoNameElement.removeClass('d-none');
      }
    );

    // Sélectionne le bouton "Modifier"
    const editButton = newTodo.find('.todo-buttons-edit');
    // Associe une action au fait de cliquer sur le bouton "Modifier"
    editButton.on(
      'click',
      function() {
        // Masquer l'élément de texte
        todoNameElement.addClass('d-none');
        // Afficher le formulaire de changement de nom
        nameEdit.removeClass('d-none');
        // Donne au champ texte du formulaire la valeur actuelle de l'élément de texte
        const nameInput = newTodo.find('.todo-edit-name-input');
        nameInput.val(todoNameElement.text());
      }
    );

    // Sélectionne le bouton "Supprimer"
    const deleteButton = newTodo.find('.todo-buttons-delete');
    // Associe une action au fait de cliquer sur le bouton "Supprimer"
    deleteButton.on(
      'click',
      function() {
        // Supprime l'élément de la liste
        newTodo.remove();
      }
    );
  },
};

// Initialise l'application automatiquement au chargement de la page
app.init();
