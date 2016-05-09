Template.novo.events({
  "submit form": function(e, template){
    e.preventDefault();
    let _input = $('#tarefa');
    let tarefa = _input.val();
    Tarefas.insert({nome: tarefa, data: new Date()});
    _input.val('');
  }
});
