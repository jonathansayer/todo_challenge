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


})
