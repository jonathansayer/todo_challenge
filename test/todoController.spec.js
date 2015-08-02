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

  


})




