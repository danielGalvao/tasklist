Template.novo.events({
  "submit form": function(e, template){
    e.preventDefault();
    let _input = $('#tarefa');
    let tarefa = _input.val();
    Meteor.call("adiciona",{nome: tarefa});
    _input.val('');
  }
});
