todoList.controller('todoListController', [function() {

var self = this
var chores =[]

self.addToList = function(){
  console.log(self.chore)
  chores.push(self.chore)
  console.log(chores)
  self.chore = ""
}

}]);