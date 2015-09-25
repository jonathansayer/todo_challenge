describe('To do List', function() {

  var addChore = element(by.model('todoCtrl.chore'))
  var addButton = element(by.className('addBtn'))
  var checkBox = element(by.className('check'))
  var deleteButton = element(by.className('deleteBtn'))
  var clearButton = element(by.className('clearBtn'))


   beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todo Challenge');
  });

  it('allows a user to enter chores', function(){
    addChore.sendKeys('Grocery Shop');
    addButton.click();

    var list = element.all(by.repeater('chore in todoCtrl.chores'));
    expect(list.get(0).getText()).toContain('Grocery Shop');
  })

  it("allows a user to complete a task", function(){
    addChore.sendKeys('Complete Challenge');
    addButton.click();
    checkBox.click();
    expect(element(by.className('done')).getText()).toEqual('1 Tasks Complete');
  })

  it("will change the number of completed tasks if checked then unchecked", function(){
    addChore.sendKeys('Do the Garden');
    addButton.click();
    checkBox.click();
    checkBox.click();
    expect(element(by.className('done')).getText()).toEqual('0 Tasks Complete');
  })

  it('allows a user to delete an entry', function() {
    addChore.sendKeys('Do the Garden');
    addButton.click();
    deleteButton.click();
    var list = element.all(by.repeater('chore in todoCtrl.chores'));
    expect(list).isNotPresent;
  })

  it('allows for a user to delete all completed tasks', function() {
    addChore.sendKeys('Complete Challenge');
    addButton.click();
    checkBox.click();
    addChore.sendKeys('Do the Garden');
    addButton.click();
    clearButton.click();
    var list = element.all(by.repeater('chore in todoCtrl.chores'));
    expect(list.get(0).getText()).toContain('Do the Garden')
  })
});
