describe("todoListController", function(){
  beforeEach(module('todoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('todoListController');
  }));

  it('initialises with an empty input field and list', function(){
    expect(ctrl.chore).toBeUndefined();
    expect(ctrl.chores).toBeUndefined();
  })

  it('adds a chore to the Chores array', function(){
    ctrl.chore = "Shopping"
    ctrl.chores = []
    ctrl.addToList();
    expect(ctrl.chores).toEqual([{"name" : "Shopping", "isDone" : false}]);
  })

  it('is able to change a chore from being not Done to Done', function(){
    ctrl.chore = "Shopping"
    ctrl.chores = []
    ctrl.addToList();
    ctrl.choreComplete(ctrl.chores[0])
    expect(ctrl.chores[0].isDone).toEqual(true)
  })

  it('is able to calculate how many chores are done', function(){
    ctrl.chores =[{"name" : "Shopping ", "isDone": true}, {"name" : "Washing", "isDone": false}]
    ctrl.NumberDone()
    expect(ctrl.doneCounter).toEqual(1)
  })

  it('is able to calculate how many chores are not done', function() {
    ctrl.chores = [{"name" : "Shopping ", "isDone": true}, {"name" : "Washing", "isDone": false}]
    ctrl.NumberDone()
    expect(ctrl.notDoneCounter).toEqual(1)
  })

  it('is able to delete a chore from the Chores array', function() {
    ctrl.chores =[{"name" : "Shopping ", "isDone": true}, {"name" : "Washing", "isDone": false}]
    ctrl.deleteChore(ctrl.chores[0])
    expect(ctrl.chores).toEqual([{"name" : "Washing", "isDone": false}])
  })

  it('is able to clear all completed tasks', function() {
    ctrl.chores =[{"name" : "Shopping ", "isDone": true}, {"name" : "Washing", "isDone": false}, {"name" : "Gym", "isDone" : true}]
    ctrl.clearCompleted()
    expect(ctrl.chores).toEqual([{"name" : "Washing", "isDone": false}])
  })

  it('is able to update the NumberDone when chores are removed from the chores array', function(){
    ctrl.chores =[{"name" : "Shopping ", "isDone": true}, {"name" : "Washing", "isDone": false}, {"name" : "Gym", "isDone" : true}]
    ctrl.clearCompleted()
    expect(ctrl.doneCounter).toEqual(0)
  })

  it('is able to update the Number done when one chore is removed', function() {
    ctrl.chores =[{"name" : "Shopping ", "isDone": true}, {"name" : "Washing", "isDone": false}, {"name" : "Gym", "isDone" : true}]
    ctrl.deleteChore(ctrl.chores[0]);
    expect(ctrl.doneCounter).toEqual(1)
  })

})
