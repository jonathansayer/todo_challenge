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

  describe("adding and changing chores in the chores arrey", function() {

    beforeEach(inject(function() {
      ctrl.chore = "Shopping"
      ctrl.chores = []
      ctrl.addToList();
    }));

    it('adds a chore to the Chores array', function(){
      expect(ctrl.chores).toEqual([{"name" : "Shopping", "isDone" : false}]);
    })

    it('is able to change a chore from being not Done to Done', function(){
      ctrl.choreComplete(ctrl.chores[0])
      expect(ctrl.chores[0].isDone).toEqual(true)
    })
  })

  describe("calculating how many chores are done and not done", function() {

    beforeEach(inject(function(){
      ctrl.chores =[{"name" : "Shopping ", "isDone": true}, {"name" : "Washing", "isDone": false}]
      ctrl.NumberDone()
    }))

    it('is able to calculate how many chores are done', function(){
      expect(ctrl.doneCounter).toEqual(1)
    })

    it('is able to calculate how many chores are not done', function() {
      expect(ctrl.notDoneCounter).toEqual(1)
    })
  })

  describe("Removing Chores from the Chores array", function() {

    beforeEach(inject(function() {
      ctrl.chores =[{"name" : "Shopping ", "isDone": true}, {"name" : "Washing", "isDone": false}, {"name" : "Gym", "isDone" : true}]
    }))

    describe("clearing completed chores", function() {

      beforeEach(inject(function() {
        ctrl.clearCompleted()
      }))


      it('is able to clear all completed tasks', function() {
        expect(ctrl.chores).toEqual([{"name" : "Washing", "isDone": false}])
      })

      it('is able to update the NumberDone when chores are removed from the chores array', function(){
        expect(ctrl.doneCounter).toEqual(0)
      })
    })

    describe("deleting chores from Chores Array", function() {

      beforeEach(inject(function() {
        ctrl.deleteChore(ctrl.chores[0])
      }))

      it('is able to delete a chore from the Chores array', function() {
        expect(ctrl.chores).toEqual([{"name" : "Washing", "isDone": false},{"name" : "Gym", "isDone" : true}])
      })

      it('is able to update the Number done when one chore is removed', function() {
        expect(ctrl.doneCounter).toEqual(1)
      })
    })
  })

})
